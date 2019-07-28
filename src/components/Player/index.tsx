import React, { Component } from 'react';
import { Track } from '../../shared/types/soundCloud';
import { getVoidTrack } from '../../utils/trackUtil';
import StatusBar from './StatusBar';
import MenuButton from './MenuButton';
import VolumeBarContainer from '../../containers/player/VolumeBarContainer';
import BaseControlBarContainer from '../../containers/player/BaseControlBarContainer';
import ProgressBarContainer from '../../containers/player/ProgressBarContainer';

type Props = {
  track?: Track | null;
};

export default class Player extends Component<Props> {
  render() {
    let { track } = this.props;
    // 如果没有track传入，初始化一个空的track
    if (!track) track = getVoidTrack();
    return (
      <div className="player">
        <div className="player__inner">
          <StatusBar className="player__status-bar" track={track} />
          <div className="player__control-bar">
            <BaseControlBarContainer
              className="player__control-bar__base"
            />
            <ProgressBarContainer className="player__control-bar__progress-bar" />
            <div className="player__control-bar__advance">
              <VolumeBarContainer />
              <i className="player__button ion-shuffle" />
              <MenuButton />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
