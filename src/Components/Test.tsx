"use client"
import React from "react"
import { useRouter } from "next/navigation"

const Test=()=>{
    const Router =useRouter()
    return(
        <button onClick={()=> Router.back()}>Back</button>
    )
}
export default Test