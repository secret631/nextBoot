import React from "react";
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
    <div className="m-12">
        <h1>{product.title}</h1>
        <p>gggggg</p>
        <h1>{product.description}</h1>
    </div>
  )
};

export default page;
