import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { INDEX_PATH, PLAYLIST_PATH, SONGS_PATH, SONG_PATH, USER_PATH } from '../constants/RoutePath';
import SongsContainer from '../containers/SongsContainer';
import SongContainer from '../containers/SongContainer';
import UserContainer from '../containers/UserContainer';

export default function RouterContainer() {
  return (
    <Switch>
      <Route exact path={'/'+INDEX_PATH} component={SongsContainer}/>
      <Route exact path={'/'+SONG_PATH} component={SongContainer}/>
      <Route path={'/'+PLAYLIST_PATH} component={SongsContainer}/>
      <Route path={'/'+SONGS_PATH} component={SongsContainer}/>
      <Route exact path={'/'+USER_PATH} component={UserContainer}/>
      <Route component={SongsContainer} />
    </Switch>
  )
}