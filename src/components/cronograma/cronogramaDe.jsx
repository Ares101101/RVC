import { PieDePagina } from "../PiedePagina/PiedePagina";
import Table from "./table";
import { Table2 } from "./table2";

export function CronogramaDeclaraciones(){
    
    return(
        <article className="flex justify-center w-full pt-[192px]">
            <div className="flex flex-col justify-center items-center h-full w-[100%] max-w-[1280px] bg-white">
                <section className="flex flex-col w-full max-w-4xl justify-center p-4 gap-10">
                    <picture className="flex w-full  justify-center items-center ">
                        <img 
                        src="https://www.sunat.gob.pe/img/modulos/imgCalendarioPersonas.jpg" 
                        alt="cronograma" 
                        className="w-full h-auto flex"
                        />                
                    </picture>
                    <Table />
                    <Table2/>
                    <p className="text-[#0D077A] font-semibold text-center text-sm">PRÓRROGA* DE LAS DECLARACIONES Y PAGOS MENSUALES DE LOS PERÍODOS TRIBUTARIOS COMPRENDIDOS ENTRE DICIEMBRE Y ABRIL 2023
                    </p> 
                    <p className="text-[#333] font-light text-sm ">
                    Para contribuyentes con domicilio fiscal ubicado en alguno de los distritos declarados en estado de emergencia por impacto de daños a consecuencia de las intensas precipitaciones pluviales, según lo establecido por el
                    <a href="https://busquedas.elperuano.pe/download/url/decreto-supremo-que-declara-el-estado-de-emergencia-en-algun-decreto-supremo-n-007-2023-pcm-2143029-1" target="_blank" rel="noreferrer" className="text-[#337ab7] hover:text-[#0D077A] hover:border-b  hover:border-[#0D077A]"> Decreto Supremo N° 007-2023-PCM</a> publicado el 13/01/2023, que incluye algunos distritos de varias provincias de los departamentos de Amazonas, Áncash, Cusco, Huánuco, La Libertad, San Martín y Ucayali.
                    </p>
                </section>
                <PieDePagina/>
            </div>
        </article>
    )
}