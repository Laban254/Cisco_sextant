import React from 'react';
import './Exhibit.css';

function Exhibit(props) {
  return (
    <div className="exhibit">
      <h2>{props.heading}</h2>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default Exhibit;