import g1 from '../../../assets/user-shield-svgrepo-com.svg'
import g2 from '../../../assets/balance-1-svgrepo-com.svg'
import g3 from '../../../assets/chart-mixed-svgrepo-com.svg'

export function Mejo () {
    return(
        <section className='flex min-h-[440px] overflow-hidden'>
            <section className=' relative h-auto'>
                    <picture className="sm:w-[1280px] w-[1400px] h-auto flex justify-center items-center absolute grayscale brightness-40 contrast-75  ">
                        <img src="https://actualidadlaboral.com/wp-content/uploads/2020/08/abogado-leyendo.jpg" alt="imagen" className="w-full h-auto" />
                    </picture>
            </section>
            <section className="flex text-white w-full h-auto justify-end " >
                <article className="sm:w-[50%] p-10 text-sm font-semibold bg-[#03256c] opacity-70 justify-initial flex flex-col gap-10">
                    <div className="text-white text-xs gap-4 flex flex-col">
                        <div className="flex h-auto  text-lg ">
                            ¿POR QUÉ SOMOS LO MEJORES?
                        </div >
                        porque combinamos excelencia en servicios contables y legales con un compromiso inquebrantable hacia la integridad y el éxito de nuestros clientes.   
                    </div>
                    <article className="flex flex-row items-center gap-4">
                        <div className="  flex items-center justify-center border-solid border border-white  w-[55px] min-w-[55px] h-[55px]">
                            <img src={g1} alt="" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <div>
                                SERIEDAD Y EXPERIENCIA      
                            </div>
                            
                            <span className='text-xs'>
                            Seriedad y experiencia, garantía segura para servicios de calidad excepcional.
                            </span>    
                        </div>  
                    </article>
                    <article className="flex flex-row items-center gap-4">
                        <div className="  flex items-center justify-center border-solid border border-white  w-[55px] h-[55px] min-w-[55px]">
                            <img src={g2} alt="" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <div>
                                ATENCIÓN PERSONALIZADA    
                            </div>
                            
                            <span className='text-xs'>
                                Damos énfasis a la necesidad de cada uno de nuestros clientes
                            </span>    
                        </div>  
                    </article>
                    <article className="flex flex-row items-center gap-4">
                            <div className="  flex items-center justify-center border-solid border border-white  w-[55px] h-[55px] min-w-[55px]">
                                <img src={g3} alt="" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <div>
                                    CAPACITACIÓN Y ACTUALIZACIÓN PERMANENTE   
                                </div>
                                
                                <span className='text-xs'>
                                
                                    Poseemos un alto grado de responsabilidad en nuestro trabajo.
                                </span>    
                            </div>      
                    </article>  
                </article>
            </section>    
        </section>
        
    )
}
                       