import React, { Component } from 'react';
import { AppState } from '../shared/types/states';
import { MyThunkDispatch } from '../shared/types/common';
import SongsHeader from '../components/Songs/SongsHeader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeGenre, changeTime } from '../store/actions/SongsFilterActions';

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
  ReturnType<typeof mapDispatchToProps>;

export class SongsHeaderContainer extends Component<SongsHeaderContainerProps> {
  
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongsHeaderContainer);
