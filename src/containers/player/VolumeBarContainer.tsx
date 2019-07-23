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

class VolumeBarContainer extends Component<VolumeBarContainerProps> {
  
  handleVolumeChanged= (value: number) => {
    this.props.updateVolume(value);
  }

  render() {
    return (
      <VolumeBar 
        volume={this.props.volume}
        onVolumeChange={this.handleVolumeChanged}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VolumeBarContainer);