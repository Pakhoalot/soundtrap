import React, { Component } from 'react';
import { AppState } from '../shared/types/states';
import { MyThunkDispatch } from '../shared/types/common';
import Songs from '../components/Songs';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state: AppState) => {
  return {

  }
}

const mapDispatchToProps = (dispatch: MyThunkDispatch) => bindActionCreators({

}, dispatch);

export type SongsContainerProps =  ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export class SongsContainer extends Component {
  render() {
    return (
      <Songs />
    )
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(SongsContainer);