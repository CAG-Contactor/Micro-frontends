import React from 'react';
import commonStyles from './style/common.module.css';
import './App.module.css';
import PingPong from "./features/ping-pong/PingPong";

function App() {
  return (
    <div>
      <header>
        <div className={commonStyles.container}>
          <h1>React application served by Spring Boot backend</h1>
        </div>
      </header>

      <PingPong/>

    </div>
  );

}

export default App;
