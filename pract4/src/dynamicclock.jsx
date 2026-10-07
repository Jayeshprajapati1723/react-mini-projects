import { useState } from "react";
import { Count } from "./dynamiccounter";
export { Clock };
function Clock() {
  const [arr, setarr] = useState(["A", "B", "C"]);
  function setarrs() {
    setarr(["D", ...arr]);
  }
  return (
    <>
      <div>
        <button onClick={setarrs}>increment clock</button>
      </div>
      {arr.map((item) => (
        <Count key={item} arr={item}></Count>
      ))}
    </>
  );
}
