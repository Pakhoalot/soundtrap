import React, { Component } from 'react'
import SongsHeaderGenres from './SongsHeaderGenres';
import SongsHeaderTimes from './SongsHeaderTimes';
import { GENRES, TIMES } from '../../constants/PlaylistConstants';

type SongsHeaderProps = {
  activeGenreIndex: number;
  activeTimeIndex: number;
  genres: typeof GENRES;
  times: typeof TIMES;
}

export default class SongsHeader extends Component<SongsHeaderProps> {
  render() {
    const {
      activeGenreIndex,
      activeTimeIndex,
      genres,
      times,
    } = this.props
    return (
      <div className={`songs-header`}>
        <div className="songs-header__inner">
          <div className="songs-header__sections container">
            <div className="songs-header__section songs-header__section--genres">
              <SongsHeaderGenres 
                activeIndex={ activeGenreIndex }
                genres={ genres }
                />
            </div>
            <div className="songs-header__section songs-header__section--time">
              <SongsHeaderTimes />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
