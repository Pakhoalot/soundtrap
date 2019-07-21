import React, { Component } from 'react'
import Popover from '../Popover';

export default class MenuButton extends Component {
  render() {
    return (
      <Popover className="popover--topleft">
        <i className="player__button ion-android-menu" />
        <div className="menu-panel">
          <div className="menu-panel__inner">
            
          </div>
        </div>
      </Popover>
    )
  }
}
