import Phone from "./phone"
import Mail from "./mail"
import { Link } from "react-router-dom"
import Location1 from "./location"
import { Sunat } from "../Inicio/RVC/n"
import { InteresLinck } from "./interesLink"
export function PieDePagina (){
    return(
       <article className="w-full flex flex-col bg-[#000000] h-auto md:h-[370px]  items-center justify-between text-xs text-opacity-75 text-white">
        <div className="flex flex-col md:flex-row w-full h-full gap-6 pl-4 pr-4 pt-6 font-semibold">
            <div className="flex flex-col w-full h-full  justify-start gap-6 ">
                <div >
                    HIDELMO CHUQUIPURA CCAHUATA
                    <div>
                    Contador - Gerente
                    </div>
                </div>
                <div>
                    Somos un Estudio Contable con experiencia en brindar servicios integrales en las Empresas en todas sus áreas.
                </div>  
            </div>
            <div className="flex flex-col w-full h-full  justify-start gap-6">
                <div>
                NUESTROS SERVICIOS 
                </div>
                <div className="flex flex-col gap-2 ">
                    <Link className="border-b border-white h-8 border-opacity-20">
                    <p className=" hover:border-white hover:border-b">
                        ⮞ Actualización Contable
                    </p> 
                    </Link>
                    <Link className="border-b border-white h-8 border-opacity-20">
                    <p className=" hover:border-white hover:border-b">
                        ⮞ Asesoría Tributária
                    </p>
                    </Link>
                    <Link className="border-b border-white h-8 border-opacity-20">
                    <p className=" hover:border-white hover:border-b">
                        ⮞ Asesoría Laboral
                    </p>
                    </Link>
                    <Link className="border-b border-white h-8 border-opacity-20">
                    <p className=" hover:border-white hover:border-b">
                        ⮞ Otros Servicios
                    </p>
                    </Link>
                </div> 
                
            </div>
            <section className="flex flex-col w-full h-full  justify-start gap-6">
                <article>
                    ESTAMOS EN CONTACTO
                </article>
                <article className="flex flex-col">
                    <div className=" text-opacity-40 text-white h-6 flex items-center">
                    <Location1/>&nbsp;Ubícanos:
                    </div>      
                    <p>Ca. los Pinos 118, Piso 3 Of 301, Miraflores</p>
                </article>
                <article className="flex flex-col">
                    <div className=" text-opacity-40 text-white h-6 flex items-center">
                    <Phone/>&nbsp;Llámanos:
                    </div>
                    <a>(+51) 998554614</a>
                    <a>(+51) 945780318</a>
                </article>
                <article className="flex flex-col">
                    <div className=" text-opacity-40 text-white h-6 flex items-center">
                    <Mail/>&nbsp;Escribenos:
                    </div>
                    <a>rvc_servicioscontables@hotmail.com</a>
                </article>
            </section>
            <section className="flex flex-col w-full h-full  justify-start gap-6">
                <article>
                LINKS DE INTERES
                </article>
                <article className="gap-2 flex flex-col [&>a]:border-white [&>a]:border-b [&>a]:border-opacity-20 [&>a>section:hover]:border-white  [&>a>section:hover]:border-b ">
                {Sunat.map((element, index)=>(
                    <Link key={index} to={element.url}  target="_blank">
                        <InteresLinck index={index} title={element.title}/>
                    </Link>
                ))}
                </article>
                
            </section>
        </div>
        <div className="flex flex-col w-full font-oswald text-white text-opacity-40 justify-center items-center text-xs h-auto sm:h-11 sm:flex-row border-t border-white border-opacity-20 ">
            <div>
                Diseñado por: &nbsp;
            </div> 
            <div>
                Diego Felix Amachi Flores  &nbsp; 
            </div> 
            <div className="flex justify-center items-center">
                <Phone/> &nbsp; 953120536  &nbsp; 
            </div> 
            <div className="flex justify-center items-center">
                <Mail/> &nbsp; diego.amachiflores@gmail.com
            </div>
        </div>
       </article>
    )
}