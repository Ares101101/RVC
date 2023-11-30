
import { NavBar } from './menuButton';

import { Link } from 'react-router-dom';

const FullScreenComponent = () => {
 
  return (
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#1e73be]">
        <div className="flex flex-col">
            <Link to="/Servicios" >
               <NavBar text="Servicios"/>   
            </Link>            
            <Link to="/Estudio Contable" >
               <NavBar text="Estudio Contable"/>   
            </Link>
            <Link to="/Clientes" >
               <NavBar text="Clientes"/>   
            </Link>  
            <Link to="/Cronograma de declaraciones" >
               <NavBar text="Cronograma de declaraciones"/>   
            </Link>       
        </div>
      </div>
  );
  
};

export default FullScreenComponent;