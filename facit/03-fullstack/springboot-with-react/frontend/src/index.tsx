import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {PingPongElement} from "./features/ping-pong/PingPong";

if (process.env.NODE_ENV === 'production') {
    // I prod registrerar vi Custom Element-klasserna i browsern
    customElements.define('sprbo-ping-pong', PingPongElement);
} else {
    // I utveckling renderar vi som vanligt
    ReactDOM.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
