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

        <section className="flex sm:max-w-[1280px] w-[100%] flex-col sm:flex-row  min-h-[350px] gap-4 p-4">
                <article className="flex flex-col bg-white font-semibold sm:w-[250px] w-[100%] h-auto justify-stard" >
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
