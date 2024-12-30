import React, { useEffect, useState } from 'react';
import './Header.css';

function Header() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <h1>Live Energy Meter Dashboard</h1>
      <p>{currentDateTime}</p>
    </header>
  );
}

export default Header;