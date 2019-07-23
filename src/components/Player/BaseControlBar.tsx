import React, { Component, MouseEventHandler } from 'react'


type Props = {
  className?: string;
  isPlayed: boolean;
  canPlayed: boolean;
  onPlayClick?: () => void;
  onForwardClick?: () => void;
  onBackwardClick?: () => void;
}

export default class BaseControlBar extends Component<Props> {
  
  onPlayClick: MouseEventHandler = (event) =>  {
    this.props.onPlayClick && this.props.onPlayClick();
  }

  onBackwardClick: MouseEventHandler = (event) =>  {
    this.props.onBackwardClick && this.props.onBackwardClick();
  }

  onForwardClick: MouseEventHandler = (event) =>  {
    this.props.onForwardClick && this.props.onForwardClick();
  }

  render() {
    const { className, isPlayed, canPlayed } = this.props;
    return (
      <div className={`${className || ''}`}>
        <div className="player__button" onClick={ this.onBackwardClick }>
          <i className="player__button__icon ion-ios-skipbackward"></i>
        </div>
        <div className="player__button"  onClick={ this.onPlayClick }>
          <i className={`player__button__icon ion-ios-${canPlayed && isPlayed ? 'pause': 'play'}`}></i>
        </div>
        <div className="player__button" onClick={ this.onForwardClick }>
          <i className="player__button__icon ion-ios-skipforward"></i>
        </div>
      </div>
    )
  }
}
