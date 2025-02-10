import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

//Metadata
export const metadata: Metadata = {
  title: ' محصولات آرایشی ',
  description: " محصولات آرایشی "
}


const SSGpage = async () => {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "force-cache",
  });
  const data = await res.json();

  return (
    <div>

      <h1 className=" flex justify-center pt-8 font-extrabold "> محصولات آرایشی </h1>
   
       <hr className="mt-2 w-30"></hr>


      <div className="m-8 justify-center items-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.products.map((product: any) => (
          <div key={product.id} className="grid text-center py-2 font-bold border border-gray p-4 justify-center rounded-lg">

            {/* Link */}
            <Link href={`/SSG/${product.id}`}>
              {product.thumbnail ?
                <Image
                  width={200}
                  height={200}

                  src={product?.thumbnail}
                  alt={product.title}
                />
                : null
              }
              {product.title}
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default SSGpage;
