import React from 'react';
import RootContainer from './containers/RootContainer';
import { BrowserRouter as Router } from 'react-router-dom';


export default function App() {
  return (
  <Router>
    <RootContainer />
  </Router>
  )
}