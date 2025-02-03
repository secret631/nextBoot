

import React from "react";

const SSRPage = async() => {

    const res = await fetch("https://dummyjson.com/products" , {
        cache : 'no-store'
    })
    const data = await res.json()

    return (
         <div>
        <h1 className='flex justify-center bg-red-200'>  SSR page  </h1>
      
      <ul className="m-12">
         {data.products.map((product:any)=>(
             <li key={product.id}>
                 {product.id} : {product.title}
             </li>
         ))}
      </ul>
    </div>
    )
}
export default SSRPage