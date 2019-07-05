import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GENRES } from '../../constants/PlaylistConstants';

type State = {
  expanded: boolean;
};

type Props = {
  activeIndex: number;
  genres: typeof GENRES;
  changeGenre: (i: number) => void;
};

export default class SongsHeaderGenres extends Component<Props, State> {
  state = {
    expanded: false
  };

  handleClick = () => {
    this.setState(state => ({
      expanded: !state.expanded
    }));
  };

  render() {
    const { expanded } = this.state;
    const { activeIndex, genres, changeGenre } = this.props;
    return (
      <div
        className={`songs-header__genres ${
          expanded ? 'songs-header__genres--expanded' : ''
        }`}
      >
        <div
          className="songs-header__genre--active"
          onClick={this.handleClick}
          role="button"
          tabIndex={0}
        >
          { 
            genres[activeIndex]
            ? genres[activeIndex].key
            : 'genre' 
          }
        </div>
        <div className="songs-header__genres__main">
          {genres.map((gen, index) => (
            <div
              className={`songs-header__genre ${
                activeIndex === index ? 'songs-header__genre--active' : ''
              }`}
              key={gen.key}
              onClick={ () => {
                activeIndex === index ? changeGenre(-1): changeGenre(index)
              } }
            >
              <a 
                className="songs-header__genre__text"
                
               >
                { gen.key }
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
