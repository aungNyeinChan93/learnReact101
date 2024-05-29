import React, {  useMemo, useState } from "react";

const UseMemo = () => {
    const [color,setColor] =useState("red");
    const [count,setCount] = useState(0);
    
    function delayCall(num){
        // console.log(`delay call is running`);
        for(let i=0;i<100000000;i++){
            num++
        };
        return num;
    };
    
    // useMemo(calculateValue, dependencies)
    useMemo(()=>{
        delayCall(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[color,count]);

    return (
        <div className="UseMemo min-vh-100 container-fluid bg-dark-subtle">
        <h3 className="text-center useMemo-title text-danger bg-info-subtle p-2 my-2 rounded">
            UseMemo Hook
        </h3>
        <div className="colorChange text-center">
            <div style={{color:color}} className="fs-2 p-2"> Hello world</div>
            <button onClick={()=>color === "red" ? setColor("green"):setColor("red")} className="btn btn-primary">Change Color</button>
        </div>
        <div className="counter-app text-center p-3 bg-body-tertiary my-2 rounded ">
            <h1>{count}</h1>
            <button onClick={()=>setCount((preCount)=>preCount -1)} type="button" className="btn btn-danger px-4 mx-2" >-</button>
            <button onClick={()=>setCount((preCount)=>preCount +1)} type="button" className="btn btn-success px-4 mx-2" >+</button>
        </div>
        <div className="imageRow row p-3">
            <div className="col-12 col-md-6 text-center">
                <img style={{width:"600", height:"350px"}} src="https://miro.medium.com/v2/resize:fit:790/1*2wDZ1mo7_MHr2Qr2iZCNHg.png" alt="" className=" img-fluid p-3 rounded-5"/>
            </div>
            <div className="col-12 col-md-6 text-center">
                <img style={{width:"600px", height:"350px"}} src="https://innovationm.co/wp-content/uploads/2020/10/screencapture-docs-google-document-d-1tD2909taBxX8pS2fa5nyIvKCfn20UblPXq0vASUC1ig-edit-2020-10-30-13_49_09.png" alt="" className=" img-fluid p-3 rounded-5"/>
            </div>
        </div>

        </div>
  );
};

export default UseMemo;
