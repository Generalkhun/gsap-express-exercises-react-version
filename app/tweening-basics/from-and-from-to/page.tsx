"use client"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"
const FromAndFromTo = () => {
    const gsapContainer = useRef(null)
    useGSAP(() => {
        gsap.fromTo(
            ".fred", 
            {x:700, y:400, scale:1, opacity:0},
            {x:400, y:200, scale:3, opacity:1, duration:3}
        )
    })
    return <div ref={gsapContainer}>
        <div>Refresh page to run the animation again</div>
        <img className="fred" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred.svg" alt="" width="150"></img>
    </div>
}

export default FromAndFromTo