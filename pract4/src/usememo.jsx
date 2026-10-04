// use memo ka hook ye krta h ki parent k reredner hone pr child faltu me recreate nhi hote kbhi bhi to ise hi kehte h usemem

import { useMemo } from "react";
import React from "react";
const Sum = React.memo(({number}) => {
    let sum = 0;
    console.log("me vapas a gya hu child hu  ") ;

  function Calsum() {
    
    for (let i = 0; i <= number; i++) {
      sum = sum + i;
    }

 return sum ;

}
const sums = Calsum() ;
return (
    <>
    <h1>the sum is {sums}</h1>
    </>
)
});
export {Sum} ;