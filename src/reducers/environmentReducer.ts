import { EnvironmentActionTypes } from '../shared/types/actions';
import { WINDOW_RESIZE } from '../constants/ActionTypes';


const initialState = {
  height: 0,
  width: 0,
}

export default function environmentReducer(state = initialState, action: EnvironmentActionTypes) {
  switch (action.type) {
    case WINDOW_RESIZE:
      return {
        ...state,
        height: action.height,
        width: action.width,
      }
    default:
      return state;
  }
}