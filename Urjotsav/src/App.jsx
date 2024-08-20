
import Header from './components/Header'

import Landingpage from "./images/Landing page1.jpg"
import planet from "./images/planet.png"

import Designer from "./images/Designer.png"

import '../src/App.css'
import Cursor from '../src/components/Cursor'
import About from './components/About'
import {Parallax,ParallaxLayer} from "@react-spring/parallax"

function App() {
 

  return (

    <>
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={3}>
      <div id='bgimg' className=' w-full h-screen  bg-cover bg-center overflow-hidden ' style={{ backgroundImage: `url(${Landingpage})` }}>

        <Header />

        <div className='h-screen flex flex-col justify-center items-center relative'>

          <Cursor />
          
        
      </div>
      </div>

   
 
    
      </ParallaxLayer>
      <ParallaxLayer offset={1}>
      <img src="../src/images/planet.png" alt=""
            className="h-screen w-full absolute   " />
        
      </ParallaxLayer>
      </Parallax>
    </>

  )
}

export default App
