import React from 'react'
import { Link } from 'react-router-dom'
import Layer1 from '../images/Layer1.jpg'
function About2() {
  return (
    <div style={{ backgroundImage: `url(${Layer1})`, backgroundPosition: "center", backgroundSize: "cover" }} className='w-full h-auto overflow-hidden z-4'>
      <div className='h-screen w-full flex justify-center items-center'>
    <div className='w-[75vw]' style={{ textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Jost', fontWeight: '300', letterSpacing: 1.20, wordWrap: 'break-word' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sunt omnis fugiat in? Animi soluta esse veritatis commodi porro, velit sequi deserunt, voluptas exercitationem cumque eius, sint tempore! Beatae quae, quibusdam fuga eos debitis a voluptatibus ex eum reiciendis repellendus error obcaecati dolores ipsa optio voluptate dolore sunt saepe! Qui!
    </div>
    </div>
   </div>
    
   
  )
}

export default About2