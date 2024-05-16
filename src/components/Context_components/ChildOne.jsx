import React from 'react';
import GrandChildOne from "./GrandChildOne";
import "bootstrap/dist/css/bootstrap.css";


const ChildOne = ({data}) => {
    return (
        <div className='ChildOne py-2 my-2'>
            <h3>Child One</h3>
            <span className='text-white'><GrandChildOne secData={data}/></span>
        </div>
    )
}

export default ChildOne
