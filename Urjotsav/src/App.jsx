
import Header from './components/Header'

import Landingpage from "./images/Landing page1.jpg"
import planet from "./images/planet.png"

import Designer from "./images/Designer.png"

import '../src/App.css'
import Cursor from '../src/components/Cursor'
import About from './components/About'
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {

  return (

    <>
    
      <Parallax pages={2}>
     
        <ParallaxLayer
          offset={0}

          factor={2}
          style={{
            backgroundImage: `url(${Landingpage})`,
            backgroundSize: 'cover',
          }}
        />
       

        <ParallaxLayer offset={0} speed={0.3}>
        <Header />
          <div className='h-screen flex flex-col justify-center items-center relative'>
          
            <Cursor />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1}
          sticky={{ start: 0, end: 1 }}
        >
          <img id='earth' src="../src/images/planet.png" alt=""
            className="h-screen w-full fixed "
             />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.3} >
          <div>
            <div style={{ width: '100%', height: '100%', textAlign: 'center', color: 'white', fontSize: 150, fontFamily: 'Megrim', fontWeight: '500', letterSpacing: 6, wordWrap: 'break-word' }}>ABOUT US</div>
            <div style={{ width: '100%', height: '100%', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Jost', fontWeight: '300', letterSpacing: 1.20, wordWrap: 'break-word', margin: '2%' }}>Urjotsav, a prestigious national-level inter-collegiate annual technical and entrepreneurial festival hosted by the Rajiv Gandhi Institute of Petroleum Technology, is orchestrated with meticulous care by the Science and Technical Council on an annual basis. This extraordinary endeavor stands as a testament to the proactive dedication of our students, who strive ceaselessly to craft an event that not only exudes grandeur but also sparks profound intellectual curiosity within the minds of the intellectually inclined.<br />The festival is deeply committed to furnishing a robust platform wherein the potential industry leaders of tomorrow can unveil their prodigious talents, and where the young minds of today can engage in collaboration, strategic planning, and execute a spectacular celebration, thus instilling in them invaluable leadership skills and fostering the spirit of teamwork among its participants.</div>
          </div>
        </ParallaxLayer>
      </Parallax >
    </>

  )
}

export default App
