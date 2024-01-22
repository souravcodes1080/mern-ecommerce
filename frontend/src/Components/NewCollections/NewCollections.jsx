import React, { useEffect, useState } from 'react'
import "./newCollections.css"
import Item from "../Item/Item"
function NewCollections() {
  const [new_collections, setNew_collections] = useState([])

  useEffect(()=>{
    fetch("http://localhost:5000/newcollections")
    .then((res)=>res.json())
    .then((data)=>setNew_collections(data))
  }, [])


  return (
    <>
    <div className="new-collections">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {
                new_collections.map((item, i)=>(
                    <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                ))
            }
        </div>
    </div>
    </>
  )
}

export default NewCollections