import React, { Component } from 'react'

type Props = {
  isActive: boolean;
  isPlaying: boolean;
}
export default class ArtworkPlay extends Component<Props> {
  render() {
    const { isActive, isPlaying } = this.props;
    return (
      <div
        className={`artwork-play ${isActive ? 'artwork-play--active' : ''}`}
        role="button"
        tabIndex={0}
      >
        <i className={`artwork-play__icon ion-${isActive && isPlaying ? 'radio-waves' : 'ios-play'}`} />
      </div>
    )
  }
}
