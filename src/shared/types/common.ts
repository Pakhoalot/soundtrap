import { AppState } from './states';
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from 'redux';

export type MyThunkDispatch = ThunkDispatch<AppState, null, AnyAction>;