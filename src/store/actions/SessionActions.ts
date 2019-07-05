import { CLIENT_ID } from '../../constants/ApiConstants';
import {
  FetchNewStreamSongsSucessAction,
  FetchNewStreamSongsFailAction,
  LoginSucessAction,
  LoginThunkAction,
  LogoutThunkAction,
  InitAuthThunkAction
} from '../../shared/types/actions';
import {
  FETCH_NEW_STREAM_SONGS_SUCCESS,
  FETCH_NEW_STREAM_SONGS_FAIL,
  LOGIN_SUCCESS,
  LOGOUT
} from '../../constants/ActionTypes';
import Cookies from 'js-cookie';
import { callApi } from '../../utils/ApiUtil';
import { loginToSoundCloud } from '../../services/auth';

const COOKIE_PATH = 'oauthToken';

// export function fetchNewStreamSongsSucess(
//   songs,
//   entities,
//   futureUrl: string
// ): FetchNewStreamSongsSucessAction {
//   return {
//     type: FETCH_NEW_STREAM_SONGS_SUCCESS,
//     entities,
//     futureUrl,
//     songs
//   };
// }

export function fetchNewStreamSongsFail(
  error: string
): FetchNewStreamSongsFailAction {
  return {
    type: FETCH_NEW_STREAM_SONGS_FAIL,
    error: error
  };
}

// export function fetchNewStreamSongs(url: string): ThunkAction<void, AppState, null, SessionActions> {
//   return async (dispatch, getState) => {
//     const result = await callApi(url);
//     if(result.error) return dispatch(fetchNewStreamSongsFail(result.error));
//     const { json } = result;
//     const { playlists } = getState();
//     const item = SESSION_STREAM_PLAYLIST in playlists
//       ? playlists[SESSION_STREAM_PLAYLIST].items
//       : [];
//   }
// }

export function loginSucess(oauthToken: string): LoginSucessAction {
  return {
    type: LOGIN_SUCCESS,
    oauthToken
  };
}

export function login(): LoginThunkAction {
  return async (dispatch) => {
    const { result } = await loginToSoundCloud(CLIENT_ID);
    const oauthToken: string = result.oauthToken;
    Cookies.set(COOKIE_PATH, oauthToken);
    dispatch(loginSucess(oauthToken));
  };
}

export function logout(): LogoutThunkAction {
  return async dispatch => {
    Cookies.remove(COOKIE_PATH);
    dispatch({ type: LOGOUT });
  };
}

export function initAuth(): InitAuthThunkAction {
  return (dispatch) => {
    const oauthToken = Cookies.get(COOKIE_PATH);
    if(oauthToken) {
      dispatch(loginSucess(oauthToken));
    }
  }
}