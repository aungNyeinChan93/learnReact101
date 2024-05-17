import React from 'react';
import GeneralData from '../context/GeneralData';
import TestContext from "../context/TestContext.jsx"
import { useContext } from 'react';



const GrandChildThree = ({secData}) => {
    const test= useContext(TestContext); 
    const{name,key,testBoolean,obj } = test;
    const generalData = useContext(GeneralData);
    return (
        <div>
            <h4>Grand Child Three || <span className='text-danger'>{secData}</span></h4>
            <h5 className=' text-warning'>{generalData}</h5>
            <span className=' fst-italic  ms-4'>{key}</span>
            <span className=' fst-italic ms-4'>{name}</span>
            <span className=' fst-italic ms-4'>{testBoolean?"this is true ": "this is false"}</span>
            <span className=' fst-italic ms-4'>{obj.name}</span>
            <span className=' fst-italic ms-4'>{obj.age}</span>

            
        </div>  
    )
}

export default GrandChildThree
