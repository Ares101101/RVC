import { PieDePagina } from "../PiedePagina/PiedePagina";

export function EstudioCont (){
        return(
            <article className="flex justify-center w-full pt-[192px] ">
                <div className=" flex flex-col justify-stard h-full w-[100%] max-w-[1280px] bg-white items-center">
                    <article className="p-4">
                    <section className="p-4 gap-4 flex flex-col w-[100%] max-w-[800px] border border-[#094074] font-normal ">
                        <div className="text-center font-extrabold text-xl text-[#094074]">
                            RVC SERVICIOS CONTABLES SA
                        </div>
                        <article className="text-sm min-h-[100px]  flex">
                            Se define como un socio estratégico fundamental para empresas al fusionar servicios especializados en contabilidad y abogacía. La esencia de RVC radica en su compromiso inquebrantable con la excelencia, la innovación y la transparencia. Como facilitadores del éxito empresarial, RVC ofrece soluciones contables y legales a medida, asegurando que cada cliente reciba un respaldo experto en la gestión de sus registros financieros y en la navegación de complejidades legales. La visión de RVC va más allá de la simple prestación de servicios; 
                              
                        </article>
                        <div className="text-sm ">
                            Busca ser un referente líder.Contribuyendo al crecimiento sostenible de las empresas mediante un enfoque personalizado y valores arraigados en la integridad y el compromiso.   
                        </div> 
                        <div className="text-center text-sm font-extrabold">
                            Hidelmo Chuquipura Ccahuata
                            <div className="text-center text-sm font-normal ">
                                Contador General
                            </div> 
                        </div> 
                    </section>   
                    </article>
                    <PieDePagina/>
                </div>
            </article>
        )
}