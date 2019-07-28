import React, { Component } from 'react';
import { GENRES } from '../../constants/PlaylistConstants';
import { Link } from 'react-router-dom';
import { LocationDescriptor } from 'history';


type State = {
  expanded: boolean;
};

type Props = {
  activeIndex: number | null;
  genres: typeof GENRES;
  handleLinkTo: (query:string, key: string) => LocationDescriptor;
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
    const { activeIndex, genres, handleLinkTo } = this.props;
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
            activeIndex && genres[activeIndex]
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
            >
              <Link
                className="songs-header__genre__text"
                to={ handleLinkTo('genre', gen.key) }
               >
                { gen.key }
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
