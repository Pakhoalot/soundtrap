import { CHANGE_TIME,CHANGE_GENRE } from './../../constants/ActionTypes';
import { GENRES, TIMES } from '../../constants/PlaylistConstants';
import { SongFilterAction } from '../../shared/types/actions';

const initialState = {
  activeGenreIndex: -1,
  activeTimeIndex: -1,
  genres: GENRES,
  times: TIMES

};

export default function songsFilterReducer(
  state = initialState,
  action: SongFilterAction,
): typeof initialState {
  switch (action.type) {
    case CHANGE_GENRE: 
      return {
        ...state,
        activeGenreIndex: action.activeIndex,
      }
    case CHANGE_TIME: 
      return {
        ...state,
        activeTimeIndex: action.activeIndex,
      }
    default:
      return state;
  }
}
