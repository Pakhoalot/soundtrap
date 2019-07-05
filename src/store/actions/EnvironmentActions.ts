import { ResizeAction, InitEnvironmentThunkAction } from '../../shared/types/actions';
import { WINDOW_RESIZE } from '../../constants/ActionTypes';

export function windowResize(height: number, width: number): ResizeAction {
  return {
    type: WINDOW_RESIZE,
    height,
    width,
  }
};

export function initEnvironment(): InitEnvironmentThunkAction {
  return (dispatch) => {
    dispatch(windowResize(window.innerHeight, window.innerWidth));
  
    window.onresize = () => {
      dispatch(windowResize(window.innerHeight, window.innerWidth))
    }
  }
}
