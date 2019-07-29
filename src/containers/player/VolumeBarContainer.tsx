import React, { Component } from 'react'
import { AppState } from '../../shared/types/states';
import { MyThunkDispatch } from '../../shared/types/common';
import { bindActionCreators } from 'redux';
import VolumeBar from '../../components/Player/VolumeBar';
import { updateVolume } from '../../store/actions/PlayerActions';
import { connect } from 'react-redux';

const mapStateToProps = (state: AppState) => {
  return {
    volume: state.player.volume,
  }
}

const mapDispatchToProps = (dispatch: MyThunkDispatch) => bindActionCreators({
  updateVolume,
}, dispatch);
export type VolumeBarContainerProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

type State = {
  volumeDouble: number;
}
class VolumeBarContainer extends Component<VolumeBarContainerProps, State> {
  readonly state: State = {
    volumeDouble: 100,
  }
  handleVolumeChanged= (value: number) => {
    this.props.updateVolume(value);
  }

  handleButtonClick = () => {
    this.setState({
      volumeDouble: this.props.volume,
    })
    this.props.updateVolume(this.props.volume ? 0 : this.state.volumeDouble );
  }
  render() {
    return (
      <VolumeBar 
        volume={this.props.volume}
        onVolumeChange={this.handleVolumeChanged}
        onButtonClick={this.handleButtonClick}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VolumeBarContainer);