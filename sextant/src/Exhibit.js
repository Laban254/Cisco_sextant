import React from 'react';

function Exhibit({heading, children}) {
  return (
    <div style={{ border: '1px solid black', padding: '20px' }}>
      <h2>{heading}</h2>
      {children}
    </div>
  );
}

export default Exhibit;