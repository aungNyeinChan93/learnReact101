import React from 'react'

const State = ({titleName,detail}) => {
  return (
    <div>
      <h1 className="title text-center p-2 text-dnager my-3 rounded-pill"> This is {titleName}</h1>
      <p className='text-start bg-body-secondary '>{detail}</p>

    </div>
  )
}

export default State;
