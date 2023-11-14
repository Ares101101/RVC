import g1 from '../../../assets/user-shield-svgrepo-com.svg'
import g2 from '../../../assets/balance-1-svgrepo-com.svg'
import g3 from '../../../assets/chart-mixed-svgrepo-com.svg'

export function Mejo () {
    return(
        <section className="flex flex-row h-[350px] overflow-hidden relative  text-white">
            <picture className="w-full flex justify-center items-center  grayscale brightness-40 contrast-75 ">
                <img src="https://actualidadlaboral.com/wp-content/uploads/2020/08/abogado-leyendo.jpg" alt="imagen" className="w-full h-[350px]" />
            </picture>
            <div className="sm:w-[50%] w-full absolute right-0 tex-center pl-2 pr-2 text-sm font-semibold bg-[#2b2d42] bg-opacity-80 h-full justify-around  flex flex-col">
                <div className="">
                    
                     ¿POR QUÉ SOMOS LO MEJORES?
                     
                </div >
                <div className="box-content text-white">
                    Somos los mejores porque combinamos excelencia en servicios contables y legales con un compromiso inquebrantable hacia la integridad y el éxito de nuestros clientes.
                </div  >
                    <article className="flex flex-row items-center gap-4">
                        <div className="  flex items-center justify-center border-solid border-2 border-white rounded-md w-[55px] min-w-[55px] h-[55px]">
                            <img src={g1} alt="" />
                        </div>
                        <div className="flex flex-col sm:max-w-[400px]">
                            <div>
                                SERIEDAD Y EXPERIENCIA      
                            </div>
                            
                            <span>
                                Seriedad de mis servicios y mi experiencia profesional son la mejor garantía para un servicio de calidad.
                            </span>    
                        </div>  
                        
                    </article>
                
                    <article className="flex flex-row items-center gap-4">
                        <div className="  flex items-center justify-center border-solid border-2 border-white rounded-md w-[55px] h-[55px] min-w-[55px]">
                            <img src={g2} alt="" />
                        </div>
                        <div className="flex flex-col ">
                            <div>
                                ATENCIÓN PERSONALIZADA    
                            </div>
                            
                            <span>
                                Damos énfasis a la necesidad de cada uno de nuestros clientes
                            </span>    
                        </div>  
                        
                    </article>
                
                
                <article className="flex flex-row items-center gap-4">
                        <div className="  flex items-center justify-center border-solid border-2 border-white rounded-md w-[55px] h-[55px] min-w-[55px]">
                            <img src={g3} alt="" />
                        </div>
                        <div className="flex flex-col ">
                            <div>
                                CAPACITACIÓN Y ACTUALIZACIÓN PERMANENTE   
                            </div>
                            
                            <span>
                            
                                Poseemos un alto grado de responsabilidad en nuestro trabajo.
                            </span>    
                        </div>  
                        
                </article>      
            </div>
        </section>
    )
}
                       