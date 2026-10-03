import { useState } from "react";
import { List } from "./list";
export default Counter;
// foods - props h
function Counter({foods,stud}) {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>THIS IS COUNTER WEEBSITE</h1>
        <div>counter : {count}</div>
        <button onClick={() => setCount(count + 1)}> INCREMENT</button>
        <button onClick={() => setCount(count - 1)}>DECREMENT</button>
      </div>

      <div>
        <ol>
          { foods.map((items) => (
<li key={items}>{items} </li>
           )
)}
        </ol>
        <li>{stud} </li>
      </div>
    </>
  );
}
