export const API_HOSTNAME = '//api.soundcloud.com';
export const CLIENT_ID = 'a281614d7f34dc30b665dfcaa3ed7505';

// export const CLIENT_ID = 'z8LRYFPM4UK5MMLaBe9vixfph5kqNA25';

const constructUrl = (url:string) => `${API_HOSTNAME}${url}${url.indexOf('?') === -1 ? '?' : '&'}client_id=${CLIENT_ID}`;

// export const SESSION_FOLLOWINGS_URL = `${API_HOSTNAME}/me/followings`;
// export const SESSION_LIKES_URL = `${API_HOSTNAME}/me/favorites`;
// export const SESSION_PLAYLISTS_URL = `${API_HOSTNAME}/me/playlists`;
// export const SESSION_STREAM_URL = `${API_HOSTNAME}/me/activities/tracks/affiliated?limit=50`;
// export const SESSION_USER_URL = `${API_HOSTNAME}/me`;
// export const SONG_URL = constructUrl('/tracks/:id');
// export const SONG_COMMENTS_URL = constructUrl('/tracks/:id/comments');
// export const SONGS_URL = constructUrl('/tracks?linked_partitioning=1&limit=50&offset=0');
// export const TOGGLE_FOLLOW_URL = `${API_HOSTNAME}/me/followings/:id`;
// export const TOGGLE_LIKE_URL = `${API_HOSTNAME}/me/favorites/:id`;
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