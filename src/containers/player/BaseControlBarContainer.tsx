import React, { Component } from 'react'
import { AppState } from '../../shared/types/states';
import { MyThunkDispatch } from '../../shared/types/common';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BaseControlBar from '../../components/Player/BaseControlBar';
import { togglePlay } from '../../store/actions/PlayerActions';

const mapStateToProps = (state: AppState) => {
  return {
    isPlayed: state.player.isPlayed,
    canPlayed: state.player.canPlayed
  }
}

const mapDispatchToProps = (dispatch: MyThunkDispatch) => bindActionCreators({
  togglePlay
}, dispatch);

type ownProps = {
  className?: string;
}

export type ContainerProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & ownProps;
class BaseControlBarContainer extends Component<ContainerProps> {
  
  handlePlayClicked = () => {
    this.props.togglePlay();
  }
  render() {
    const { isPlayed, canPlayed, className } = this.props;

    return (
      <BaseControlBar
        className={ className }
        isPlayed={ isPlayed }
        canPlayed={ canPlayed }
        onPlayClick={ this.handlePlayClicked } 
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseControlBarContainer);