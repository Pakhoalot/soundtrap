import React, { Component } from 'react'
import InfiniteScroll from '../InfiniteScroll';
import SongsBody from './SongsBody';
import SongsHeaderContainer from '../../containers/SongsHeaderContainer';
import SongsBodyContainer from '../../containers/SongsBodyContainer';

export default class Songs extends Component {
  render() {
    return (
      <InfiniteScroll onScroll={ () => null }>
        <SongsHeaderContainer />
        <div className="container">
          <SongsBodyContainer />
        </div>
      </InfiniteScroll>
    )
  }
}
