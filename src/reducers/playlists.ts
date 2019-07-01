import { PlaylistActionTypes } from './../shared/types/actions';
import { SESSION_STREAM_PLAYLIST, HISTORY_PLAYLIST } from './../constants/PlaylistConstants';
import { FETCH_NEW_STREAM_SONGS_SUCCESS, LOAD_NEW_STREAM_SONGS, FETCH_SONGS_REQUEST, PLAY_SONG } from './../constants/ActionTypes';
const initalState = {
  isFetching: false,
  items: [],
  futureUrl: '',
  nextUrl: '',
};

function playlist(state = initalState, action: PlaylistActionTypes) {
  switch (action.type) {
    case FETCH_NEW_STREAM_SONGS_SUCCESS:
      return {
        ...state,
        futureUrl: action.futureUrl,
      };
    // case FETCH_SONGS_REQUEST:
    //   return {
    //     ...state,
    //     isFetching: true,
    //   };
    // case LOAD_NEW_STREAM_SONGS: 
    //   return {
    //     ...state,
    //     items: [...action.newStreamSongs, ...state.items],
    //   }
    // case PLAY_SONG: 
    //   if (action.playlist !== HISTORY_PLAYLIST) {
    //     return {
    //       ...state,
    //       items: [
    //         action.id,
    //         ...state.items.filter(id => id !== action.id)
    //       ]
    //     }
    //   }
    default:
      return state;
  }
}
