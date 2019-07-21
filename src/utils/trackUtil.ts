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