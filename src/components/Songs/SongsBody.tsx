import React, { Component, ReactNodeArray } from 'react'
import SongsBodyCard from './SongsBodyCard';
import { Track } from '../../shared/types/soundCloud';

type Props = {
  songs: Track[];
  playingSongId: string;
}
export default class SongsBody extends Component<Props> {
  render() {
    const cardPerRow = 4;
    const { 
      songs,
      playingSongId,
    } = this.props;
    const rows: ReactNodeArray = [];
    let row: ReactNodeArray = [];
    songs.forEach((song, index) => {
      row.push(
        <div className="row__cell" key={ song.id }>
          <SongsBodyCard 
            isActive={ playingSongId === song.id }
            isPlaying={ false }
            song={ song }
            />
        </div>
      )
      // push the construct row into rows;
      if((index % cardPerRow === cardPerRow-1) || index === songs.length-1) {
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
