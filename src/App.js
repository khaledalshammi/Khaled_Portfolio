import Home from './components/Home/Home'
import About from './components/About/About'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import React,{useState} from 'react'
import Menuu from './components/Menuu'

function App() {
  const [checkedon,setCheckedon] = useState()
  const checkon=(value)=>{
    setCheckedon(value)
  }
  return (
    <>
      {checkedon ? <Menuu onmenu={checkon}/> :
                  <div>
                    <Home onmenu={checkon}/>
                    <About/>
                    <Project/>
                    <Contact/>
                  </div>}
    </>
  );
}

export default App;
