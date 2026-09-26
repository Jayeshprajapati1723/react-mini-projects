import { useEffect, useState } from "react";

function App() {
  // itna sb krne ki jarurat nhi h bs ye kro ki hook states use kro
  // jeese useState ye do chiz return krta h ek array me
  let [ct, updatect] = useState(1);
  // USE STATE ME JO PASS KRENGE VO COUNT ME A JAYEGA OR WHI SE INTIT hoga
  // or ek function pass krdo jisse hm update kr ske
  function incct() {
    updatect(ct + 1);
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
      {/* <h1>counter:{ct}</h1> */}
      <button onClick={incct}>increase</button>
    </>
  );
}
export default App;

function Gitshow() {
  // abhi array khali h isliye intiaize kliye empty array bheja h
  const [users, setUser] = useState([]);

  useEffect(() => {
    async function Datalao() {
      // console.log(data);
      let response = await fetch("https://api.github.com/users");
      let data = await response.json();
      console.log(data);
      setUser(data);
    }
    Datalao();
  }, []);

  return (
    <>
    <h1>github user using useffect</h1>
      {users.map((user) => (
        <>
          <img src={user.avatar_url} height={100} width={100} margin={5}></img>
        </>
      ))}
    </>
  );
}

export { Gitshow };
