import React from 'react';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (
    <div>
      <Banner title="My Site" />
      <Exhibit heading="Exhibit">
        <p>Cisco virtual Internship.</p>
      </Exhibit>
    </div>
  );
}

export default App;