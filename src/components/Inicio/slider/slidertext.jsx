import { motion } from "framer-motion"
import PropTypes from 'prop-types';
import { useState, useEffect} from "react";

export const SliderText= ({index})=>{
    
    const [indiceActual, setIndiceActual] = useState(index);
    useEffect(() => {
        setIndiceActual(index);
      }, [index, indiceActual]);

  
    switch (indiceActual) {
      case 0:
        return <ComponenteUno />;
      case 1:
        return <ComponenteDos/>;
      case 2:
        return <ComponenteTres/>;
      case 3:
        return <ComponenteCuatro/>;
      default:
        return  <ComponenteUno />;
    }
}
const ComponenteUno = () => {
    return (
        <motion.strong
            initial={{
                display:'hidden',
                bottom: 0,
                    
            }}
            animate={{
                display:'visible',
                top:"30%", 
                zIndex:10,   
            }}
            exit="exit"
            className=" h-0 w-[70%] text-4xl absolute sm:visible"
            style={{ 
                fontSize: '32px',
                textTransform: 'uppercase',
                lineHeight: '38px',
                fontWeight: 400,
                marginBottom: '20px',
                textShadow: '2px 3px 11px rgba(0, 0, 0, 1)',
                color:'#ffb703',
            }}
         >
            <span className=" text-[#023047] ">RVC : </span>  CONFIANZA QUE IMPULSA TU<span className=" text-[#023047] "> ÉXITO .</span>
         </  motion.strong>
    )
};

const ComponenteDos = () => {
    return (
        <motion.strong
            initial={{
                display:'hidden',
                bottom: 0,
                    
            }}
            animate={{
                display:'visible',
                top:"30%", 
                zIndex:10,   
            }}
            exit="exit"
            className=" h-0 w-[70%] text-4xl absolute  "
            style={{ 
                fontSize: '32px',
                textTransform: 'uppercase',
                lineHeight: '38px',
                fontWeight: 400,
                marginBottom: '20px',
                textShadow: '2px 3px 11px rgba(0, 0, 0, 1)',
                color:'white',
            }}
         >
            Servicios integrales en las diferentes áreas de su empresa  	 			
         </  motion.strong>
    )
  };

  const ComponenteTres =()=>{
    return (
        <motion.strong
            initial={{
                display:'hidden',
                bottom: 0,
                    
            }}
            animate={{
                display:'visible',
                top:"30%", 
                zIndex:10,   
            }}
            exit="exit"
            className=" h-0 w-[70%] text-4xl absolute  "
            style={{ 
                fontSize: '32px',
                textTransform: 'uppercase',
                lineHeight: '38px',
                fontWeight: 400,
                marginBottom: '20px',
                textShadow: '2px 3px 11px rgba(0, 0, 0, 1)',
                color:'#ffb703',
            }}
         >
            <span className=" text-[#023047] ">HOLA </span>  CONFIANZA QUE IMPULSAN TU<span className=" text-[#023047] "> ÉXITO .</span>
         </  motion.strong>
    )
  }
  
  const ComponenteCuatro =()=>{
    return (
        <motion.strong
            initial={{
                display:'hidden',
                bottom: 0,
                    
            }}
            animate={{
                display:'visible',
                top:"30%", 
                zIndex:10,   
            }}
            exit="exit"
            className=" h-0 w-[70%] text-4xl absolute  "
            style={{ 
                fontSize: '32px',
                textTransform: 'uppercase',
                lineHeight: '38px',
                fontWeight: 400,
                marginBottom: '20px',
                textShadow: '2px 3px 11px rgba(0, 0, 0, 1)',
                color:'#ffb703',
            }}
         >
            <span className=" text-[#023047] ">HOLA </span>  CONFIANZA QUE IMPULSAN TU<span className=" text-[#023047] "> ÉXITO .</span>
         </  motion.strong>
    )
  }

SliderText.propTypes = {
    index: PropTypes.number.isRequired,
  };