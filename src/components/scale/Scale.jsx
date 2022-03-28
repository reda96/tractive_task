import "./Scale.css";
import { useEffect, useState } from "react";
function Scale(props) {
  const [position, setposition] = useState("underweight");
  useEffect(() => {
    if (props.bMI >= 30 && props.bMI <= 90) setposition("normal");
    else if (props.bMI >= 90) setposition("overweight");
  });
  return (
    <div className="scaleContainer">
      <div>
        <div
          className={
            position === "underweight" ? "scaleLeft light" : "scaleLeft"
          }
        ></div>
        <div className="text">Underweight</div>
      </div>

      <div className="break"></div>
      <div>
        <div
          className={
            position === "normal" ? "scaleMiddle light" : "scaleMiddle"
          }
        ></div>
        <div className="text">Normal</div>
      </div>
      <div className="break"></div>
      <div>
        <div
          className={
            position === "overweight" ? "scaleRight light" : "scaleRight"
          }
        ></div>
        <div className="text">Overweight</div>
      </div>
    </div>
  );
}

export default Scale;
