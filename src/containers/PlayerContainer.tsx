import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../shared/types/states';
import { bindActionCreators } from 'redux';
import { MyThunkDispatch } from '../shared/types/common';
import Player from '../components/Player';
import Audio from '../components/Player/Audio';
import { Track } from '../shared/types/soundCloud';
import { fetchTrackById } from '../services/track';
import { updateCurrentTrack } from '../store/actions/PlayerActions';

const mapStateToProps = (state: AppState) => {
  return {
    currentTrack: state.player.currentTrack,
  }
}

const mapDispatchToProps = (dispatch: MyThunkDispatch) => bindActionCreators({
  updateCurrentTrack
}, dispatch);
export type PlayerContainerProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;


class PlayerContainer extends Component<PlayerContainerProps> {
  
  render() {
    const { currentTrack } = this.props;
    return (
      <div>
        <Audio
          src={(currentTrack && currentTrack.streamUrl) || ''}
          />
        <Player
          track={ currentTrack }
        />  
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);