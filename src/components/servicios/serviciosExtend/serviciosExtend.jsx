import { useState, useEffect } from "react"
import { ServiciosDeRVC } from "../../Inicio/RVC/n"   
import { ServiceE } from "./services/serviceE"
import { PieDePagina } from "../../PiedePagina/PiedePagina"
import { Link, useParams,} from 'react-router-dom';

export function ServiciosExtend (){

    
    const { id } = useParams();
    const [iServicios, setIServicios ] = useState(0)

    const ServiciosFunction = (index)=>{
        setIServicios(index)
    }
    
    

    useEffect(() => {
        // Cuando cambie la ubicación (ruta), haz que la página comience desde arriba
        window.scrollTo(0, 0);
    }, []);

    return (

        <section className="flex justify-center pt-[192px]  ">
            <article className="h-full w-[100%] justify-stard max-w-[1280px] bg-white flex   flex-col ">
                <section className=" flex justify-start items-start ">
                    <main className="flex flex-col w-[100%] max-w-[400px] pt-4 ">
                    {ServiciosDeRVC.map((element, index) =>(
                        <Link key={element.id} to={`/SERVICIOS/${element.id}`}>
                                <div  className="h-12 p-4 overflow-hidden text-ellipsis flex gap-4 text-xs font-semibold items-center justify-between text-[#094074] cursor-pointer"
                            onClick={()=>{ 
                                ServiciosFunction(index)
                            }}
                            >
                                {element.title.toUpperCase()} 
                                <div>
                                    {">"}
                                </div>
                            </div>
                        </Link>                      
                    ))} 
                    </main>
                    {id == ServiciosDeRVC[iServicios].id? 
                    <ServiceE>
                        <picture className="flex w-full  h-[350px] max-h-[350px] overflow-hidden  brightness-40 contrast-125 ">
                            <img src= {ServiciosDeRVC[iServicios].imagen} alt={ServiciosDeRVC[iServicios].title} className="w-full h-auto flex"/>
                        </picture>
                        <article className="flex items-start flex-col w-full gap-4">
                            <h2 className="flex font-semibold ">
                                {ServiciosDeRVC[iServicios].title}
                            </h2>
                            <section>
                                {ServiciosDeRVC[iServicios].relleno}
                            </section>
                        </article>    
                    </ServiceE> : 
                        ServiciosDeRVC.map((servicio, index)=>{
                            if(servicio.id== id) ServiciosFunction(index)
                        })
                    }   
                </section>
                <PieDePagina/>
            </article>
        </section>
    )
}