import React from 'react';
import RouterContainer from '../containers/RouterContainer';
import NavContainer from '../containers/NavContainer';
import PlayerContainer from '../containers/PlayerContainer';

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <NavContainer />
        <RouterContainer />
        <PlayerContainer />
      </div>
    )
  }
}