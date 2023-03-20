import React from 'react';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (
    <div>
      <Banner title="Sextant" />
      <Exhibit heading="Data Points">
        <p>Data point 1</p>
        <p>Data point 2</p>
        <p>Data point 3</p>
      </Exhibit>
    </div>
  );
}

export default App;
