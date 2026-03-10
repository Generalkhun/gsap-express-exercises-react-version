"use client"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"
const DelayAndRepeatPage = () => {
    const gsapContainer = useRef(null)
    useGSAP(() => {
        gsap.to(".fred", {
            x: 300,
            repeat:-1,
            yoyo:true,
            repeatDelay:1,
        })
    }, { scope: gsapContainer })
    return <div ref={gsapContainer}>
        <div>Refresh page to run the animation again</div>
        <img className="fred" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred.svg" alt="" width="150"></img>
    </div>
}

export default DelayAndRepeatPage