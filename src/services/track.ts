import { TrackFilters, Track } from './../shared/types/soundCloud';
import { CLIENT_ID, TRACK_URL, trackSubresources, TRACKS_URL } from './../constants/ApiConstants';
import { $axios, constructUrlWithId } from '../utils/ApiUtil';
const camelize = require('camelize');


export function getTrackById(trackId: string): Promise<Track> {
  return $axios.get(constructUrlWithId(TRACK_URL, trackId), {
    params: {
      client_id: CLIENT_ID,
    }
  }).then(response => {
      return camelize(response.data);
  })
}

export function getTracks(args: {
  filters?: TrackFilters;
}) {
  const { filters } = args;
  return $axios
    .get(TRACKS_URL, {
      params: {
        client_id: CLIENT_ID,
        ...filters
      }
    })
    .then(res => camelize(res.data));
}

export function getTrackSubresource(
  args: {
    trackId: string;
    resName: keyof (typeof trackSubresources);
    resId?: string;
    filters?: TrackFilters;
  }
) {
  const { trackId, resName, resId, filters } = args;
  let fullUrl = constructUrlWithId(TRACK_URL, trackId);
  if (resId) fullUrl += constructUrlWithId(trackSubresources[resName], resId);
  else fullUrl += trackSubresources[resName];
  return $axios
    .get(fullUrl, {
      params: {
        client_id: CLIENT_ID,
        ...filters
      }
    })
    .then(res => camelize(res.data));
}
