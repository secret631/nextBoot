import React, { Suspense } from "react";
import ProductsListSSR from "@/src/Components/ProductsListSSR";
import ProductsListSSR_Skeleton from "@/src/Components/ProductsListSSR_Skeleton";



const page = () => {
    return (
        <div>
<Suspense fallback={<ProductsListSSR_Skeleton/>}>
<ProductsListSSR />


</Suspense>


        </div>
    )
}
export default page