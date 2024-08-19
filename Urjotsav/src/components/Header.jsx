import React from 'react'

export default function Header() {
    

    return (
        <>
            <div className='flex space-x-20  justify-end mt-5 mr-3'>
            
                <div className='flex hover:cursor-pointer'>Home</div>
               <div className='flex hover:cursor-pointer'>About Us</div>
               <div className='flex hover:cursor-pointer'>Contact</div>
               <div className='flex hover:cursor-pointer' >Brochure</div>
               
               
            </div>
        </>
    )
}
