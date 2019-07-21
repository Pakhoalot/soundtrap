import { FetchTrackSucessAction, FetchTrackFailureAction, FetchTracksSucessAction, FetchTracksFailureAction, FetchTrackThunkAction, FetchTracksThunkAction, FetchTracksSubresThunkAction, FetchTrackSubresSucessAction, FetchTrackSubresFailureAction } from './../../shared/types/actions';
import { FETCH_TRACKS_FAILURE, FETCH_TRACKS_SUCESS, FETCH_TRACK_SUBRESOURCE_SUCESS, FETCH_TRACK_SUBRESOURCE_FAILURE } from './../../constants/ActionTypes';
import { Track, TrackFilters } from './../../shared/types/soundCloud';
import { fetchTrackById } from '../../services/track';
import { FETCH_TRACK_SUCESS, FETCH_TRACK_FAILURE } from '../../constants/ActionTypes';
// import { trackSubresources } from '../../constants/ApiConstants';

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

export function fetchTrackSubresSucess(subResource: any): FetchTrackSubresSucessAction {
  return {
    type: FETCH_TRACK_SUBRESOURCE_SUCESS,
    subResource,
  }
}

export function fetchTrackSubresFailure(error: Error): FetchTrackSubresFailureAction {
  return {
    type: FETCH_TRACK_SUBRESOURCE_FAILURE,
    error,
  }
}

// export function fetchTrack(trackId: string): FetchTrackThunkAction{
//   return async (dispatch) => {
//     try {
//       const track = await fetchTrackById(trackId);
//       dispatch(fetchTrackSucess(track));
//     } catch (error) {
//       dispatch(fetchTrackFailure(error));
//     }
//   }
// }

// export function fetchTracks(options?: TrackFilters): FetchTracksThunkAction{
//   return async (dispatch) => {
//     try {
//       const track = await fetchTracks({ filters: options });
//       dispatch(fetchTracksSucess(track));
//     } catch (error) {
//       dispatch(fetchTracksFailure(error));
//     }
//   }
// }

// export function fetchTrackSubresource(args: {
//   trackId: string;
//   resName: keyof (typeof trackSubresources);
//   resId?: string;
//   filters?: TrackFilters;
// }): FetchTracksSubresThunkAction {
//   return async (dispatch) => {
//     try {
//       const res = await getTrackSubresource(args);
//       dispatch(fetchTrackSubresSucess(res));
//     } catch (error) {
//       dispatch(fetchTrackSubresFailure(error))
//     }
//   }
// }
