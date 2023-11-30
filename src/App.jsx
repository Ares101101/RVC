
import { MenuHeader } from "./components/header/menuHeader"
import { Route, Routes } from "react-router-dom"
import Inicio from "./components/Inicio/Inicio"
import FullScreenComponent from "./components/header/fullScreen"
import { Servicios } from "./components/servicios/Servicios"
import ErrorPage from "./error-page"
import { ServiciosExtend } from "./components/servicios/serviciosExtend/serviciosExtend"

function App() {
  
  return (
    <div className="bg-[#EDEDED] relative " >                      
      <MenuHeader/>
      <Routes >
        <Route path="/"   element={<Inicio/>}/>
        <Route path="Inicio" element={<Inicio/>}/>
        <Route path="|||" element={<FullScreenComponent/>}/> 
        <Route path="SERVICIOS" element={<Servicios/>}/>
        <Route path="SERVICIOS/:id" element={<ServiciosExtend/>}>
        </Route> 
        <Route path="*" element={<ErrorPage/>}/>           
      </Routes>

    </div>   
     
  )
}

export default App
