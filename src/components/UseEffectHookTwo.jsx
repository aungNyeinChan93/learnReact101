import React, { useState, useEffect } from "react";

const UseEffectHookTwo = () => {
  const [message, setMessage] = useState(0);
  const [secMessage, setSecMessage] = useState(0);
  const [effectMessage, setEffectmessage] = useState(0);

  useEffect(() => {
    setEffectmessage((effectMessage) => effectMessage + 1);
    console.log();
  }, [message,secMessage]);
  return (
    <div className=" bg-danger-subtle min-vh-100 container-fluid my-2 d-flex justify-content-center align-items-center">
      <div className="text-container container-sm my-3 text-center p-5 bg-info shadow-lg rounded-3 ">
        <h4 className="fs-3 fw-light p-3 text-danger ">UseEffect Tutorial</h4>
        <span className=" fs-4 text-danger text-capitalize fw-lighter">
          {message}
        </span>
        <button
          onClick={() => setMessage((preval) => preval + 1)}
          className="btn btn-danger px- mx-5"
        >
          
          Counter One
        </button>
        <span className=" fs-4 text-danger text-capitalize fw-lighter">
          {secMessage}
        </span>
        <button
          onClick={() => setSecMessage((preval) => preval + 1)}
          className="btn btn-danger px- mx-5"
        >
          
          Counter Two
        </button>
        <div className=" fs-4 text-danger text-capitalize fw-lighter mt-4">
          UseEffect( ) : {effectMessage}
        </div>
      </div>
    </div>
  );
};

export default UseEffectHookTwo;
