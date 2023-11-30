import { Scard } from "./serviciosCard/scard"
import { ServiciosDeRVC } from "../Inicio/RVC/n";
import { Link } from "react-router-dom";
import { PieDePagina } from "../PiedePagina/PiedePagina";
export function Servicios (){
    return(
        <article className="flex justify-center w-full pt-[192px] ">
            <div className="flex flex-col justify-stard h-full w-[100%] max-w-[1280px] bg-white ">
                <main className="items-center gap-4  max-w-[1280px] bg-white p-4 flex flex-wrap justify-center"
                >
                {ServiciosDeRVC.map((element,index) => (
                    <Link 
                    to={element.id} 
                    key={element.id}
                    >
                        <Scard 
                        cover={element.imagen} 
                        title={element.title} 
                        index={index}
                        />
                    </Link>
                    ))}
                </main>
                
                <PieDePagina/>
                          
            </div>
        </article>
        
    )
}