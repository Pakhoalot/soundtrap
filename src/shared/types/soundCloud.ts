import { BinaryData } from "fs";

export interface SCError {
  errors: {
    errorMessage: string;
  }
}
export interface User {
  id?: string;
  permalink?: string;
  username?: string;
  uri?: string;
  permalinkUrl?: string;
  avatarUrl?: string;
  country?: string;
  fullName?: string;
  city?: string;
  description?: string;
  discogsName?: string;
  myspaceName?: string;
  website?: string;
  websiteTitle?: string;
  online?: boolean;
  trackCount?: number;
  playlistCount?: number;
  followersCount?: number;
  followingsCount?: number;
  publicFavoritesCount?: number;
  avatarData?: BinaryData;
}

export interface UserFilters {
  q?: string; // a string to search for
}
export interface Track {
  id?: string;
  createdAt?: Date;
  userId?:  string;
  user?: User;
  title?: string;
  permalink?: string;
  permalinkUrl?: string;
  uri?: string;
  sharing?: string;
  embeddableBy?: string;
  purchaseUrl?: string;
  artworkUrl?: string;
  description?: string;
  label?: string;
  duration?: string;
  genre?: string;
  tagList?: string[];
  labelId?: string;
  labelName?: string;
  release?: string;
  releaseDay?: number;
  releaseMonth?: number;
  releaseYear?: number;
  streamable?: boolean;
  downloadable?: boolean;
  state?: string;
  license?: string;
  trackType?: string;
  waveformUrl?: string;
  downloadUrl?: string;
  streamUrl?: string;
  videoUrl?: string;
  bpm?: number;
  commentable?: boolean;
  isrc?: string;
  keySignature?: string;
  commentCount?: number;
  downloadCount?: number;
  playbackCount?: number;
  favoritingsCount?: number;
  originalFormat?: number;
  originalContentSize?: number;
  assetData?:  BinaryData;
  artworkData?: BinaryData;
  userFavorite?: BinaryData;
}

export interface TrackFilters {
  q?: string; // a string to search for
  tags?: string[];
  filter?: 'all' | 'public' | 'private';
  license?: string;
  'bpm[from]'?: number;
  'bpm[to]'?: number;
  'duration[from]'?: number;
  'duration[to]'?: number;
  'created_at[from]'?: string;
  'created_at[to]'?: string;
  ids: string[];
  genres: string[];
  types: string[];
  
}
export interface Playlist {
  id?: string;
  createdAt?: Date;
  userId?:  string;
  user?: User;
  title?: string;
  permalink?: string;
  permalinkUrl?: string;
  uri?: string;
  sharing?: string;
  embeddableBy?: string;
  purchaseUrl?: string;
  artworkUrl?: string;
  description?: string;
  label?: string;
  duration?: string;
  genre?: string;
  tagList?: string[];
  labelId?: string;
  labelName?: string;
  release?: string;
  releaseDay?: number;
  releaseMonth?: number;
  releaseYear?: number;
  streamable?: boolean;
  downloadable?: boolean;
  ean?: string;
  playlistType?: string;
}

export interface PlaylistFilters {
  q?: string;
  representation?: string;
}

export interface Comment {
  id?: string;
  url?: string;
  createAt?: Date;
  body?: string;
  timestamp?: number;
  userId?: string;
  user?: string;
  trackId?: string;
}
