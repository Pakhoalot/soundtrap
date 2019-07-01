import React from 'react';
import { Link } from 'react-router-dom';
import NavSession from './NavSession';
import NavSearch from './NavSearch';
import NavUserContainer from '../../containers/NavUserContainer';

export default class Nav extends React.Component {
  render() {
    const {
      
    } = this.props;
    return (
      <div className="nav">
        <div className="nav__inner container">
          <div className="nav__section">
            <i className="nav__logo__icon ion-radio-waves"></i>
            <Link className="nav__logo__text" to="">SoundTrap</Link>
          </div>
          <div className="nav__section nav__section--session">
            <NavSession />
          </div>
          <div className="nav__section nav__section--search">
            <NavSearch />
          </div>
          <div className="nav__section nav__section--user">
            <NavUserContainer />
          </div>
        </div>
      </div>
    )
  }
}