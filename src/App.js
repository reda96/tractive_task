import { useState } from "react";
import "./App.css";
import Scale from "./components/scale/Scale";
import Arrow from "./components/arrow/Arrow";
function App() {
  const [bmi, setbmi] = useState(30);
  const [owner, setowner] = useState("Mr. Nash");
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div style={{ color: "black" }}> {owner}'s is</div>
          <div className="bmi">{bmi}</div>
        </div>
        <div>
          <Arrow bMI={bmi} />
          <Scale bMI={bmi} />
        </div>
      </header>
    </div>
  );
}

export default App;
