import React, { Component } from 'react'
import Popover from '../Popover';
import { NavUserProps } from '../../containers/NavUserContainer';

export default class NavUser extends Component<NavUserProps> {
  render() {
    const {
      login
    } = this.props;
    if (false) {
      return (
        <Popover className="nav-user popover--right">
          <div className="nav-user__trigger">
            <div
              className="nav-user__avatar"
              style={{ backgroundImage: `url()`}}
              >
              <i className="nav-user__chevron ion-chevron-down" />
            </div>
          </div>
        </Popover>
      )
    }
    else {
      return (
        <Popover className="nav-user popover--right">
          <div className="nav-user__trigger">
            <i className="nav-user__icon ion-person"/>
            <i className="nav-user__chevron ion-chevron-down"/>
          </div>
          <div className="nav-user__popover-content">
            <div
              className="button button--orange button--block button--margin"
              onClick={ login }
              role="button"
              tabIndex={0}
              >
              Sign into SoundCloud
            </div>
          </div>
        </Popover>
      )
    }
  }
}
