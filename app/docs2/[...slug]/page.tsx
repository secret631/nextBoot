
import React from "react"

const Doc =async ({ params }: { params: Promise<{ slug: string[] }> }) =>{
    const {slug} = await params

    if(slug?.length ===2){return(
        <p>viewing from {slug[0]} and consept {slug[1]}</p>
    )}
    else if (slug?.length === 1){
        return(
            <h1> viewing from {slug[0]}</h1>
        )
    }
else
    return(
       <div>Doc Home</div>
    )
}
export default Doc