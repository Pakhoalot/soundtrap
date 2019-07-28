import React, { Component } from 'react';
import { MyThunkDispatch } from '../shared/types/common';
import { bindActionCreators } from 'redux';
import { AppState } from '../shared/types/states';
import SongsBody from '../components/Songs/SongsBody';
import { connect } from 'react-redux';
import { fetchTracks } from '../services/track';
import { Track } from '../shared/types/soundCloud';
import InfiniteScroll from '../components/InfiniteScroll';
import Loader from '../components/Loader';
import { updateCurrentTrack } from '../store/actions/PlayerActions';
import { TimeFilterCalculator } from '../utils/DateUtil';

const mapStateToProps = (state: AppState) => {
  const activeGenre =
    state.songsFilter.activeGenreIndex !== null
    ? state.songsFilter.genres[state.songsFilter.activeGenreIndex].query 
    : null;
  const activeTime =
    state.songsFilter.activeTimeIndex !== null
    ? state.songsFilter.times[state.songsFilter.activeTimeIndex].key
    : null;
  return {
    currentTrack: state.player.currentTrack,
    isPlayed: state.player.isPlayed,
    activeGenre,
    activeTime,
  };
};

const mapDispatchToProps = (dispatch: MyThunkDispatch) =>
  bindActionCreators({
    updateCurrentTrack,
  }, dispatch);
export type SongsBodyContainerProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;
export type SongsBodyContainerState = {
  trackList: Track[];
  limit: number;
  offset: number;
  hasMore: boolean;
};
class SongsBodyContainer extends Component<
  SongsBodyContainerProps,
  SongsBodyContainerState
> {
  readonly state: SongsBodyContainerState = {
    trackList: [],
    limit: 30,
    offset: 0,
    hasMore: true,
  };

  componentDidUpdate(
    prevProps: SongsBodyContainerProps,
    prevState: SongsBodyContainerState
  ) {
    if (prevProps.activeGenre !== this.props.activeGenre
      || prevProps.activeTime !== this.props.activeTime) {
      this.setState(() => ({
        trackList: [],
        offset: 0
      }));
    }
  }

  fetchData = () => {
    const { activeGenre, activeTime } = this.props;
    const { offset, limit } = this.state;

    return fetchTracks({
      filters: {
        limit,
        offset,
        tags: activeGenre ? activeGenre : undefined,
        'created_at[from]': activeTime ? TimeFilterCalculator(+activeTime): undefined,
      }
    }).then(tracks => {
      this.setState(state => ({
        trackList: [...state.trackList, ...tracks],
        offset: state.offset + state.limit,
        hasMore: !!tracks.length,
      }));
    });
  };

  handleCardClick = (track: Track) => {
    this.props.updateCurrentTrack(track);
  };

  render() {
    const { currentTrack } = this.props;
    const { trackList } = this.state;
    return (
      <InfiniteScroll
        next={this.fetchData}
        hasMore={this.state.hasMore}
        loader={<Loader className="loader--full" isLoading={true} />}
        endMessage={<div>no more</div>}
        onRefresh={() => console.log(`refreshFunction`)}
      >
        <SongsBody
          tracks={trackList}
          currentTrack={currentTrack}
          onCardclick={this.handleCardClick}
          isPlayed
        />
      </InfiniteScroll>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongsBodyContainer);
