import React, { Component } from 'react';
import { AppState } from '../shared/types/states';
import { MyThunkDispatch } from '../shared/types/common';
import SongsHeader from '../components/Songs/SongsHeader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeGenre, changeTime } from '../store/actions/SongsFilterActions';
import qs from 'querystringify';
import { withRouter, RouteComponentProps } from 'react-router';

const mapStateToProps = (state: AppState) => {
  return {
    ...state.songsFilter,
  };
};

const mapDispatchToProps = (dispatch: MyThunkDispatch) =>
  bindActionCreators({
    changeGenre,
    changeTime,
  }, dispatch);

export type SongsHeaderContainerProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & RouteComponentProps;

export class SongsHeaderContainer extends Component<SongsHeaderContainerProps> {
  
  componentDidMount() {
    const { genres, changeGenre, location } = this.props;
    const search: any = qs.parse(location.search);

    if(search['genre']) {
      const genreIndex = genres.reduce((prevVal, curVal, curIndex) => {
        if (curVal.key === search['genre']) return curIndex;
        else return prevVal;
      }, -1);
      console.log(genreIndex);
      changeGenre(genreIndex);
    }
  }
  render() {
    const { 
      genres,
      times,
      activeGenreIndex,
      activeTimeIndex,
      changeGenre,
      changeTime,
    } = this.props;
    return (
    <SongsHeader 
      activeGenreIndex={ activeGenreIndex }
      activeTimeIndex={ activeTimeIndex }
      genres={ genres }
      times={ times }
      changeGenre={ changeGenre }
      changeTime={ changeTime }
      />
    )
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SongsHeaderContainer)
)
