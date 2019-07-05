import { CLIENT_ID } from '../../constants/ApiConstants';
import {
  LoginSucessAction,
  LoginThunkAction,
  LogoutThunkAction,
  InitAuthThunkAction
} from '../../shared/types/actions';
import {
  LOGIN_SUCCESS,
  LOGOUT
} from '../../constants/ActionTypes';
import Cookies from 'js-cookie';
import { loginToSoundCloud } from '../../services/auth';

const COOKIE_PATH = 'oauthToken';

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