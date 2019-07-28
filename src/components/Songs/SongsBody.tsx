import React, { Component, ReactNodeArray } from 'react'
import SongsBodyCard from './SongsBodyCard';
import { Track } from '../../shared/types/soundCloud';

type Props = {
  tracks: Track[];
  currentTrack: Track | null;
  onCardclick?: (track: Track) => void;
  isPlayed: boolean;
}
export default class SongsBody extends Component<Props> {
  render() {
    const cardPerRow = 4;
    const { 
      tracks,
      currentTrack,
      isPlayed,
    } = this.props;
    const rows: ReactNodeArray = [];
    let row: ReactNodeArray = [];
    tracks.forEach((track, index) => {
      row.push(
        <div className="row__cell" key={ track.id }>
          <SongsBodyCard 
            isActive={ !!currentTrack && (currentTrack.id === track.id) }
            isPlaying={ isPlayed }
            track={ track }
            onCardClick={this.props.onCardclick}
            />
        </div>
      )
      // push the construct row into rows;
      if((index % cardPerRow === cardPerRow-1) || index === tracks.length-1) {
        rows.push(
          <div className="row songs-body__row" key={ rows.length }>{ row }</div>
        );
        row = [];
      }
      
    });

    return (
      <div className="songs-body">
        <div className="songs-body__padder"></div>
        <div className="songs-body__main">
          { rows }
        </div>
        <div className="songs-body__padder"></div>
      </div>
    );
  }
}
