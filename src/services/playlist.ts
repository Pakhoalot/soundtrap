import { Playlist, PlaylistFilters } from './../shared/types/soundCloud';
import { CLIENT_ID, PLAYLIST_URL, playlistSubresources, PLAYLISTS_URL } from './../constants/ApiConstants';
import { $axios, constructUrlWithId } from '../utils/ApiUtil';
const camelize = require('camelize');


export function getPlaylistById(playlistId: string): Promise<Playlist> {
  return $axios.get(constructUrlWithId(PLAYLIST_URL, playlistId), {
    params: {
      client_id: CLIENT_ID,
    }
  }).then(response => {
      return camelize(response.data);
  })
}

export function getPlaylists(args: {
  filters?: PlaylistFilters;
}) {
  const { filters } = args;
  return $axios
    .get(PLAYLISTS_URL, {
      params: {
        client_id: CLIENT_ID,
        ...filters
      }
    })
    .then(res => camelize(res.data));
}

export function getPlaylistSubresource(
  args: {
    playlistId: string;
    resName: keyof (typeof playlistSubresources);
    resId?: string;
    filters?: PlaylistFilters;
  }
) {
  const { playlistId, resName, resId, filters } = args;
  let fullUrl = constructUrlWithId(PLAYLIST_URL, playlistId);
  if (resId) fullUrl += constructUrlWithId(playlistSubresources[resName], resId);
  else fullUrl += playlistSubresources[resName];
  return $axios
    .get(fullUrl, {
      params: {
        client_id: CLIENT_ID,
        ...filters
      }
    })
    .then(res => camelize(res.data));
}
