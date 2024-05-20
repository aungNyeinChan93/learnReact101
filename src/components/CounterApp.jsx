import React from "react";
import { useEffect, useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => {
        setCounter(counter - 1);
      }, 100);
      //   return () => {
      //     clearInterval(counterInterval);
      //   };
    }
  }, [counter]);

  return (
    <div
      style={{ height: "100vh" }}
      className="CounterApp container-fluid bg-black text-center "
    >
      <h1
        style={{
          lineHeight: "100vh",
          fontSize: "300px",
          fontFamily: "monospace",
        }}
        className="text-danger "
      >
        {counter}
      </h1>
      {/* <button  className="btn btn-danger">CountDown</button> */}
    </div>
  );
};

export default CounterApp;
