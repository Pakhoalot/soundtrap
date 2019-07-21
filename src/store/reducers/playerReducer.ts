import { Action } from 'redux';
import { Track } from '../../shared/types/soundCloud';

interface State {
  activeTrack: Track | null;
}

const initialState: State = {
  activeTrack: null,
};

export default function songsFilterReducer(
  state = initialState,
  action: Action,
): typeof initialState {
  switch (action.type) {
    
    default:
      return state;
  }
}
