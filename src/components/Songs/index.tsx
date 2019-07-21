import React, { Component } from 'react'
import SongsHeaderContainer from '../../containers/SongsHeaderContainer';
import SongsBodyContainer from '../../containers/SongsBodyContainer';

export default class Songs extends Component {
  render() {
    return (
      <div>
        <SongsHeaderContainer />
        <div className="container">
          <SongsBodyContainer />
        </div>
      </div>
    )
  }
}
