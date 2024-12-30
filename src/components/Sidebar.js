import React from "react";
import "./Sidebar.css"; // Add styles if needed

function Sidebar({ setActiveChart }) {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <button onClick={() => setActiveChart("voltage")}>Voltage</button>
        </li>
        <li>
          <button onClick={() => setActiveChart("current")}>Current</button>
        </li>
        <li>
          <button onClick={() => setActiveChart("energy")}>Energy</button>
        </li>
        <li>
          <button onClick={() => setActiveChart("power")}>Power</button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
