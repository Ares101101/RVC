import { Slider } from "./slider/slider"
import { motion } from "framer-motion"
export default function Inicio (){
    return(
        <article className="flex justify-center w-full pt-[212px]  ">
            <div className=" pr-4 pl-4 flex flex-col justify-stard h-full w-[1280px] bg-white">
                <div className=" w-[100%]  flex  items-center flex-col justify-between max-h-96">
                    <Slider/>
                    <motion.h1
                    initial={{display:'hidden',}}
                    transition={{duration:1}}
                    animate={{
                    y:-20,
                    x:0,
                    color:'#000',
                    zIndex:2
                    }}
                    
                    >
                        hola  
                    </motion.h1>

                </div>
                
                <span className="box-content w-max-[1280px] text-[#023047]  font-semibold">
                    RVC es una empresa contable comprometida con brindar servicios de alta calidad en el ámbito de la contabilidad y asesoría financiera. Nuestro enfoque principal es proporcionar soluciones personalizadas y especializadas a empresas de diferentes sectores y tamaños.
                </span>
            </div>
        </article>
        
    )
}