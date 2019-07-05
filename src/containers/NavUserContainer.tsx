import React from 'react';
import { login, logout } from '../store/actions/SessionActions';
import NavUser from '../components/Nav/NavUser';
import { AppState } from '../shared/types/states';
import { bindActionCreators } from 'redux';
import { MyThunkDispatch } from '../shared/types/common';
import { connect } from 'react-redux';
import { fetchUserProfiles } from '../store/actions/UserActions';


const mapStateToProps = (state: AppState) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch: MyThunkDispatch) => bindActionCreators({
  login,
  logout,
  fetchUserProfiles,
}, dispatch);

export type NavUserProps = ReturnType<typeof mapDispatchToProps>

const NavUserContainer = (props: NavUserProps) => (<NavUser {...props} />)

export default connect(mapStateToProps, mapDispatchToProps)(NavUserContainer);