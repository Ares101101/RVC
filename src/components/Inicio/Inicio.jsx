import { Slider } from "./slider/slider"
import { SliderText } from "./slider/slidertext"
import { useState } from "react";

export default function Inicio (){

    const [indexSlider, setIndexSlider] = useState(0);

    const indexFunc = (index) => {
        setIndexSlider(index);
    };
    
    return(
        <article className="flex justify-center w-full pt-[212px]  ">
            <div className=" flex flex-col justify-stard h-full w-[1280px] bg-white">
                <div className=" w-[100%] relative flex  items-center flex-col justify-center max-h-96 overflow-hidden" >
                    <Slider indexFunc={indexFunc}/>
                   
                    <SliderText  index={indexSlider}/>
                </div>
                {console.log(indexSlider)}
                <span className="box-content w-max-[1280px] text-[#023047]  font-semibold">
                    RVC es una empresa contable comprometida con brindar servicios de alta calidad en el ámbito de la contabilidad y asesoría financiera. Nuestro enfoque principal es proporcionar soluciones personalizadas y especializadas a empresas de diferentes sectores y tamaños.
                </span>
            </div>
        </article>
        
    )
}