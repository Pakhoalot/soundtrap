import React, { Component } from 'react'
import { Track } from '../../shared/types/soundCloud';


type Props = {
  track: Track | null;
  className?: string;
}

export default class StatusBar extends Component<Props> {
  render() {
    const { track, className } = this.props;
    return (
      <div className={`status-bar ${className || ''}`}>
        <div className="player__cover"></div>
        <div className="player__status-bar__info">
          <a className="player__track-title">{ (track && track.title) || '' }</a>
          <a className="player__track-author">{ (track && track.user && track.user.username) || '' }</a>
        </div>
      </div>
    )
  }
}
