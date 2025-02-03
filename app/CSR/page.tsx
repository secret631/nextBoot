
'use client'

import React , { useEffect, useState } from "react";

const CSRPage = () => {
    const [products , setProducts] = useState<any[]>([])

    const FetchData = async () =>{
        const res = await fetch("https://dummyjson.com/products")
        const data = await res.json()
        setProducts(data.products)
    }
    
    useEffect(()=>{
     FetchData()
    },[])

  return (
    <div>
        <h1 className='flex justify-center bg-red-200'>  CSR page  </h1>
      
         <ul>
            {products.map((product)=>(
                <li key={product.id}>
                    {product.id} : {product.title}
                </li>
            ))}
         </ul>

    </div>
  )
}

export default CSRPage