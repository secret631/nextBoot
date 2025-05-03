'use client'

import React, { useState } from "react";

const RevalidateButton = ()=>{
const [loading, setloading]= useState (false)


const handleRevalidate = async ()=>{
    setloading(true)
    await fetch("api/revalidate_product_byId" ,{
        method:'POST',
        headers:{"content-Type":"application/json"},
        body: JSON.stringify({id:1})
    })
    setloading(false)
}

    return(
        <button onClick={handleRevalidate} disabled={loading}>
            {loading? "Revalidating ...": "Revalidate product Id"}
        </button>
    )
}
export default RevalidateButton