import React, { Component } from 'react'

type Props = {
  className: string;
}
export default class Heart extends Component<Props> {
  render() {
    const {
      className,
    } = this.props;
    return (
      <div className={`heart ${className}`}>
        <i className="heart__icon ion-ios-heart" />
      </div>
    )
  }
}
