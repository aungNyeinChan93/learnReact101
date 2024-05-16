import React from 'react';
import GrandChildTwo from "./GrandChildTwo";
import "bootstrap/dist/css/bootstrap.css";

const ChildTwo = ({data}) => {
    return (
        <div className='ChildTwo py-2 my-2'>
            <h3>Child Two</h3>
            <span className=''><GrandChildTwo secData={data}/></span>

        </div>
    )
}

export default ChildTwo;
   