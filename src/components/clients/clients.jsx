import { Clientes2 } from "../Inicio/RVC/n";
import { PieDePagina } from "../PiedePagina/PiedePagina";

export function Clients (){
    return(
        <article className="flex justify-center w-full pt-[192px]  ">
            <section className=" flex flex-col justify-stard h-full w-[100%] max-w-[1280px] bg-white ">
            <div className="flex flex-col items-center pl-4 pr-4 text-sm font-bold text-[#1e73be]">
                {Clientes2.map((clientes, index)=>(
                    <section 
                    key={clientes.id} 
                    className="flex justify-center items-center gap-4 flex-col p-4" 
                    >
                        <picture className="flex items-center  w-[100%] max-w-[200px]">
                            <img 
                            src={clientes.imagen} 
                            alt={index} 
                            className="w-full h-auto flex"
                            />  
                        </picture>
                        {clientes.empresa}
                    </section>
                ))
                }   
            </div>
            <PieDePagina/>   
            </section>
        </article>
    )
}