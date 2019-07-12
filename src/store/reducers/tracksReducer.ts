import { FETCH_TRACKS_FAILURE, FETCH_TRACK_SUBRESOURCE_FAILURE, FETCH_TRACKS_SUCESS } from './../../constants/ActionTypes';
import { TrackActionTypes } from './../../shared/types/actions';
import { Track } from "../../shared/types/soundCloud";
import { FETCH_TRACK_FAILURE } from '../../constants/ActionTypes';
import { getImageUrl } from '../../utils/ImageUtils';
import IMAGE_SIZES from '../../constants/ImageConstants';


interface stateInterface {
  tracks: Track[];
  activeTrackId: string;
}

const initialState: stateInterface = {
  tracks: [],
  activeTrackId: ''
};

export default function tracksReducer(
  state = initialState,
  action: TrackActionTypes,
): typeof initialState {
  switch (action.type) {
    case FETCH_TRACKS_SUCESS:
      const tracks = action.tracks.map(t => {
        if (t.artworkUrl) {
          t.artworkUrl = getImageUrl(t.artworkUrl, IMAGE_SIZES.LARGE);
        }
        return t;
      })
      return {
        ...state,
        tracks: [...state.tracks, ...tracks],
      }
    case FETCH_TRACK_FAILURE:
    case FETCH_TRACKS_FAILURE:
    case FETCH_TRACK_SUBRESOURCE_FAILURE:
      console.log(action.error);
      return state;
    default:
      return state;
  }
}
