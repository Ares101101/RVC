import { Slider } from "./slider/slider"

export default function Inicio (){
    return(
        <article className="flex justify-center w-full pt-[212px] ">
            <div className="flex flex-col justify-between h-full w-[1280px] bg-white">
                <Slider/>
                <span className="box-content w-max-[1280px] text-[#023047]  font-semibold pl-4 ">
                    RVC es una empresa contable comprometida con brindar servicios de alta calidad en el ámbito de la contabilidad y asesoría financiera. Nuestro enfoque principal es proporcionar soluciones personalizadas y especializadas a empresas de diferentes sectores y tamaños.
                </span>
            </div>
        </article>
        
    )
}