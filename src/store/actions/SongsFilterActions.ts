import { CHANGE_GENRE, CHANGE_TIME } from './../../constants/ActionTypes';
import { SongFilterAction } from './../../shared/types/actions';

export function changeGenre(activeIndex: number): SongFilterAction {
  return {
    type: CHANGE_GENRE,
    activeIndex,
  }
}

export function changeTime(activeIndex: number): SongFilterAction {
  return {
    type: CHANGE_TIME,
    activeIndex,
  }
}