import React from 'react';
import RouterContainer from '../containers/RouterContainer';
import NavContainer from '../containers/NavContainer';

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <NavContainer />
        <RouterContainer />
      </div>
    )
  }
}