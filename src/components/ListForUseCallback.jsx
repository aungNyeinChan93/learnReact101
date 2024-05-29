import React, { memo } from 'react'

const ListForUseCallback = ({items,addNewItems,deleteItem}) => {
    console.log(`list page render`);
  return (
    <div className='ListForUseCallback'>
      <ul className=' list-group list-group-flush'>
        {items.map((item,index)=>{
            return <li className='d-flex justify-content-between px-5  list-group-item' key={index}>
                {item}
                <button className='btn btn-close' onClick={()=>deleteItem(index)}></button>
                </li>
        })}
      </ul>
      <button type='button' onClick={()=>addNewItems()} className='btn btn-warning my-3'>Add newItems</button>
    </div>
  )
}

export default memo(ListForUseCallback)
