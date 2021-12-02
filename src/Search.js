import React, { useState } from "react";
import Sresult from "./Sresult";


const Search = () => {
    const [img , setImg] =useState();
    let Change =(event)=>{
            setImg(event.target.value)
    }
    return (
        <>
            <div style={{textAlign:'center'}}>
                 <input type="text" placeholder="Search AnyThing" value={img} onChange={Change} />
                 
            </div>
            <div style={{textAlign:'center'}} className='mt-2'>
            {img === "" ? null :(<Sresult img={img}/>)} 
            </div>
             
        </>
    )
}

export default Search
