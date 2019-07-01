import { LoginSucessAction } from './actions';
import { LOGIN_SUCCESS, LOGOUT } from './../../constants/ActionTypes';
import {
  WINDOW_RESIZE,
  FETCH_NEW_STREAM_SONGS_SUCCESS,
  FETCH_NEW_STREAM_SONGS_FAIL
} from '../../constants/ActionTypes';
import { ThunkAction } from 'redux-thunk';
import { AppState } from './states';
import { Action } from 'redux';
/**
 * document for EnvironmentActions.ts ActionTypes
 */
export interface ResizeAction {
  type: typeof WINDOW_RESIZE;
  height: number;
  width: number;
}
export type InitEnvironmentThunkAction = ThunkAction<
  void,
  AppState,
  null,
  ResizeAction
>;
export type EnvironmentActionTypes = ResizeAction;

/**
 * document for SessionActions.ts ActionTypes
 */
export interface LoginSucessAction {
  type: typeof LOGIN_SUCCESS;
  oauthToken: string;
}


export interface LogoutSucessAction {
  type: typeof LOGOUT;
}

export interface FetchNewStreamSongsSucessAction {
  type: typeof FETCH_NEW_STREAM_SONGS_SUCCESS;
  entities: [];
  futureUrl: string;
  songs: [];
}
export interface FetchNewStreamSongsFailAction {
  type: typeof FETCH_NEW_STREAM_SONGS_FAIL;
  error: string;
}

export type LoginThunkAction = ThunkAction<
  void,
  AppState,
  null,
  LoginSucessAction
>;
export type LogoutThunkAction = ThunkAction<
  void,
  AppState,
  null,
  LogoutSucessAction
>;
export type InitAuthThunkAction = ThunkAction<
  void,
  AppState,
  null,
  LoginSucessAction | Action<undefined>
>;

export type SessionActionTypes =
  | FetchNewStreamSongsSucessAction
  | FetchNewStreamSongsFailAction
  | LoginSucessAction
  | LogoutSucessAction;

export type PlaylistActionTypes =
  | FetchNewStreamSongsSucessAction
  | FetchNewStreamSongsFailAction;
