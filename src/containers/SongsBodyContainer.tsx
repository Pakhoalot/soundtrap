import React, { Component, Props } from 'react'
import { MyThunkDispatch } from '../shared/types/common';
import { bindActionCreators } from 'redux';
import { AppState } from '../shared/types/states';
import SongsBody from '../components/Songs/SongsBody';
import { connect } from 'react-redux';
import { fetchTracks } from '../store/actions/TrackActions';
import { RouteComponentProps, withRouter } from 'react-router';

const mapStateToProps = (state: AppState) => {
  return {
    songs: state.track.tracks,
    playingSongId: state.track.activeTrackId,
    activeGenre: state.songsFilter.activeGenreIndex,
    genres: state.songsFilter.genres,
  }
}

const mapDispatchToProps = (dispatch: MyThunkDispatch) => bindActionCreators({
  fetchTracks,
}, dispatch);

export type SongsBodyContainerProps =  ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & RouteComponentProps;

class SongsBodyContainer extends Component<SongsBodyContainerProps> {
  
  componentDidMount() {
    const { genres, activeGenre, fetchTracks } = this.props;
    

    fetchTracks({
      genres: genres[activeGenre]? genres[activeGenre].query: '',
      limit: 20,
      offset: 0
    });
  }

  // static getDerivedStateFromProps(nextProps: SongsBodyContainerProps, prevState: any) {
  //   console.log(nextProps, prevState)
  //   return null;
  // }
  componentWillReceiveProps(newProps: SongsBodyContainerProps) {
    if(newProps.activeGenre === this.props.activeGenre) return;
    
    const { fetchTracks, genres, activeGenre } = newProps;
    // fetchTracks({
    //   genres: genres[activeGenre]? genres[activeGenre].query: '',
    //   limit: 20,
    //   offset: 0
    // });
  }

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SongsBodyContainer));
