import React, { Component } from 'react';
import Slide from './Slide';
import { Track } from '../../shared/types/soundCloud';
import { getVoidTrack } from '../../utils/trackUtil';
import StatusBar from './StatusBar';
import BaseControlBar from './BaseControlBar';
import MenuButton from './MenuButton';
import VolumeBar from './VolumeBar';

type Props = {
  progress: number;
  volume: number;
  isPlayed: boolean;
  onProgressChange?: (value: number) => void;
  onVolumeChange?: (value: number) => void;
  onPlayClick?: () => void;
  onBackwardClick?: () => void;
  onForwardClick?: () => void;
  track?: Track;
};

export default class Player extends Component<Props> {
  render() {
    const {
      progress,
      onProgressChange,
      volume,
      onVolumeChange,
      isPlayed,
      onPlayClick,
      onBackwardClick,
      onForwardClick,
    } = this.props;
    let { track } = this.props;
    // 如果没有track传入，初始化一个空的track
    if (!track) track = getVoidTrack();
    return (
      <div className="player">
        <div className="player__inner">
          <StatusBar className="player__status-bar" track={track} />
          <div className="player__control-bar">
            <BaseControlBar
              className="player__control-bar__base"
              isPlayed={isPlayed}
              onPlayClick={ onPlayClick }
              onBackwardClick={ onBackwardClick }
              onForwardClick={ onForwardClick }
            />
            <div className="player__control-bar__progress-bar">
              <Slide
                className="player__process"
                precentage={progress}
                onChange={onProgressChange}
              />
              <span className="player__time">{'0:00'} / {'0:00'}</span>
            </div>
            <div className="player__control-bar__advance">
              <VolumeBar onVolumeChange={ onVolumeChange } volume={ volume }/>
              <i className="player__button ion-shuffle" />
              <MenuButton />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
