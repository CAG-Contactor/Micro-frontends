import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {PageElement} from "./mfe-components/Page";
import {WidgetElement} from "./mfe-components/Widget";

if (process.env.NODE_ENV === 'production') {
  // I prod registrerar vi Custom Element-klasserna i browsern
  customElements.define('react-mfe-page', PageElement);
  customElements.define('react-mfe-widget', WidgetElement);
} else {
  // I utveckling renderar vi som vanligt
  ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}
