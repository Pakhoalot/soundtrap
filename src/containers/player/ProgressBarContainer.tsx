import React, { Component } from 'react'
import { AppState } from '../../shared/types/states';
import { MyThunkDispatch } from '../../shared/types/common';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProgressBar from '../../components/Player/ProgressBar';
import { currentTimeJumpTo } from '../../store/actions/PlayerActions';

const mapStateToProps = (state: AppState) => {
  return {
    progress: state.player.progress,
    currentTime: state.player.currentTime,
    duration: state.player.duration
  }
}

const mapDispatchToProps = (dispatch: MyThunkDispatch) => bindActionCreators({
  currentTimeJumpTo
}, dispatch);
type ownProps = {
  className?: string;
}

type State = {
  progressMoveTriggered: boolean;
  progressDouble: number;
}

export type ContainerProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & ownProps;
class ProgressBarContainer extends Component<ContainerProps, State> {

  readonly state: State = {
    progressMoveTriggered: false,
    progressDouble: this.props.progress,
  }

  handleProgressChanged = (value: number) => {
    this.setState({
      progressDouble: value,
    })
  }
  handleProgressMouseDown = () => {
    this.setState({
      progressMoveTriggered: true,
      progressDouble: this.props.progress,
    })
  }
  handleProgressMouseUp = () => {
    console.log('mouseup');
    this.props.currentTimeJumpTo(this.state.progressDouble * this.props.duration / 100);
    this.setState({
      progressMoveTriggered: false,
    })
  }

  render() {
    const { className, progress, currentTime, duration } = this.props;
    const { progressMoveTriggered, progressDouble } = this.state;
    return (
      <ProgressBar
        className={ className }
        progress={ progressMoveTriggered ? progressDouble : progress }
        currentTime={ currentTime }
        duration={duration}
        onProgressChange={ this.handleProgressChanged }
        onProgressMouseDown={this.handleProgressMouseDown}
        onProgressMouseUp={this.handleProgressMouseUp}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBarContainer);