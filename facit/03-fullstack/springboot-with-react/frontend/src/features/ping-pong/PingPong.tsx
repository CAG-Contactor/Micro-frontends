import React, {useState} from 'react';
import commonStyles from '../../style/common.module.css';
import styles from './PingPong.module.css';
import {render, unmountComponentAtNode} from "react-dom";

const PingPong: React.FC = () => {
  async function doPing() {
    const response = await fetch('http://localhost:8100/api/v1/ping')
    const text = await response.text();
    console.log("text:", text);
    setPingResult(text)
  }

  const [pingResult, setPingResult] = useState<string | undefined>()

  return (
    <section>
      <div className={commonStyles.container}>
        <button className={`${commonStyles.btn} ${commonStyles.btnPrimary}`} onClick={doPing}>Send ping to /api/v1/ping</button>
        {pingResult &&
        <div className={`${styles.card} ${styles.centeredCard}`}>
          <p>Got response: <span className={styles.highlight}><strong>{pingResult}</strong></span></p>
        </div>
        }
      </div>
    </section>
  );

}

export default PingPong;

// Custom Element
export class PingPongElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    render(<PingPong />, this);
  }

  disconnectedCallback() {
    unmountComponentAtNode(this);
  }
}

