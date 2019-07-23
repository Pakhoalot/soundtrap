import {
  UPDATE_VOLUME,
  UPDATE_CURRENT_TRACK,
  UPDATE_DURATION,
  CURRENT_TIME_JUMP_TO,
  UPDATE_PROGRESS,
  UPDATE_CURRENT_TIME,
  TOGGLE_PLAY,
  UPDATE_CAN_PLAYED,
  PLAY,
  PAUSE,
} from './../../constants/ActionTypes';

import { Track } from '../../shared/types/soundCloud';

export function updateProgress(value: number) {
  return {
    type: UPDATE_PROGRESS,
    value
  };
}

export function updateCurrentTime(value: number) {
  return {
    type: UPDATE_CURRENT_TIME,
    value
  };
}

export function togglePlay() {
  return {
    type: TOGGLE_PLAY
  };
}

export function updateVolume(value: number) {
  return {
    type: UPDATE_VOLUME,
    value
  };
}
export function updateDuration(value: number) {
  return {
    type: UPDATE_DURATION,
    value
  };
}

export function updateCurrentTrack(newTrack: Track) {
  return {
    type: UPDATE_CURRENT_TRACK,
    track: newTrack,
  };
}

export function updateCanPlayed(value: boolean) {
  return {
    type: UPDATE_CAN_PLAYED,
    value
  };
}

export function currentTimeJumpTo(value: number) {
  return {
    type: CURRENT_TIME_JUMP_TO,
    value
  };
}

export function play() {
  return {
    type: PLAY,
  };
}

export function pause() {
  return {
    type: PAUSE
  };
}
