import { PlayerBaseAction } from './actions';
import { User, Track } from './soundCloud';
import {
  LOGIN_SUCCESS,
  LOGOUT,
  FETCH_USER_PROFILES_SUCCESS,
  CHANGE_GENRE,
  CHANGE_TIME,
  FETCH_TRACKS_SUCESS,
  FETCH_TRACKS_FAILURE,
  FETCH_TRACK_SUCESS,
  FETCH_TRACK_FAILURE,
  FETCH_TRACK_SUBRESOURCE_SUCESS,
  FETCH_TRACK_SUBRESOURCE_FAILURE,
  UPDATE_CURRENT_TIME,
  TOGGLE_PLAY,
  UPDATE_VOLUME,
  UPDATE_CURRENT_TRACK,
  UPDATE_DURATION,
  UPDATE_CAN_PLAYED,
  CURRENT_TIME_JUMP_TO,
  PAUSE,
  PLAY
} from './../../constants/ActionTypes';
import {
  WINDOW_RESIZE,
  FETCH_NEW_STREAM_SONGS_SUCCESS,
  FETCH_NEW_STREAM_SONGS_FAIL
} from '../../constants/ActionTypes';
import { ThunkAction } from 'redux-thunk';
import { AppState } from './states';
import { Action } from 'redux';

/**
 * fetch fail actions prototype
 */
export interface FetchFailureAction<T extends Error> {
  type: string;
  error: T;
}

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
 * SessionActions.ts ActionTypes
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

export type PlaylistActionTypes = FetchNewStreamSongsSucessAction;
// | FetchNewStreamSongsFailAction;

/**
 * UserActions
 */

export interface fetchUserProfilesSucessAction {
  type: typeof FETCH_USER_PROFILES_SUCCESS;
  id: string;
  profile: User;
}

export type FetchUserProfilesThunkAction = ThunkAction<
  void,
  AppState,
  null,
  fetchUserProfilesSucessAction
>;

export type UserActionTypes =
  | fetchUserProfilesSucessAction
  | FetchUserProfilesThunkAction;

export interface SongFilterAction {
  type: typeof CHANGE_GENRE | typeof CHANGE_TIME;
  activeIndex: number;
}

/**
 * track actions
 */

export interface FetchTrackSucessAction {
  type: typeof FETCH_TRACK_SUCESS;
  track: Track;
}

export interface FetchTrackFailureAction extends FetchFailureAction<Error> {
  type: typeof FETCH_TRACK_FAILURE;
}

export interface FetchTracksSucessAction {
  type: typeof FETCH_TRACKS_SUCESS;
  tracks: Track[];
}

export interface FetchTracksFailureAction extends FetchFailureAction<Error> {
  type: typeof FETCH_TRACKS_FAILURE;
}

export interface FetchTrackSubresSucessAction {
  type: typeof FETCH_TRACK_SUBRESOURCE_SUCESS;
  subResource: User | User[] | Comment | Comment[];
}

export interface FetchTrackSubresFailureAction  extends FetchFailureAction<Error> {
  type: typeof FETCH_TRACK_SUBRESOURCE_FAILURE;
}

export type FetchTrackThunkAction = ThunkAction<
  void,
  AppState,
  null,
  FetchTrackSucessAction | FetchTrackFailureAction
>;

export type FetchTracksThunkAction = ThunkAction<
  void,
  AppState,
  null,
  FetchTracksSucessAction | FetchTracksFailureAction
>;
export type FetchTracksSubresThunkAction = ThunkAction<
  void,
  AppState,
  null,
  FetchTrackSubresSucessAction | FetchTrackSubresFailureAction
>;
export type TrackActionTypes =
  | FetchTrackSucessAction
  | FetchTrackFailureAction
  | FetchTracksSucessAction
  | FetchTracksFailureAction
  | FetchTrackSubresSucessAction
  | FetchTrackSubresFailureAction


/**
 * player actions 
 */
export interface UpdateCurrentTimeAction {
  type: typeof UPDATE_CURRENT_TIME;
  value: number;
  
}

export interface UpdateDurationAction {
  type: typeof UPDATE_DURATION;
  value: number;
}
export interface PlayerBaseAction {
  type: typeof TOGGLE_PLAY | typeof PLAY | typeof PAUSE;
}

export interface UpdateVolumeAction {
  type: typeof UPDATE_VOLUME;
  value: number;
}

export interface UpdateCurrentTrackAction {
  type: typeof UPDATE_CURRENT_TRACK;
  track: Track;
}

export interface UpdateCanPlayedAction {
  type: typeof UPDATE_CAN_PLAYED;
  value: boolean;
}

export interface CurrentTimeJumpToAction {
  type: typeof CURRENT_TIME_JUMP_TO;
  value: number;
}
export type PlayerActionTypes =
| UpdateCurrentTimeAction
| PlayerBaseAction
| UpdateVolumeAction
| UpdateCurrentTrackAction
| UpdateDurationAction
| UpdateCanPlayedAction
| CurrentTimeJumpToAction