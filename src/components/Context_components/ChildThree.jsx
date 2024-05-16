import React from 'react';
import GrandChildThree from "./GrandChildThree";
import "bootstrap/dist/css/bootstrap.css";


const ChildThree = ({data}) => {
    return (
        <div className='ChildThree py-2 my-2'>
            <h3>Child Three</h3>
            <span className='text-white'><GrandChildThree secData={data}/></span>
        </div>
    )
}

export default ChildThree
