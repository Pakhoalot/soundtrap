import React from 'react';
import { login, logout } from '../actions/SessionActions';
import NavUser from '../components/Nav/NavUser';
import { AppState } from '../shared/types/states';
import { bindActionCreators } from 'redux';
import { MyThunkDispatch } from '../shared/types/common';
import { connect } from 'react-redux';

export type NavUserProps = ReturnType<typeof mapDispatchToProps>
const NavUserContainer = (props: NavUserProps) => (<NavUser {...props} />)

const mapStateToProps = (state: AppState) => {
  return {

  }
}
const mapDispatchToProps = (dispatch: MyThunkDispatch) => bindActionCreators({
  login,
  logout
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavUserContainer);