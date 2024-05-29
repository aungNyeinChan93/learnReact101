import React, { memo } from 'react'

const ListForUseCallback = ({items,addNewItems}) => {
    console.log(`list page render`);
  return (
    <div className='ListForUseCallback'>
      <ul className=' list-group list-group-flush'>
        {items.map((item,index)=>{
            return <li className='  list-group-item' key={index}>{item}</li>
        })}
      </ul>
      <button type='button' onClick={()=>addNewItems()} className='btn btn-warning my-3'>Add newItems</button>
    </div>
  )
}

export default memo(ListForUseCallback)
