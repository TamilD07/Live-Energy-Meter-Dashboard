import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

const initialData = Array.from({ length: 10 }, (_, index) => ({
  name: `T-${10 - index}`,
  value: Math.random() * 100,
}));

function Dashboard({ activeChart }) {
  const [voltageData, setVoltageData] = useState(initialData);
  const [currentData, setCurrentData] = useState(initialData);
  const [energyData, setEnergyData] = useState(initialData);
  const [powerData, setPowerData] = useState(initialData);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newData = { name: `T-0`, value: Math.random() * 100 };
      setVoltageData((prevData) => [...prevData.slice(1), newData]);
      setCurrentData((prevData) => [...prevData.slice(1), newData]);
      setEnergyData((prevData) => [...prevData.slice(1), newData]);
      setPowerData((prevData) => [...prevData.slice(1), newData]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const renderChart = (data, title, color) => (
    <div className="chart" id={title.toLowerCase()}>
      <h2>{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  return (
    <div className="dashboard">
      {activeChart === "voltage" && renderChart(voltageData, "Voltage (V)", "blue")}
      {activeChart === "current" && renderChart(currentData, "Current (A)", "green")}
      {activeChart === "energy" && renderChart(energyData, "Energy (kWh)", "red")}
      {activeChart === "power" && renderChart(powerData, "Power (W)", "purple")}
    </div>
  );
}

export default Dashboard;