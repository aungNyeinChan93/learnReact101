import React, { useCallback, useState ,useMemo} from 'react'
import ListForUseCallback from './ListForUseCallback'


const UseCallback = () => {
    const[items,setItems] = useState([
        "Do home work",
        "Learn React",
        "learn Node-js",
        "learn AWS"
    ]);
    const [count,setCount] =useState(0)


const addNewItems =useCallback(()=>{
    console.log("render from useCallback page/items add");
    setItems([...items,"Add new Item"])
},[items]) ;

const testForUsememo =()=>{
    console.log(`test for useMemo`);
};

useMemo(()=>{
    testForUsememo()
},[count])

const deleteItem=useCallback( (id)=>{
    setItems(items.filter((item,index)=>{
        return index !== id
    }))
},[items])

    return (
        <div className='UseCallback container-fluid min-vh-100 bg-body-tertiary '>
            <h2 className=' bg-danger-subtle p-2 rounded my-1 text-center text-success'>useCallback Hook</h2>
            <ListForUseCallback items={items} addNewItems={addNewItems} deleteItem={deleteItem}/>   
            <div className="count text-center bg-body p-2 shadow rounded">
                <h2 >{count}</h2>
                <div className="btn-group">
                    <button className='btn btn-danger' onClick={()=>setCount((preval)=>preval +1)}>Increase</button>
                    <button className='btn btn-warning' onClick={()=>setCount((preval)=>preval -1)}>Decrease</button>
                </div>
            </div>
        </div>
  )
}

export default UseCallback