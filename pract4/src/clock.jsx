import { useEffect, useState } from "react";
// clock using useffect

function Clock() {
  const [show, setShow] = useState("show");

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  function setShows() {
    // if (show == "show") {
    //   console.log(show) ;
    //   setShow("hide");
    // } else {
    //   setShow("show");
    // console.log(show) ;
    // }
  const  set = show=="show"?"hide":"show";
    setShow(set) ;
  }

  useEffect(() => {
if(show=="hide") {
  return ;
}

    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    console.log("hi") ;
    }, 1000);
    // component ht jaye to clearinteval kr do
    return () => clearInterval(interval);
  }, [show]);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "onwrap",
        }}
      >
        <div
          style={{
            color: "blue",
          }}
        >
          <h1>CHECK TIME NOW TO CLICK</h1>
        </div>

        <div
          style={{
            color: "red",
          }}
        >
          {show == "show" && <h1>Current Time : {time}</h1>}
        </div>

        <div
          style={{
            alignSelf: "center",
          }}
        >
          <button
            onClick={setShows}
            style={{
                fontSize:40,
              backgroundColor: "black",
              color: "white",
              border: 20,
              borderRadius: 50,
              height: 50,
              width: 200,
              borderColor: "orange",
              color:"aqua"
            }}
          >
              {show == "show" ? "hide" : "show"}
          </button>
        </div>
      </div>
    </>
  );
}
export default Clock;
