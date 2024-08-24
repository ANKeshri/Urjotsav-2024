import { useState } from 'react'
import Header from './components/Header'
import Layer1 from "./images/Layer1.jpg"
import '../src/App.css'
import Cursor from '../src/components/Cursor'
import planet from "../src/images/planet.png"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { gsap } from 'gsap'
import {useGSAP} from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function App() {

  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
       gsap.to("#image",{
         
          scale:3,
          y:100,
          scrollTrigger:{
            trigger:"#image",
            start:"top 15%",
            end:"bottom",
            scrub:true,
            fastScrollEnd:true,
           
            
          }
       })
  })
   
  return (

    <>
     <div className='w-full h-[200vh]' >
      <div style={{backgroundImage:`url(${Layer1})`,backgroundPosition:"center",backgroundSize:"cover"}} className='w-full h-screen'>
       <Header/>
       <div className='h-screen flex p-14  justify-center'>
        <img id='image' src='../src/images/planet.png'></img>
       </div>
      </div>

      <div style={{backgroundImage:`url(${Layer1})`,backgroundPosition:"center",backgroundSize:"cover"}} className='w-full h-screen'>

      </div>
     </div>
    </>



  )
}

export default App
