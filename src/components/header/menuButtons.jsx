import { NavBar } from "./menuButton"
import { useEffect, useState } from "react"
import { buttons } from "./b";
import { Link } from "react-router-dom";


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
                 <Link to="/">
                  <NavBar text="INICIO" index={0}/> 
                </Link>
                               
                {anchoVentana < 600 ? (
                    <Link to="/fullscreen">
                      <NavBar 
                      text={"|||"} 
                      textclass={"transform rotate-90"} 
                      index={1}
                      />
                    </Link>
                  ) : (
                    buttons.map((button, index) => (
                      <Link to={button} key={index}>
                        <NavBar text={button}  index={(index+1)}/>
                      </Link>
                    ))
                  )}  
        </header>         
   )
}


