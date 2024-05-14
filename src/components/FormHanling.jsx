import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from 'react';



const FormHanling = () => {
    const name = useRef("");
    const password = useRef("");
    const message = useRef("");


    const userInputData = (e) => {
        e.preventDefault();
        console.log(name.current.value);
        console.log(password.current.value);
        console.log(password.current.value);
    };

    const forButtonType = () => {
        console.log(name.current.value);
        console.log(password.current.value);
        console.log(password.current.value);
    };

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
            </form>
        </div>
    )
}

export default FormHanling
