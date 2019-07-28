import React, { Component } from 'react'
import Slide from './Slide';

type Props = {
  volume: number;
  onVolumeChange?: (value: number) => void;
  onButtonClick?: () => void
}
export default class VolumeBar extends Component<Props> {
  render() {
    const { volume, onVolumeChange, onButtonClick } = this.props;
    return (
      <div className="player__control-bar__volume-bar">
        <i className={`player__button ${ 
          volume === 0 ?
          'ion-android-volume-mute' :
          volume < 50 ? 
          'ion-android-volume-down' : 
          'ion-android-volume-up' }`}
          onClick={ onButtonClick }/>
        <Slide
          className="player__volume-slide"
          precentage={volume}
          onChange={onVolumeChange}
        />
      </div>
    )
  }
}
