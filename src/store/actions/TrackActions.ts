import { FetchTrackSucessAction, FetchTrackFailureAction, FetchTracksSucessAction, FetchTracksFailureAction, FetchTrackThunkAction } from './../../shared/types/actions';
import { FETCH_TRACKS_FAILURE, FETCH_TRACKS_SUCESS } from './../../constants/ActionTypes';
import { Track } from './../../shared/types/soundCloud';
import { getTrackById } from '../../services/track';
import { FETCH_TRACK_SUCESS, FETCH_TRACK_FAILURE } from '../../constants/ActionTypes';

export function fetchTrackSucess(track: Track): FetchTrackSucessAction {
  return {
    type: FETCH_TRACK_SUCESS,
    track,
  }
}

export function fetchTrackFailure(error: Error): FetchTrackFailureAction {
  return {
    type: FETCH_TRACK_FAILURE,
    error,
  }
}

export function fetchTracksSucess(tracks: Track[]): FetchTracksSucessAction {
  return {
    type: FETCH_TRACKS_SUCESS,
    tracks,
  }
}

export function fetchTracksFailure(error: Error): FetchTracksFailureAction {
  return {
    type: FETCH_TRACKS_FAILURE,
    error,
  }
}

export function fetchTrack(trackId: string): FetchTrackThunkAction{
  return async (dispatch) => {
    try {
      const track = await getTrackById(trackId);
      dispatch(fetchTrackSucess(track));
    } catch (error) {
      dispatch(fetchTrackFailure(error));
    }
  }
}
