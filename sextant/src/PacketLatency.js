import React, { useState, useEffect } from 'react';
import './PacketLatency.css';

function PacketLatency() {
  const [latency, setLatency] = useState(0);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:55455');

    ws.onmessage = (event) => {
      const packetTimestamp = parseInt(event.data);
      const currentTimestamp = Date.now();
      const packetLatency = currentTimestamp - packetTimestamp;
      setLatency(packetLatency);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="packet-latency-container">
      <h2 className="packet-latency-heading">Packet Latency:</h2>
      <p className="packet-latency-value">{latency} ms</p>
    </div>
  );
}

export default PacketLatency;
