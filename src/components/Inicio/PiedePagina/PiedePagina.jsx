import Phone from "./phone"
import Mail from "./mail"
import { Link } from "react-router-dom"
export function PieDePagina (){
    return(
       <article className="w-full flex flex-col bg-[#000000] h-auto md:h-[500px] text-white items-center justify-between text-xs ">
        <div className="flex flex-col md:flex-row w-full h-full pl-4 pr-4 pt-6 font-semibold">
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
                NUESTROS SERVICIOS :
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
            <div className="flex w-full">
                ESTAMOS EN CONTACTO
            </div>
            <div className="flex w-full">
                LINKS DE INTERES
            </div>
        </div>
        <div className="flex flex-col w-full font-oswald text-white text-opacity-40 justify-center items-center text-xs h-auto sm:h-11 sm:flex-row border-t border-white border-opacity-20 ">
            <div>
                Diseñado por: &nbsp;&nbsp;
            </div> 
            <div>
                Diego Felix Amachi Flores  &nbsp;&nbsp; 
            </div> 
            <div className="flex justify-center items-center">
                <Phone/>953120536  &nbsp;&nbsp; 
            </div> 
            <div className="flex justify-center items-center">
                <Mail/> diego.amachiflores@gmail.com
            </div>
        </div>
       </article>
    )
}