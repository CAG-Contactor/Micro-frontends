import React from 'react';
import logo from './logo.svg';
import './App.css';
import Widget from "./mfe-components/Widget";
import Page from "./mfe-components/Page";

function App() {
  return (
    <div className="App">
      <Widget/>
      <hr/>
      <Page/>
    </div>
  );
}

export default App;
