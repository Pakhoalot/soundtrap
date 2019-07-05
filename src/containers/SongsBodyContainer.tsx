import React, { Component } from 'react'
import { MyThunkDispatch } from '../shared/types/common';
import { bindActionCreators } from 'redux';
import { AppState } from '../shared/types/states';
import SongsBody from '../components/Songs/SongsBody';
import { connect } from 'react-redux';

const songs = (() => {
  let songMaker = (id: number) => (
    {
      artworkUrl: '/artwork.jpg',
      id: `test-id${id}`,
      title: 'testtitle',
      user: {
        avatarUrl: '/avatar.jpg',
        username: 'testname',
      }
    })
    
  return Array(23).fill(0).map((_, index) => songMaker(index))
})();
console.log(songs);

const mapStateToProps = (state: AppState) => {
  return {
    songs: songs,
    playingSongId: songs[3].id
  }
}

const mapDispatchToProps = (dispatch: MyThunkDispatch) => bindActionCreators({

}, dispatch);

export type SongsBodyContainerProps =  ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class SongsBodyContainer extends Component<SongsBodyContainerProps> {
  render() {
    const {
      songs,
      playingSongId
    } = this.props;
    return (
      <SongsBody 
        songs={songs}
        playingSongId={playingSongId}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongsBodyContainer);
