export const API_HOSTNAME = '//api.soundcloud.com';
export const CLIENT_ID = 'hEeTe3w0kD3pTBJiAN5RdFCbgqXQkNEx';

// export const CLIENT_ID = 'z8LRYFPM4UK5MMLaBe9vixfph5kqNA25';

const constructUrl = (url:string) => `${API_HOSTNAME}${url}${url.indexOf('?') === -1 ? '?' : '&'}client_id=${CLIENT_ID}`;

export const USER_FOLLOWINGS_URL = constructUrl('/users/:id/followings');
export const USER_PROFILES_URL = constructUrl('/users/:id/web-profiles');
export const USER_URL = `/users/:id`;
export const USER_SONGS_URL = constructUrl('/users/:id/tracks');

export const PLAYLIST_URL = '/playlists/:id';
export const PLAYLISTS_URL = '/tracks';

export const TRACK_URL = '/tracks/:id';
export const TRACKS_URL = '/tracks';

export const userSubresources = {
  tracks: '/tracks',
  playlists: '/playlists',
  followings: '/followings',
  following: '/following/:id',
  followers: '/followers',
  follower: '/followers/:id',
  comments: '/comments',
  favorites: '/favorites',
  favorite: 'favorites/:id',
  webProfiles: '/web-profiles',
};

export const trackSubresources = {
  comments: '/comments',
  comment: '/comments/:id',
  favoriters: '/favoriters',
  favoriter: '/favoriters/:id',
  secretToken: '/secret-token',
}

export const playlistSubresources = {
  secretToken: '/secret-token'
}