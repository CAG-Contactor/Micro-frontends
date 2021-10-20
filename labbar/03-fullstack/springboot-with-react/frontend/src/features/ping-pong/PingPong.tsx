import React, {useState} from 'react';
import './PingPong.css';

const PingPong: React.FC = () => {
  async function doPing() {
    const response = await fetch('/api/v1/ping')
    const text = await response.text();
    console.log("text:", text);
    setPingResult(text)
  }

  const [pingResult, setPingResult] = useState<string | undefined>()

  return (
    <section>
      <div className="container">
        <button className="btn btn-primary" onClick={doPing}>Send ping to /api/v1/ping</button>
        {pingResult &&
        <div className="card centered-card">
          <p>Got response: <span className="highlight"><strong>{pingResult}</strong></span></p>
        </div>
        }
      </div>
    </section>
  );

}

export default PingPong;
