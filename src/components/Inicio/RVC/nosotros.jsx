import { useState } from "react"
import { Bno } from "./bno"
import { nbuttons } from "./n";

import { Arti }from "./arti"

export function Nosotros(){

    const [indexLogo, setLogo] = useState(0);

    const indexFunc = (index) => {
        setLogo(index);
    };


    return (

        <section className="flex sm:max-w-[1280px] w-[100%] flex-col sm:flex-row gap-2">
                <article className="flex flex-col bg-[#219ebc] font-semibold sm:w-[350px] w-[100%] h-[350px] justify-around " >
                    {nbuttons.map((button, index) => (
                    <Bno 
                    name={button} 
                   
                    key={index}
                    index={index} 
                    click={indexFunc}    
                    />
                    ))
                    }
                    {console.log(indexLogo)}
                </article>
                <Arti index={indexLogo}/>
        </section>

            
        )
}



<div className=" text-[#023047]    gap-9">
                

                <article className="font-semibold sm:flex justify-around  items-center">
                <picture className="flex max-w-lg ">
                        <img src="https://www.ambitojuridico.com/sites/default/files/styles/imagen_800x400/public/node/deflt/field_image/1970-01/contador-impuestos-cuentas-1509241930.jpg.webp?itok=oa7N0FVK" className="rounded-lg"/>
                    </picture>
                <span className="w-[500px]">
                        <strong className="text-[#ffb703]"> Servicios Contables: </strong>
                        En el ámbito contable, RVC se especializa en proporcionar servicios que van desde la contabilidad básica hasta la consultoría financiera avanzada. Nuestro equipo de profesionales contables está comprometido con la precisión y la transparencia en el manejo de los registros financieros, asegurando el cumplimiento normativo y ofreciendo asesoramiento estratégico para optimizar la situación financiera de nuestros clientes.
                    
                    </span>
                    
                </article>
                
                <article>
                Bufete de Abogados:
                En el ámbito legal, RVC cuenta con un bufete de abogados altamente calificados y especializados en diversas áreas del derecho. Ofrecemos asesoramiento jurídico integral para empresas y particulares, abordando cuestiones como el derecho corporativo, laboral, civil, penal, entre otros. Nos esforzamos por comprender las necesidades legales específicas de cada cliente y proporcionar soluciones efectivas y éticas.

                Enfoque Personalizado:
                En RVC, creemos en un enfoque personalizado para cada cliente. Nuestro objetivo es establecer relaciones sólidas y duraderas, comprendiendo a fondo las metas y desafíos individuales de cada cliente para ofrecer soluciones adaptadas a sus necesidades específicas.

                Compromiso con la Excelencia:
                La excelencia en el servicio es fundamental para nosotros. Ya sea en cuestiones contables o legales, nos esforzamos por mantener los más altos estándares de calidad, ética y profesionalismo en cada aspecto de nuestro trabajo.

                Contacto:
                Estamos disponibles para responder a cualquier pregunta, inquietud o para discutir cómo podemos satisfacer las necesidades específicas de tu empresa. No dudes en ponerte en contacto con nosotros para programar una consulta y explorar cómo RVC puede ser un socio confiable en el éxito de tu negocio.

                ¡Gracias por considerar a RVC para tus necesidades contables y legales!
                </article>
                
            </div>