import { useState } from "react";
import Counter from "./counter";

function List() {
  const [li, setli] = useState(["apple", "guavava"]);
  function addfood() {
    setli(["grapes", "orange", ...li]);
  }

  return (
    <>
      <h1>NAME OF FRUITS BY REACT</h1>

      <div>
        <ol>
          {li.map((list) => (
            <li>{list} </li>
          ))}
        </ol>
        <Counter foods={li} stud={"jayesh ji"}  />
      </div>
      <div>
        <button onClick={addfood}> INC FOOD</button>
      </div>
    </>
  );
}
export {List};
