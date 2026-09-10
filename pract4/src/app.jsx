import { useState } from "react";

function App() {

  
  // itna sb krne ki jarurat nhi h bs ye kro ki hook states use kro
  // jeese useState ye do chiz return krta h ek array me
let  [ct, updatect] = useState(1);
  // USE STATE ME JO PASS KRENGE VO COUNT ME A JAYEGA OR WHI SE INTIT hoga
  // or ek function pass krdo jisse hm update kr ske
  function incct() {
    updatect(ct+1);
  }
  function inccttt() {
    ct++;
    // ele selct kro usme innertext update
    if (ct <= 100) {
      let ctele = document.querySelector("h1");
      ctele.innerText = `counter : ${ct}`;
    } else {
      ctele.innerText = `bas kar bhai `;
    }
  }

  return (
    <>
      <h1>counter:{ct}</h1>
      <button onClick={incct}>increase</button>
    </>
  );

}
export default App ;