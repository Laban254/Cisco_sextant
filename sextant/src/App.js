import React from 'react';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IPDisplay from './IPDisplay';



function App() {
  return (
    <div>
      <Banner title="Sextant" />
      <Exhibit heading="Exhibit">
        <IPDisplay ipVersion="ipv4" />
        <IPDisplay ipVersion="ipv6" />
      </Exhibit>
    </div>
  );
}

export default App;
