"use client"
import { useGSAP } from "@gsap/react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
const FromAndFromTo = () => {
    const gsapContainer = useRef(null)
    const tween = useRef<null | gsap.core.Tween>(null)
    const playHandler = () => {
        tween.current?.play()
    }
    const pauseHandler = () => {
        tween.current?.pause()
    }
    const reverseHandler = () => {
        tween.current?.reverse()
    }
    const restartHandler = () => {
        tween.current?.restart()
    }
    useEffect(() => {
        tween.current = gsap.to(".green", {duration:3, x:600, ease:"linear", paused:true});
    },[])
    return <div ref={gsapContainer}>
        <div>Refresh page to run the animation again</div>
        <div>
            <button onClick={playHandler}>Play</button>
            <button onClick={pauseHandler}>Pause</button>
            <button onClick={reverseHandler}>Reverse</button>
            <button onClick={restartHandler}>Restart</button>
        </div>
        <img className="fred green" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred.svg" alt="" width="150"></img>
    </div>
}

export default FromAndFromTo