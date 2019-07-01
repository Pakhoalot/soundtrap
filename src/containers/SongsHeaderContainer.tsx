import React, { Component } from 'react';
import { AppState } from '../shared/types/states';
import { MyThunkDispatch } from '../shared/types/common';
import SongsHeader from '../components/Songs/SongsHeader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GENRES, TIMES } from '../constants/PlaylistConstants';


const mapStateToProps = (state: AppState) => {
  return {
    genres: GENRES,
    times: TIMES
  };
};

const mapDispatchToProps = (dispatch: MyThunkDispatch) =>
  bindActionCreators({}, dispatch);

export type SongsHeaderContainerProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export class SongsHeaderContainer extends Component<SongsHeaderContainerProps> {
  state = {
    activeGenreIndex: -1,
    activeTimeIndex: -1,
  }

  render() {
    const { activeGenreIndex, activeTimeIndex } = this.state;
    const { genres, times } = this.props;
    return (
    <SongsHeader 
      activeGenreIndex={ activeGenreIndex }
      activeTimeIndex={ activeTimeIndex }
      genres={ genres }
      times={ times }
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongsHeaderContainer);
