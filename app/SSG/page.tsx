import React from "react";
import Link from "next/link";
import { Metadata } from "next";

//Metadata
export const metadata : Metadata={
  title: 'SSg Page',
  description: "SSG description"
}


const SSGpage = async () => {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "force-cache",
  });
  const data = await res.json();

  return (
    <div>

      <h1 className="flex justify-center bg-red-200"> SSG page </h1>
      <ul>
        {data.products.map((product: any) => (
          <li key={product.id}>

            {/* Link */}
            <Link href={`/SSG/${product.id}`}>
            {product.id} : {product.title}
            </Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SSGpage;
