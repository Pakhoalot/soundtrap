import React, { Component } from 'react'
import InfiniteScroll from '../InfiniteScroll';
import SongsBody from './SongsBody';
import SongsHeaderContainer from '../../containers/SongsHeaderContainer';

export default class Songs extends Component {
  render() {
    return (
      <InfiniteScroll onScroll={ () => null }>
        <SongsHeaderContainer />
        <div className="container">
          <SongsBody />
        </div>
      </InfiniteScroll>
    )
  }
}
