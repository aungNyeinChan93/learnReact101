import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../components/UseStaeFormHandling.css";
import { useState } from 'react';



const UseStateFormHandling = () => {
    let [name,setName] = useState("");
    let [password , setPassword] = useState("");
    let [message ,setMessage] =useState("");
    let [language , setlanguage] =useState("")
    let [checkBox,setCheckBox] = useState(false)

    function changePassword(e){
        setPassword(e.target.value)
       
        // console.log(password);
    };
    // console.log(language);
    // console.log(checkBox);

    function clickButton(){
        const mydata ={
            userName : name,
            userPassword : password,
            userMessage : message,
            userLanguage : language,
            userCheckBox :checkBox
        }
        console.log(mydata);
        
        // mydata.userName = setName(name = "")
    };

    const programmingLanguage = ["Select language","Python","JS","PHP","Java","Node","React","Vue","Angula","SQL"];
    return (
        <div className='UseStateFormHandling container-fluid bg-body-tertiary  min-vh-100 text-uppercase'>
            <h1 className='bg-primary fs-3 p-2 rounded my-3 text-center text-white '>UseState from handling</h1>
            <form action="" className="form-container container-sm shadow rounded-3 p-3 mt-5 ">
                <div className="form-group container-md mt-3">
                    <label htmlFor="user-name1" className='fs-5 ms-2 py-2 fw-lighter fst-italic mb-1' >UserName</label>
                    <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='form-control form-control-lg  ' id='user-name1' placeholder='Enter Your Name' />
                </div>
                <div className="form-group container-md mt-3 ">
                    <label htmlFor="user-password1" className='fs-5 ms-2 py-2 fw-lighter fst-italic mb-1 ' > Password</label>
                    <input onChange={(e)=>changePassword(e)} value={password} type="password" className='form-control form-control-lg' id='user-password1' placeholder='Enter Your Password' />
                </div>
                <div className="form-group container-md mt-3">
                    <p className='text-muted fs-7 fw-lighter  fst-italic ms-2 my-0 py-0' >Comment here </p>
                    <textarea onChange={(e)=>setMessage(e.target.value)} value={message} name="" id="textarea" placeholder='this is text area ' className='form-control form-control-lg mb-4'></textarea>
                </div>
                <div className="form-grop select-container ">
                    <select className="userOption " onChange={(e)=>setlanguage(e.target.value)} value={language}>
                        {programmingLanguage.map((item,index)=>{
                            return (
                                <option className='bg-dark text-white' key={index} value={item}>{item}</option>
                            )
                        })}    
                    </select>
                </div>
                <div className="form-group">
                    <input onChange={(e)=>setCheckBox(!checkBox)} value={checkBox} type="checkbox" id="checkBopx1" className="checkbox" /> <p className='checkBox-p'>I accept term and condition!</p>
                </div>
                <button onClick={()=>clickButton()} className='btn btn-info ms-3 px-5 py-1' type='button' >Type-btn button</button>
                {/* <button className='btn btn-info ms-3 px-5 py-1' type='submit' >Submit button</button> */}
            </form>
        </div>
    )
}

export default UseStateFormHandling
