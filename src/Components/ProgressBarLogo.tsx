"use client"

import React, { useEffect, useState } from "react"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import { usePathname, useRouter } from 'next/navigation'


NProgress.configure({ showSpinner: false, speed: 500, minimum: 0.2 })

export const ProgressBarLogo = () => {


    const router = useRouter()
    const pathname = usePathname()
    const [Loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        NProgress.start()


        const timeout = setTimeout(() => {
            setLoading(false)
            NProgress.done()
        }, 600)

        return () => {
            clearTimeout(timeout)
            NProgress.done()
        }
    }, [pathname])

    return Loading ?
        (<div className="loading-overlay">

            <div className="loading-content">
                <img className="loading-logo" src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" />
            </div>
        </div>) : null




}
export default ProgressBarLogo