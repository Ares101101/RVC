
import { MenuHeader } from "./components/header/menuHeader"
import { Route, Routes } from "react-router-dom"
import Inicio from "./components/Inicio/Inicio"
import FullScreenComponent from "./components/header/fullScreen"

function App() {
  
  return (
    <div >                      
      <MenuHeader/>
      <Routes >
        <Route path="/Inicio"   element={<Inicio/>}/>
        <Route path="|||" element={<FullScreenComponent/>}/>                
      </Routes>

    </div>   
     
  )
}

export default App
