export default function Inicio (){
    return(
        <article className="flex justify-center w-full pt-[196px] ">
            <main className="flex items-center gap-2 justify-around w-[1280px] bg-sky-50 p-4 flex-col   "
            >
                <div >
                    <picture  className="w-auto  flex  ">
                        <img src="https://www.certus.edu.pe/blog/wp-content/uploads/2019/01/Contabilidad-empezar-tu-carrera-CERTUS-1200x720.jpg" alt="imagen de contabilidad" className="w-full h-auto"/>
                    </picture>
                    <span className="box-content w-max-[1280px] text-[#013b57c2]  font-semibold p ">
                        RVC es una empresa contable comprometida con brindar servicios de alta calidad en el ámbito de la contabilidad y asesoría financiera. Nuestro enfoque principal es proporcionar soluciones personalizadas y especializadas a empresas de diferentes sectores y tamaños.
                    </span>
                </div>
            </main>
        </article>
        
    )
}