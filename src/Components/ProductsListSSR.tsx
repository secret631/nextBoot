'use server'
 const ProductsListSSR =async()=>{
     const res = await fetch('https://dummyjson.com/products' , {
        cache: 'force-cache',
        next: {revalidate: 5 , tags: ['products']}

     })

     const data= await res.json()

    return (
        <div>
<p>Products List</p>

<ul>
{data.products.map((pro:any)=>(
     <li key={pro.id}>
{pro.id}:{pro.title}
    </li>
))}
   
</ul>

        </div>
    )
 }
 export default ProductsListSSR