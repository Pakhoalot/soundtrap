import { CLIENT_ID } from './../constants/ApiConstants';
import { Track } from './../shared/types/soundCloud';

export function getVoidTrack(): Track {
  return {
    title: '',
    user: {
      username: '',
      uri: '',
    },
    artworkUrl: '',
    genre: '',
    id: '',
  }
}
export function getTrackStreamUrl(url: string): string {
  if(!url) return '';
  return `${url}?client_id=${CLIENT_ID}`;
}