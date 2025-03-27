import {NextResponse} from 'next/server'
import {revalidateTag} from 'next/cache'

export async function POST(req:Request) {
    const body = await req.json()
    const {id}= body


     if (!id){
return NextResponse.json({message: "Missing product Id"}, {status: 400})
     }

     revalidateTag(`product-${id}`)

     return NextResponse.json({message: `revalidated product ${id}`}, {status:200})
    
}