import React, { Component } from 'react'
import Slide from './Slide';

type Props = {
  volume: number;
  onVolumeChange?: (value: number) => void;
}
export default class VolumeBar extends Component<Props> {
  render() {
    const { volume, onVolumeChange } = this.props;
    return (
      <div className="player__control-bar__volume-bar">
        <i className="player__button ion-volume-low" />
        <Slide
          className="player__volume-slide"
          precentage={volume}
          onChange={onVolumeChange}
        />
      </div>
    )
  }
}
