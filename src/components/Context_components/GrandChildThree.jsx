import React from 'react';
import GeneralData from '../context/GeneralData';
import { useContext } from 'react';


const GrandChildThree = ({secData}) => {
    const generalData = useContext(GeneralData);
    return (
        <div>
            <h4>Grand Child Three || <span className='text-danger'>{secData}</span></h4>
            <h5 className=' text-warning'>{generalData}</h5>
        </div>
    )
}

export default GrandChildThree
