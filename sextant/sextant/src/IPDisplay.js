import React, { useState, useEffect } from "react";
import axios from "axios";
import "./IPDisplay.css";


const IPDisplay = ({ ipVersion }) => {
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await axios.get(`https://api.ipify.org?format=json&${ipVersion}`);
        setIpAddress(response.data.ip);
      } catch (error) {
        console.log(error);
      }
    };
    fetchIpAddress();
  }, [ipVersion]);

  return (
    <div className="ip-display-container">
      <h2 className="ip-display-header">Your Public IP Address ({ipVersion}):</h2>
      <p className="ip-display-address">{ipAddress}</p>
    </div>
  );
};

export default IPDisplay;