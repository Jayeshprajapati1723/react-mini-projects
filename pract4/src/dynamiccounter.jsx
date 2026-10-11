import { useState } from "react";
export { Count };
import { Clock } from "./dynamicclock";
function Count({ arr = [] }) {
  const [ct, setct] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection:"column",
        flexWrap:"nowrap",
        backgroundColor: "aqua",
        color: "red",
      }}
    >
      <div>
        <h1>our first counter app : {arr}</h1>
        <h1>COUNTER : {ct}</h1>
        <button
          onClick={() => {
            setct(ct + 1);
          }}
        >
          {" "}
          increment
        </button>
      </div>
    </div>
  );
}
