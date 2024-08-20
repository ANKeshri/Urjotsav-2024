import React, { useEffect } from 'react'
import { gsap } from "gsap";
function Cursor() {

    const handlemouseMove = (event) => {
        const { clientX, clientY } = event
        gsap.to("#cursor", {
            x: clientX - 20 / 2,
            y: clientY - 20 / 2,
            duration: 1,
            delay: 0,
            ease: "power4.out"
        })
    }
    useEffect(() => {
        window.addEventListener('mousemove', handlemouseMove)

        return () => {
            window.removeEventListener('mousemove', handlemouseMove)
        }
    }, [])


    return (
        <>
            <div id="cursor" className='h-5 w-5 bg-white mix-blend-overlay rounded-full top-0 absolute left-0 pointer-events-none'>
            </div>

            <div onMouseEnter={()=>{gsap.to("#cursor",{scale:8 , duration:0.3})}}
             onMouseLeave={()=>{gsap.to("#cursor",{scale:1 , duration:0.3})}}

              className='text-9xl text-white font-Megrim'>URJOTSAV</div>

        </>
    )
}

export default Cursor
