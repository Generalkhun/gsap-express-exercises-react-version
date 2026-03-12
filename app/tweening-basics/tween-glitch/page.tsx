"use client"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"
const TweenGlitch = () => {
    const gsapContainer = useRef(null)
    const hoverHandler = () => {
        // gsap.from('.bg-circle', {scale:0, duration:1, ease:"circ"})
        gsap.fromTo('.bg-circle', {scale:0, duration:1, ease:"circ"}, {scale:1, duration:1, ease:"circ"})
    }
    return <div ref={gsapContainer}>
        <div onMouseEnter={hoverHandler} style={{
            cursor:"pointer",
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'darkblue',
            border: '1px solid black',
            borderRadius: '100%',
            height: '50vmin',
            width: '50vmin',
        }}>
            <div className="bg-circle" style={{
                borderRadius: '100%',
                height: '50vmin',
                width: '50vmin',
                opacity: '0.3',
                willChange: 'transform',
                position:'absolute',
                backgroundColor: "white"
            }}>
            </div>
            <span style={{
                color: 'white',
                fontWeight:800,
                fontFamily: 'sans-serif',
                fontSize:'8vmin',
            }}>HOVER</span>
        </div>
   
        
    </div>
}

export default TweenGlitch