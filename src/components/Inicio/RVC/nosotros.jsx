import { useState } from "react"
import { Bno } from "./bno"
import { nbuttons } from "./n";
import { Arti }from "./arti"

export function Nosotros(){

    const [indexLogo, setLogo] = useState(0);

    const indexFunc = (index) => {
        setLogo(index);
    };


    return (

        <section className="flex sm:max-w-[1280px] w-[100%] flex-col sm:flex-row  min-h-[230px] gap-10 p-10">
                <article className="flex flex-col bg-white font-semibold sm:w-[310px] w-[100%] h-auto justify-stard" >
                    {nbuttons.map((button, index) => (
                    <Bno 
                    name={button} 
                    key={index}
                    index={index} 
                    click={indexFunc} 
                    estado={indexLogo}   
                    />
                    ))
                    }
                </article>
                <Arti index={indexLogo}/>
        </section>

            
        )
}
