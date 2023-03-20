import React from 'react';

function Banner({title}) {
  return (
    <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
      <h1>{title}</h1>
    </div>
  );
}

export default Banner;