import { useState, useEffect } from "react";
import "./Arrow.css";
function Arrow(props) {
  useEffect(() => {
    if (props.bMI > 90)
      setMarginQ(Math.abs(props.bMI - 90) * (200 / 30) + 404 - 20);
    else if (props.bMI >= 30 && props.bMI <= 90)
      setMarginQ(Math.abs(props.bMI - 30) * (200 / 60) + 202 - 20);
    else setMarginQ(Math.abs(props.bMI) * (200 / 30) - 20);
  });
  const [MarginQ, setMarginQ] = useState(0);

  return (
    <div
      style={{
        marginLeft: MarginQ,
      }}
      className="arrow-down"
    ></div>
  );
}

export default Arrow;
