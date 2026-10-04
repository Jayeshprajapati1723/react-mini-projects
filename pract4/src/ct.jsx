import { useState } from "react";
import { Sum } from "./usememo.jsx";
function Ct() {
  const [ct, setct] = useState(0);
console.log("me vapas a gya hu ct parent ") ;
   return (
    <>
      <div>
        <h1>{ct} </h1>
        <button onClick={() => setct(ct + 1)}>increase it </button>
        <Sum number={1000} />
      </div>
    </>
  );
}
export { Ct };
