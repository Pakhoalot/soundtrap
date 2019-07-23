import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AppState } from '../shared/types/states';
import { bindActionCreators } from 'redux';
import { MyThunkDispatch } from '../shared/types/common';
import Player from '../components/Player';
import Audio from '../components/Player/Audio';
import { Track } from '../shared/types/soundCloud';
import { fetchTrackById } from '../services/track';

const mapStateToProps = (state: AppState) => {
  return {

  }
}

const mapDispatchToProps = (dispatch: MyThunkDispatch) => bindActionCreators({

}, dispatch);

export type PlayerContainerProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

type State = {
  currentTrack: Track | null;
  progress: number;
  volume: number;
  loop: boolean;
  muted: boolean;
  isPlayed: boolean;
  canPlayed: boolean;
}
class PlayerContainer extends Component<PlayerContainerProps, State> {
  readonly state: State = {
    currentTrack: null,
    progress: 0,
    volume: 100,
    isPlayed: false,
    canPlayed: false,
    loop: false,
    muted: false,
  }
  handleProgressChange = (value: number) => {
    this.setState({
      progress: value,
    })
  }

  handleVolumeChange = (value: number) => {
    this.setState({
      volume: value,
    })
  }

  handlePlayClick = () => {
    this.setState((state) => ({
      isPlayed: !state.isPlayed
    }))
  }

  componentDidMount() {
    fetchTrackById('219787221').then((track: Track) => this.setState({
      currentTrack: track,
    }));
  }
  render() {
    const { currentTrack, loop, muted, volume, isPlayed } = this.state;
    return (
      <div>
        <Audio
          src={(currentTrack && currentTrack.streamUrl) || ''}
          loop={loop}
          volume={volume}
          isPlayed={isPlayed}
          muted={muted}/>
        <Player
          progress={ this.state.progress }
          onProgressChange={ this.handleProgressChange }
          volume={ this.state.volume }
          onVolumeChange = { this.handleVolumeChange }
          isPlayed={ this.state.isPlayed }
          canPlayed={ this.state.canPlayed }
          onPlayClick={ this.handlePlayClick }
          track={ currentTrack }
        />  
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);