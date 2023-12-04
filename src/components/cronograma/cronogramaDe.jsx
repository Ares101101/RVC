import { PieDePagina } from "../PiedePagina/PiedePagina";
import Table from "./table";

export function CronogramaDeclaraciones(){
    
    return(
        <article className="flex justify-center w-full pt-[192px]  ">
            <div className=" flex flex-col justify-center items-center  h-full w-[100%] max-w-[1280px] bg-white ">
                <section className="flex w-[100%] justify-center ">
                    <picture className="flex w-[70%] justify-center items-center ">
                        <img 
                        src="https://www.sunat.gob.pe/img/modulos/imgCalendarioPersonas.jpg" 
                        alt="cronograma" 
                        className="w-full h-auto flex"
                        />                
                    </picture>
                </section>
                <Table />
                <PieDePagina/>
            </div>
        </article>
    )
}