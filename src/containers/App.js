import React, { Component } from 'react';
import TopMenuBarContainer from './TopMenuBarContainer'
import RightModalContainer from './RightPanelContainer'
import LeftModalContainer from './LeftPanelContainer'
import MapContainer from './MapContainer'
import AboutModalContainer from './AboutModalContainer'
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenuBarContainer />
        <MapContainer />
        <RightModalContainer />
        <LeftModalContainer />
        <AboutModalContainer />
      </div>
    );
  }
}

export default App;
