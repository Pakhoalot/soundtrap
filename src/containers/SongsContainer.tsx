import React, { Component } from 'react';
import { AppState } from '../shared/types/states';
import { MyThunkDispatch } from '../shared/types/common';
import Songs from '../components/Songs';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RouteComponentProps } from 'react-router';
import { changeGenre, changeTime } from '../store/actions/SongsFilterActions';
import queryStringfy from 'querystringify';

const mapStateToProps = (state: AppState) => {
  return {
    genres: state.songsFilter.genres,
    times: state.songsFilter.times,
  }
}

const mapDispatchToProps = (dispatch: MyThunkDispatch) => bindActionCreators({
  changeGenre,
  changeTime,
}, dispatch);

export type SongsContainerProps =  ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & RouteComponentProps;

export class SongsContainer extends Component<SongsContainerProps> {
  
  componentDidUpdate() {
    const { genres, times, location, changeGenre, changeTime } = this.props;
    const search: any = queryStringfy.parse(location.search);
    
    if(search['genre']) {
      const genreIndex = genres.reduce((prevVal, curVal, curIndex) => {
        if (curVal.key === search['genre']) return curIndex;
        else return prevVal;
      }, -1);
      changeGenre(genreIndex);
    }

    if(search['time']) {
      const timeIndex = times.reduce((prevVal, curVal, curIndex) => {
        if (curVal.key === search['time']) return curIndex;
        else return prevVal;
      }, -1);
      changeTime(timeIndex);
    }
  }

  render() {
    return (
      <Songs />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongsContainer);