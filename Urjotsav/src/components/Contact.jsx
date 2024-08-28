import React from 'react'
import planet from "../images/contact.jpg"
import Header from './Header'

export default function Contact() {
    

    return (
        <>
          <div className=" bg-cover bg-center" style={{backgroundImage:`url(${planet}`}} >
            
          <div className=" bg-cover bg-center min-h-screen  flex justify-center items-center p-8" >
           
           <div className="container flex justify-between w-full max-w-7xl">
             <div className="form-container w-1/2">
               <h1 className="text-white text-4xl font-bold mb-8 font-Megrim">URJOTSAV</h1>
               <form className="space-y-4">
                 <input type="text" placeholder="YOUR NAME" className="w-full p-4 bg-white bg-opacity-10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    <input type="email" placeholder="EMAIL ADDRESS" className="w-full p-4 bg-white bg-opacity-10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                 <input type="text" placeholder="PHONE NUMBER" className="w-full p-4 bg-white bg-opacity-10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                 <input type="text" placeholder="PARTICIPATING EVENT" className="w-full p-4 bg-white bg-opacity-10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                 <textarea placeholder="MESSAGE" className="w-full p-4 bg-white bg-opacity-10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 h-36"></textarea>
                 <button type="submit" className="w-full p-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none">SUBMIT</button>
               </form>
             </div>
             <div className="contact-info w-1/3 bg-black bg-opacity-60 rounded-lg p-8 text-white">
               <h2 className="text-2xl font-bold mb-4">CONTACT INFORMATION</h2>
                  <h3 className="text-xl font-semibold mb-6">OVERALL FEST COORDINATORS</h3>
               <div className="contact-card flex items-center mb-6">
                 <div className="profile-pic w-20 h-20 bg-gray-500 rounded-full mr-4"></div>
                 <div>
              <p className="text-xl font-medium">SAMMINGA SAINATH RAO</p>
                   <p className="text-lg">8331098232</p>
                 </div>
               </div>
               <h3 className="text-xl font-semibold">SPONSORSHIP & MARKETING</h3>
             </div>
           </div>
         </div>
          </div>
            
        </>
   
    )
}
