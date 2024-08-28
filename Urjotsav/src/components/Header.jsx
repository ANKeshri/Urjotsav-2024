import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
    

    return (
       
          <>
           <div className='flex space-x-20 text-white justify-center  mr-10 py-4 '>
        
           <Link to="/"><div className='flex transition-all hover:cursor-pointer hover:scale-125 font-Jost '>HOME</div></Link> 
          <Link to="/About2"><div className='flex transition-all hover:cursor-pointer hover:scale-125 font-Jost '>ABOUT US</div></Link> 
          <Link to='/Events'><div className='flex transition-all hover:cursor-pointer hover:scale-125 font-Jost '>EVENTS</div></Link>       
           <Link to="/contact"><div className='flex transition-all hover:cursor-pointer hover:scale-125 font-Jost '>CONTACT</div></Link>
           <div className='flex transition-all hover:cursor-pointer hover:scale-125 font-Jost ' >BROCHURE</div>
           <div className='flex transition-all hover:cursor-pointer hover:scale-125 font-Jost ' >REGISTER</div>
           
        </div> 
       
        </>
            
       
    )
}
