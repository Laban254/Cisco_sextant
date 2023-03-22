import React from 'react';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IPDisplay from './IPDisplay';
import PacketLatency from './PacketLatency';



function App() {
  return (
    <div>
      <Banner title="Sextant" />
      <Exhibit heading="Exhibit">
        <IPDisplay ipVersion="ipv4" />
        <IPDisplay ipVersion="ipv6" />
        <PacketLatency />
      </Exhibit>
    </div>
  );
}

export default App;
