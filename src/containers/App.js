import React, { Component } from 'react';
import TopMenuBar from '../components/TopMenuBar'
import Map from '../components/Map'
import Footer from '../components/Footer'
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenuBar />
        <Map />
        <Footer />
      </div>
    );
  }
}

export default App;
