import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../components/UseStateHook.css";
import { useState } from 'react';

const UseStateHook = () => {
    
    // useState hook
    let [result,setResult]  = useState(0);
    let [myBoolean, setmyBoolean] = useState(true)
    // console.log(setResult);
    // console.log(result);

    return (
        <div className='useStateHook vh-100 bg-body-tertiary containe-fluid '>
            <h1 className="useStateHook-title text-center text-danger  bg-danger-subtle my-2 py-2 rounded-3"> UseState </h1>
            <div className="cal-container container ">
                <button className='btn btn-danger' onClick={()=>setResult(result--)} >decrease</button>
                <span className=' result '>{result}</span>
                <button className='btn btn-primary' onClick={()=>setResult(result++)}>increase</button>
            </div>
            <div className="boolen-container">
                <button className=' btn btn-danger' onClick={()=>setmyBoolean(!myBoolean)}>CHANGE</button>
                <h4>{myBoolean ? "this is true ": "this is false"}</h4>
            </div>
        </div>
    )
}

export default UseStateHook;
