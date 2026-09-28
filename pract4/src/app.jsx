import { useEffect, useState } from "react";


function APP() {

}


function Apps() {
  // itna sb krne ki jarurat nhi h bs ye kro ki hook states use kro
  // jeese useState ye do chiz return krta h ek array me
  let [ctt, updatect] = useState(1);
  // USE STATE ME JO PASS KRENGE VO COUNT ME A JAYEGA OR WHI SE INTIT hoga
  // or ek function pass krdo jisse hm update kr ske
  function incct() {
    updatect(ctt + 1);
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
      {/* <button onClick={incct}>increase</button> */}
    </>
  );
}
export default Apps;

function Gitshow() {
  // abhi array khali h isliye intiaize kliye empty array bheja h
  const [users, setUser] = useState([]);
  // input ki small letter ko CAPS ME KRO
  const [name, setcaps] = useState("");
// kitni profile dikhani h 
const [ct,setct] = useState(30) ;

  useEffect(() => {
    async function Datalao() {
      // console.log(data);
      let response = await fetch(`https://api.github.com/users?per_page=${ct}`) ;
      let data = await response.json();
      console.log(data);
      setUser(data);
    }
    Datalao();
  }, [ct]);
  // hmne yha ct ko dependenies bana h 
  function handleinput(e) {
    setcaps(e.target.value.toUpperCase());
// if(e.target.value ===Number) { 
    setct(e.target.value) ;
    // }
  }

  return (
    <>
      <div>
        <label>enter number to see profiles of github ::
        <input type="number" id="name" onChange={handleinput} value={name} style={{marginLeft:20}}>
        </input>
        </label>
      </div>
      <div>
        <h1>github user using useffect</h1>
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: "k",
          flexDirection: "row",
          flexWrap: "wrap",
          color: "green",
        }}
      >
        {users.map((user) => (
          <div
            style={{
              marginRight: 5,
              marginBottom: 10,
              marginLeft: 10,
              marginTop: 10,
              backgroundColor: "white",
              borderRadius: 50,
            }}
          >
            <img
              src={user.avatar_url}
              height={100}
              width={100}
              style={{ borderRadius: 50 }}
            ></img>
          </div>
        ))}
      </div>
    </>
  );
}

export { Gitshow };
