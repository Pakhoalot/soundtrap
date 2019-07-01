import React from 'react';
import Nav from '../components/Nav';
import { AppState } from '../shared/types/states';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators, AnyAction } from 'redux';


const mapStateToProps = (state: AppState) => ({
  
})

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, null, AnyAction>) => bindActionCreators({

}, dispatch);

export type NavContainerProps =  ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const NavContainer = (props: NavContainerProps) => <Nav {...props}/>



export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);