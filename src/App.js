import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import "./App.css"; // For styling
import Header from "./components/Header";

function App() {
  const [activeChart, setActiveChart] = useState("voltage"); // Default chart

  return (
    <div className="app">
      <Header/>
      <Sidebar setActiveChart={setActiveChart} />
      <Dashboard activeChart={activeChart} />
    </div>
  );
}

export default App;
