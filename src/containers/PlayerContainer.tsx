import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AppState } from '../shared/types/states';
import { bindActionCreators } from 'redux';
import { MyThunkDispatch } from '../shared/types/common';
import Player from '../components/Player';

const mapStateToProps = (state: AppState) => {
  return {

  }
}

const mapDispatchToProps = (dispatch: MyThunkDispatch) => bindActionCreators({

}, dispatch);

export type PlayerContainerProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

type State = {
  progress: number;
  volume: number;
  isPlayed: boolean;
}
class PlayerContainer extends Component<PlayerContainerProps, State> {
  readonly state: State = {
    progress: 0,
    volume: 0,
    isPlayed: false,
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

  render() {
    return (
      <Player
        progress={ this.state.progress }
        onProgressChange={ this.handleProgressChange }
        volume={ this.state.volume }
        onVolumeChange = { this.handleVolumeChange }
        isPlayed={ this.state.isPlayed }
        onPlayClick={ this.handlePlayClick }
      />
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);