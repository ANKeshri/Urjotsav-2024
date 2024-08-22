
import Header from './components/Header'
import Layer1 from "./images/Layer1.jpg"
import '../src/App.css'
import Cursor from '../src/components/Cursor'
import planet from "../src/images/planet.png"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"


function App() {

 

  return (

    <>
    <div>
      <div className='w-full h-screen' style={{backgroundImage:`url(${Layer1})`,backgrounPosition:"center",backgroundSize:"cover"}}>
     
        <Parallax pages={2}>
          <ParallaxLayer style={{zIndex:1}}>
            <Header/>
          </ParallaxLayer>
          
          <ParallaxLayer offset={0} >
             <div className='flex h-screen items-end justify-center'>
              <img id='image' className='w-[75%]' src="../src/images/planet.png" alt="Logo" />
             </div>
          </ParallaxLayer>
           
        </Parallax>
      </div>
    </div>
    </>



  )
}

export default App
