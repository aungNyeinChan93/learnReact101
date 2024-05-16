import React from 'react'
import { useContext } from 'react'
import WhiteContext from '../context/WhiteContext'


const GrandChildTwo = ({ secData }) => {
  const theme = useContext(WhiteContext);

  return (
    <div className='container '>
      <h4>Grand Child Two || <span className='text-danger'>{secData}</span></h4>
      <h5 className={theme === "white" ? "white rounded" : "black rounded"}>
        {theme}
      </h5>
    </div>
  )
}

export default GrandChildTwo
