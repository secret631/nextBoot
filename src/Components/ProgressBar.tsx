"use client"

import React, { useEffect } from "react"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import { usePathname, useRouter } from 'next/navigation'


NProgress.configure({ showSpinner: false, speed: 500, minimum: 0.2 })

export const ProgressBar = () => {


    const router = useRouter()
    const pathname = usePathname()


    useEffect(() => {
        NProgress.start()
        NProgress.done()


        return () => {
            NProgress.done()
        }
    }, [pathname])

    return (
        null
    )


}
export default ProgressBar