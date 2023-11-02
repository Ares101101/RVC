
import { NavBar } from './menuButton';
import { buttons } from "./b";

const FullScreenComponent = () => {
    
  return (
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#013b57c2]">
        <div className="flex flex-col">
          {buttons.map((button, index) => (
            console.log(button, index),
             <NavBar key={index} text={button} /> 
            
          ))}
        </div>
      </div>
  );
  
};

export default FullScreenComponent;