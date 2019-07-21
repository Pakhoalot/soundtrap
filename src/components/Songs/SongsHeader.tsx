import React, { Component } from 'react'
import SongsHeaderGenres from './SongsHeaderGenres';
import SongsHeaderTimes from './SongsHeaderTimes';
import { GENRES, TIMES } from '../../constants/PlaylistConstants';
import { SONGS_PATH } from '../../constants/RoutePath';
import queryStringify from 'querystringify';
import { LocationDescriptor } from 'history';

type SongsHeaderProps = {
  activeGenreIndex: number;
  activeTimeIndex: number;
  genres: typeof GENRES;
  times: typeof TIMES;
}

export default class SongsHeader extends Component<SongsHeaderProps> {
  
  
  handleLinkTo = (query: string, key: string) => {
    
    const result = {
      pathname: SONGS_PATH,
      search: {}
    };
    const { activeGenreIndex, genres, activeTimeIndex, times } = this.props;
    if(query === 'time') {
      Object.assign(result.search, { time: key });
      if(activeGenreIndex !== -1) Object.assign(result.search, {genre: genres[activeGenreIndex].key});
    } else if (query === 'genre') {
      Object.assign(result.search, { genre: key });
      if(activeTimeIndex !== -1) Object.assign(result.search, {  time: times[activeTimeIndex].key });
    }

    result.search = queryStringify.stringify(result.search);
    
    return result as LocationDescriptor;
  }


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
          <div className="songs-header__sections">
            <div className="songs-header__section songs-header__section--genres">
              <SongsHeaderGenres 
                activeIndex={ activeGenreIndex }
                genres={ genres }
                handleLinkTo={ this.handleLinkTo }
                />
            </div>
            <div className="songs-header__section songs-header__section--time">
              <SongsHeaderTimes 
                activeIndex={ activeTimeIndex }
                times={ times }
                handleLinkTo={ this.handleLinkTo }/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
