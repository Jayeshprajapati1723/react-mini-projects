import { useRef, useState } from "react";
export { Stopwatch };
function Stopwatch() {
  const [time, settime] = useState(0);
  const starttimeinterval = useRef(null);

  function start() {
    starttimeinterval.current = setInterval(() => {
      settime((time) => time + 1);
    }, 1000);
  }

  function handlestop() {
    clearInterval(starttimeinterval.current);
  }
  function handlereset() {
    clearInterval(starttimeinterval.current);
    starttimeinterval.current = null;
    settime(0);
  }

  return (
    <>
      <div
        style={{
          margin: "0 auto",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          padding: "10px 10px 10px 10px",
          height: 350,
          width: 500,
          borderRadius: 125,
          backgroundColor: " #18122b",
          border: "9px solid white",
          alignContent: "center",
        }}
      >
        <div
          style={{
            height: 300,
            width: 300,
            borderRadius: 150,
            borderColor: "red",
            border: "solid",
            alignContent: "center",
            backgroundColor: " #111827",
            color: "white",
          }}
        >
          <h1
            style={{
              textAlign: "center",
            }}
          >
            {" "}
            Timer : {time}
          </h1>
        </div>
        <div
          style={{
            // marginLeft:70 ,
            marginTop: "10px",
          }}
        >
          <button
            style={{
              backgroundColor: "black",
              color: "red",
              border: "2 solid aqua",
              borderColor: "aqua",
              height: 20,
              width: 50,
              borderRadius: 15,
              marginRight: 5,
            }}
            onClick={handlestop}
          >
            Stop
          </button>
          <button
            onClick={start}
            style={{
              backgroundColor: "yellow",
              color: "green",
              border: "2 solid aqua",
              borderColor: "aqua",
              height: 30,
              width: 55,
              borderRadius: 15,
              marginRight: 5,
            }}
          >
            Start
          </button>

          <button
            style={{
              backgroundColor: "green",
              color: "white",
              border: "2 solid aqua",
              borderColor: "aqua",
              height: 20,
              width: 50,
              borderRadius: 15,
              marginRight: 5,
            }}
            onClick={handlereset}
          >
            {" "}
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
