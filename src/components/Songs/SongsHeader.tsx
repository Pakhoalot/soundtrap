import React, { Component } from 'react'
import SongsHeaderGenres from './SongsHeaderGenres';
import SongsHeaderTimes from './SongsHeaderTimes';
import { GENRES, TIMES } from '../../constants/PlaylistConstants';
type SongsHeaderProps = {
  activeGenreIndex: number;
  activeTimeIndex: number;
  genres: typeof GENRES;
  times: typeof TIMES;
  changeTime: (index: number) => void;
  changeGenre: (index: number) => void;
}

export default class SongsHeader extends Component<SongsHeaderProps> {
  render() {
    const {
      activeGenreIndex,
      activeTimeIndex,
      genres,
      times,
      changeGenre,
      changeTime
    } = this.props
    return (
      <div className={`songs-header`}>
        <div className="songs-header__inner">
          <div className="songs-header__sections">
            <div className="songs-header__section songs-header__section--genres">
              <SongsHeaderGenres 
                activeIndex={ activeGenreIndex }
                genres={ genres }
                changeGenre={ changeGenre }
                />
            </div>
            <div className="songs-header__section songs-header__section--time">
              <SongsHeaderTimes 
                activeIndex={ activeTimeIndex }
                times={ times }
                changeTime={ changeTime }/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
