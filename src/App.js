import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <Weather />
      <footer>
        Coded by Carol-Ann Donaldson{" "}
        <a href="https://github.com/cdonal91/weather-react-app">Github</a>
      </footer>
    </div>
  );
}

export default App;
