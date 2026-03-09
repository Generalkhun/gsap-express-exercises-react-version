"use client"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"
const BasicTweenPage = () => {
    const gsapContainer = useRef(null)
    useGSAP(() => {
        gsap.to(".fred", {
            x: 700,
            y: 400,
            scale: 3,
            rotation: 360,
            duration: 3,
        })
    }, { scope: gsapContainer })
    return <div ref={gsapContainer}>
        <div>Refresh page to run the animation again</div>
        <img className="fred" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred.svg" alt="" width="150"></img>
    </div>
}

export default BasicTweenPage