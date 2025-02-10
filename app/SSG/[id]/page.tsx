import React from "react";
import Test from "@/src/Components/Test";
import Image from "next/image";

export const revalidate = 120
export const dynamicParams = false



export async function generateStaticParams() {
  const data: any = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );
  return data.products.map((product: any) => ({
    id: String(product.id),
  }));
}

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const product: any = await fetch(`https://dummyjson.com/products/${id}`).then(
    (res) => res.json()
  );

  return (
    <div className="p-8">

      {/* back */}
      <div>
        <Test />
      </div>
      
<div className="flex justify-center">
   {product.thumbnail?
        <Image
          width={300}
          height={300}

          src={product?.thumbnail}
          alt={product.title}
        />
         : null
     }
</div>
     <div className="grid justify-center px-48 gap-2">
      <h1 className="text-center font-extrabold ">{product.title}</h1>
      <h2 className="">{product.description}</h2>
      <p className="font-bold">{`Rating: ${product.rating}`}</p>
      <p className="font-bold">{`Stock: ${product.stock}`}</p>
     </div>
      

     




    </div>
  )
};

export default page;
