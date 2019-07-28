import { CHANGE_TIME,CHANGE_GENRE } from './../../constants/ActionTypes';
import { GENRES, TIMES } from '../../constants/PlaylistConstants';
import { SongFilterAction } from '../../shared/types/actions';

type State = {
  activeGenreIndex: number | null;
  activeTimeIndex: number | null,
  genres: typeof GENRES,
  times: typeof TIMES
}
const initialState: State = {
  activeGenreIndex: null,
  activeTimeIndex: null,
  genres: GENRES,
  times: TIMES

};

export default function songsFilterReducer(
  state = initialState,
  action: SongFilterAction,
): State {
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
