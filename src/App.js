import React from 'react';

import NameComponent from './components/name/Name';
import InfoComponent from './components/info/Info';
import ClickComponent from './components/click/Click';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <InfoComponent />
        <NameComponent 
          name="Test"
          Career="Web Dev"
        />
        <ClickComponent />
      </header>
    </div>
  );
}

export default App;
