import { LOGIN_SUCCESS, LOGOUT } from '../../constants/ActionTypes';
import { SessionActionTypes } from '../../shared/types/actions';
const initialState = {
  followings: {},
  id: '',
  likes: {},
  oauthToken: '',
  newStreamSongs: []
};

export default function sessionReducer(
  state = initialState,
  action: SessionActionTypes
): typeof initialState {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        oauthToken: action.oauthToken
      };
    case LOGOUT:
      return {
        ...initialState
      }
    default:
      return state;
  }
}
