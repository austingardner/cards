import React from "react";
import "./styles.css";

const rows = [
  { title: "cool", num: 1 },
  { title: "cooler", num: 2 },
  { title: "coolerer", num: 3 },
  { title: "coolererer", num: 4 },
  { title: "coolest", num: 5 }
];

export default function App() {
  return (
    <div className="App">
      {rows.map(({ title, num }) => (
        <div className="card">
          <h2 className="title">{title}</h2>
          <div className="num-container">{num}</div>
        </div>
      ))}
    </div>
  );
}
