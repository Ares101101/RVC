import { Nosotros } from "./RVC/nosotros";
import { Slider } from "./slider/slider"
import { SliderText } from "./slider/slidertext"
import { useState } from "react";
import {Mejo} from './mejores/mejores'
import { ServSlider } from "./serviciosSlider/servSlider";

export default function Inicio (){

    const [indexSlider, setIndexSlider] = useState(0);

    const indexFunc = (index) => {
        setIndexSlider(index);
    };
    
    return(
        <article className="flex justify-center w-full pt-[192px]  ">
            <div className=" flex flex-col justify-stard h-full w-[100%] max-w-[1280px] bg-white ">
                <div className=" w-[100%] relative flex  items-center flex-col justify-center max-h-96 overflow-hidden" >
                    <Slider indexFunc={indexFunc}/>    
                    <SliderText  index={indexSlider}/>
                </div>
                <Nosotros/>
                <Mejo/>
                <ServSlider/>
            </div>
        </article>
        
    )
}