import { Sect } from "./arti/secti"
import { somos1 } from "../n"
import { useState } from "react"

export function CompoUno () {
    
    const [cssIndex, setIndex]= useState(0) 
    const indexFunc = (index) => {
        setIndex(index);
    };
     return(
            <article className="flex flex-col text-xs font-semibold gap-4 w-full">

                {somos1.map((sec, index)=>(
                    <Sect 
                    key={index} 
                    ar={sec.pregunta} 
                    foo ={sec.cuerpo}
                    index = {cssIndex} 
                    actual = {index}
                    click = {indexFunc}
                    />
                ))}
            </article>
    )
}