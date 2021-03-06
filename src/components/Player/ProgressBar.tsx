import React, { Component } from 'react';
import Slide from './Slide';
import { SecToMin } from '../../utils/DateUtil';

type Props = {
  className?: string;
  progress: number;
  currentTime: number;
  duration: number;
  onProgressChange?: (value: number) => void;
  onProgressMouseDown?: () => void;
  onProgressMouseUp?: () => void;
  onProgressMove?: (value: number) => void;
  onProgressClick?:(value: number) => void;
};
export default class ProgressBar extends Component<Props> {
  render() {
    const {
      className,
      progress,
      currentTime,
      duration,
      onProgressChange,
      onProgressMouseDown,
      onProgressMouseUp,
      onProgressMove,
      onProgressClick
    } = this.props;
    return (
      <div className={className}>
        <Slide
          className="player__process"
          precentage={progress}
          onChange={onProgressChange}
          onMouseDown={onProgressMouseDown}
          onMouseUp={onProgressMouseUp}
          onMouseMove={onProgressMove}
          onMouseClick={onProgressClick}
        />
        <span className="player__time">
          {SecToMin(currentTime)} / {SecToMin(duration)}
        </span>
      </div>
    );
  }
}
