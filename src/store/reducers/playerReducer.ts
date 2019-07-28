import {
  TOGGLE_PLAY,
  UPDATE_VOLUME,
  UPDATE_CURRENT_TRACK,
  UPDATE_DURATION,
  UPDATE_CAN_PLAYED,
  CURRENT_TIME_JUMP_TO,
  PAUSE,
  PLAY,
} from './../../constants/ActionTypes';
import { Track } from '../../shared/types/soundCloud';
import { UPDATE_CURRENT_TIME } from '../../constants/ActionTypes';
import { PlayerActionTypes } from '../../shared/types/actions';

type State = {
  currentTrack: Track | null;
  progress: number;
  preload: number;
  autoPlay: boolean;
  volume: number;
  loop: boolean;
  muted: boolean;
  isPlayed: boolean;
  canPlayed: boolean;
  currentTime: number;
  newCurrentTime: number;
  duration: number;
  history: Track[];
};

const initialState: State = {
  isPlayed: false,
  canPlayed: false,
  autoPlay: true,
  loop: false,
  muted: false,
  currentTrack: null,
  progress: 0,
  preload: 0,
  volume: 100,
  currentTime: 0,
  newCurrentTime: 0,
  duration: 0,
  history: []
};

export default function songsFilterReducer(
  state = initialState,
  action: PlayerActionTypes
): typeof initialState {
  switch (action.type) {
    case UPDATE_CURRENT_TIME:
      return {
        ...state,
        currentTime: action.value,
        progress: computeProgress(action.value, state.duration),
      };
    case PLAY:
      return {
        ...state,
        isPlayed: true,
      }
    case PAUSE:
      return {
        ...state,
        isPlayed: false,
      }
    case TOGGLE_PLAY:
      return {
        ...state,
        isPlayed: state.canPlayed && !state.isPlayed
      };
    case UPDATE_VOLUME:
      return {
        ...state,
        volume: action.value
      };
    case UPDATE_CURRENT_TRACK:
      return {
        ...state,
        currentTrack: action.track,
        currentTime: 0,
        newCurrentTime: 0,
        isPlayed: true,
        canPlayed: false,
        history: state.history.some(t => t.id === action.track)
          ? state.history
          : [...state.history, action.track]
      };
    case UPDATE_DURATION:
      return {
        ...state,
        duration: action.value
      };
    case UPDATE_CAN_PLAYED:
      return {
        ...state,
        canPlayed: action.value,
      }
    case CURRENT_TIME_JUMP_TO: {
      return {
        ...state,
        newCurrentTime: action.value,
      }
    }
    default:
      return state;
  }
}

function computeProgress(a: number, b: number) {
  return a / b * 100;
}