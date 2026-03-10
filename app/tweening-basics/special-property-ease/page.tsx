"use client"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"
const SpecialPropertyEase = () => {
    const gsapContainer = useRef(null)
    // https://gsap.com/docs/v3/Eases/?ref=6234
    useGSAP(() => {
        gsap.to(".green", {duration:3, x:600, ease:"back.out"});
        gsap.to(".pink", {duration:3, x:600, ease:"linear"});   
    }, {scope: gsapContainer})
    return <div ref={gsapContainer}>
        <div>Refresh page to run the animation again</div>
        <img className="fred green" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred.svg" alt="" width="150"></img>
        <img className="fred pink" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred-pink.svg" alt="" width="150"></img>
    </div>
}

export default SpecialPropertyEase