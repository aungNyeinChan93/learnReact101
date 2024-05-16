import React from 'react';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';


const GrandChildOne = ({secData}) => {
  const mythemeData = useContext(ThemeContext);
  return (
    <div>
      <h4>Grand Child One || {<span className='text-danger'>{secData}</span>}</h4>
      <h5>
        <b className='text-dark'>{mythemeData}</b>
      </h5>
   
    </div>
  )
}

export default GrandChildOne
