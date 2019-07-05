import React, { Component } from 'react'

type Props = {
  className: string;
  isLoading: boolean; 
}

export default class Loader extends Component<Props> {
  render() {
    const {
      children,
      className,
      isLoading,  
    } = this.props;
    if(isLoading) {
      return (
        <div className={`loader ${className}`}>
          <div className="loader__rects">
            <div className="loader__rect loader__rect--1"></div>
            <div className="loader__rect loader__rect--2"></div>
            <div className="loader__rect loader__rect--3"></div>
            <div className="loader__rect loader__rect--4"></div>
            <div className="loader__rect loader__rect--5"></div>
          </div>
        </div>
      )
    } else return children;
  }
}
