import { useState } from 'react'
import Header from './components/Header'
import LandingPage from "./images/Landing Page.png"


function App() {
  const [count, setCount] = useState(0)

  return (
   
    <div className='w-full h-screen bg-no-repeat bg-cover' style={{ backgroundImage:`url(${LandingPage})` }}>
   <Header/>
    
    </div>
    
   
  )
}

export default App
