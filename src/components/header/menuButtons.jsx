import { NavBar } from "./menuButton"
import { useEffect, useState } from "react"
import { buttons } from "./b";

export function MenuButtons()  {
   
   const [anchoVentana, setAnchoVentana] = useState(window.innerWidth);             
    
   useEffect(() => {
    function manejarCambioTamañoVentana() {
      setAnchoVentana(window.innerWidth);
    }

    window.addEventListener('resize', manejarCambioTamañoVentana);

    return () => {
      window.removeEventListener('resize', manejarCambioTamañoVentana);
    };
  }, []);
  
   return (

        <header className= "flex  h-auto justify-between ">
                <NavBar text="Inicio"  />                
                { anchoVentana < 600 ? <NavBar  text={"|||"} textclass={"transform rotate-90"} />: buttons.map((button, index) => (
                <NavBar key={index} text={button} /> 
                ))}     
        </header>         
   )
}


