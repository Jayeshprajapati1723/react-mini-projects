import { useState } from "react";

export default Counter ;
function Counter() {
const [count , setCount] = useState(0) ;


    return(


<>
<div>
    <h1>THIS IS COUNTER WEEBSITE</h1>
<div>
    counter : {count}
</div>
    <button onClick={()=>setCount(count+1)} >  INCREMENT</button>
    <button onClick={()=> setCount(count-1)}  >DECREMENT</button>
</div>
</>

 )



}