import React from "react";

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
            {product.id} : {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SSGpage;
