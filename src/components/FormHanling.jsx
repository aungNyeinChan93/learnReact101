import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from 'react';



const FormHanling = () => {
    let name = useRef("");
    const password = useRef("");
    const message = useRef("");


    const userInputData = (e) => {
        e.preventDefault();
        console.log(name.current.value);
        console.log(password.current.value);
        console.log(password.current.value);
    };

    const forButtonType = () => {
        // console.log(name.current.value);
        // console.log(password.current.value);
        // console.log(password.current.value);
        const userData = {
            userName: name.current.value,
            userPassword: password.current.value,
            userMessage: message.current.value
        };
        // userData.userName = ""
        console.log(userData);
        name.current.value = "";
        password.current.value = "";
        message.current.value = "";
    };

    function changeRed(e) {
        // console.log("red",);
        // console.log(e.target.style.background = "white");
        // e.target.removeAttribute("class","bg-danger")
        // e.target.setAttribute("class","btn btn-primary py-1 border-0")
        e.target.parentElement.parentElement.parentElement.style.background = "red";
        e.target.className = "btn btn-primary py-1 border-0 ";
        
        //****************  dom manipulation with hook  ***************
        //I was known from that lessons one hook can manipulate overall of the DOM !!! 
        name.current.style.border = "10px solid green";
        password.current.style.border = "10px solid green";
        message.current.style.border = "10px solid green";
        name.current.focus();

    }

    function changeGreen(e) {
        // console.log("green");
        name.current.parentElement.parentElement.style.background = "green";
        name.current.style.border = "10px solid red";
        password.current.style.border = "10px solid red";
        message.current.style.border = "10px solid red";
        e.target.style.color = "white";
        password.current.focus();
    }


    return (
        <div className='Formhandling min-vh-100 bg-body-secondary container-fluid '>
            <h1 className='form-title text-danger text-center bg-info p-2 text-uppercase rounded fs-3 mt-1'>Form handling</h1>
            <form action="" className="form-container container-sm shadow rounded-3 p-3 mt-5 ">
                <div className="form-group container-md mt-3">
                    <label htmlFor="user-name" className='fs-5 ms-2 py-2 fw-lighter fst-italic mb-1' >UserName</label>
                    <input ref={name} type="text" className='form-control form-control-lg  ' id='user-name' placeholder='Enter Your Name' />
                </div>
                <div className="form-group container-md mt-3 ">
                    <label htmlFor="user-password" className='fs-5 ms-2 py-2 fw-lighter fst-italic mb-1 ' > Password</label>
                    <input ref={password} type="password" className='form-control form-control-lg' id='user-password' placeholder='Enter Your Password' />
                </div>
                <div className="form-group container-md mt-3">
                    <p className='text-muted fs-7 fw-lighter  fst-italic ms-2 my-0 py-0' >Comment here </p>
                    <textarea ref={message} name="" id="" placeholder='this is text area ' className='form-control form-control-lg mb-4'></textarea>
                </div>
                <button className='btn btn-info ms-3 px-5 py-1' type='button' onClick={() => forButtonType()}>Type button</button>
                <button className='btn btn-info ms-3 px-5 py-1' type='submit' onClick={(e) => userInputData(e)}>Submit button</button>

                {/* dom manipulation with hook */}
                <br />
                <div className="btn-container text-start ms-3">
                    <div className="btn-group w-25  " style={{ marginTop: "20px" }} >
                        <button onClick={(e) => changeRed(e)} className='btn py-1 bg-danger border-0' type='button' >change red</button>
                        <button onClick={(e) => changeGreen(e)} className='btn py-1 bg-success border-0' type='button' >change green </button>
                    </div>
                </div>

            </form>

        </div>
    )
}

export default FormHanling
