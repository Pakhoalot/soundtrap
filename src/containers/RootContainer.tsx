import React, { Component } from 'react';
import { connect } from 'react-redux';

import Root from '../components/Root';
import { initEnvironment } from '../store/actions/EnvironmentActions';
import { initAuth } from '../store/actions/SessionActions';
import { AppState } from '../shared/types/states';
import { bindActionCreators } from 'redux';
import { MyThunkDispatch } from '../shared/types/common';


const mapStateToProps = (state: AppState) => {
  return {

  }
}

const mapDispatchToProps = (dispatch: MyThunkDispatch) => bindActionCreators({
  initEnvironment,
  initAuth,
}, dispatch);

export type RootContainerProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;


class RootContainer extends Component<RootContainerProps> {
  componentDidMount() {
    const { initEnvironment, initAuth } = this.props;
    initEnvironment();
    initAuth();
  }
  render() {
    return (
      <Root />
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);