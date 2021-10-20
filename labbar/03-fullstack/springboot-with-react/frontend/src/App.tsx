import React, {useState} from 'react';
import './App.css';
import PingPong from "./features/ping-pong/PingPong";

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <h1>React application served by Spring Boot backend</h1>
        </div>
      </header>

      <PingPong/>

    </div>
  );

}

export default App;
