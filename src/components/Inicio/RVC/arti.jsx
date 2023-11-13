import { useState, useEffect} from "react"
import PropTypes from 'prop-types';

export function     Arti ({index}){
    const [indiceActual, setIndiceActual] = useState(index);
    useEffect(() => {
        setIndiceActual(index);
      }, [index, indiceActual]);

  
    switch (indiceActual) {
      case 0:
        return <CompoUno />;
      case 1:
        return <CompoDos/>;
      case 2:
        return <CompoTres/>;
      case 3:
        return <CompoCuatro/>;
      case 4:
        return <CompoCinco/>;
      default:
        return  <CompoUno />;
    }
}
const CompoUno = () => {
    return(
            <article className="font-semibold flex-col flex   md:flex-row justify-around  items-center pl-4 pr-4 text-sm gap-2">
                <span className="max-w-[500px]">
                    <strong className="text-[#ffb703]">Ámbito de Actividad: </strong>
                    RVC es una empresa integral que se dedica tanto a servicios contables como a la abogacía. Nuestro enfoque es brindar soluciones completas a las necesidades legales y financieras de nuestros clientes.
                </span>
                <picture className="flex max-w-lg rounded-xl overflow-hidden max-h-[215px]">
                    <img src="https://idafservicioslegales.com/wp-content/uploads/2020/03/derechotri.jpg" alt="justicia y contabilidad" className="w-full h-auto"/>
                </picture>
            </article>
    )
}
const CompoDos = () => {
    return(
        <article className="font-semibold flex-col flex   md:flex-row justify-around  items-center pl-4 pr-4 text-sm gap-2">
        <span className="max-w-[500px]">
            <strong className="text-[#ffb703]">Misión de RVC: </strong>
            Facilitar el éxito empresarial brindando servicios contables y legales de calidad excepcional. Nos comprometemos a ser socios estratégicos de nuestros clientes, proporcionando soluciones integrales que impulsen su crecimiento y cumplimiento.
        </span>
        <picture className="flex max-w-lg rounded-xl overflow-hidden max-h-[215px]">
            <img src="https://jezzmedia.com/wp-content/uploads/2022/10/mision-vision-y-valores-6.jpg" alt="justicia y contabilidad" className="w-full h-auto"/>
        </picture>
        </article>
    )
}
const CompoTres = () => {
    return(
        <article className="font-semibold flex-col flex   md:flex-row justify-around  items-center pl-4 pr-4 text-sm gap-2">
        <span className="max-w-[500px]">
            <strong className="text-[#ffb703]">Visión de RVC: </strong>
            Ser reconocidos como líderes en la prestación de servicios contables y legales, destacándonos por nuestra excelencia, innovación y compromiso con la satisfacción del cliente. Aspiramos a ser un referente en el sector, contribuyendo al éxito y desarrollo sostenible de las empresas que servimos.
        </span>
        <picture className="flex max-w-lg rounded-xl overflow-hidden max-h-[215px]">
            <img src="https://concepto.de/wp-content/uploads/2016/03/vision-de-una-empresa-e1547822994306.jpg" alt="justicia y contabilidad" className="w-full h-auto"/>
        </picture>
        </article>
    )
}
const CompoCuatro = () => {
    return(
        <article className="font-semibold flex-col flex   md:flex-row justify-between  items-center pl-4 pr-4 text-sm gap-2">
        <span className="sm:w-[447px] w-[100%] flex flex-col items-center">
            <strong className="text-[#ffb703]">Objetivos: </strong>
            <div>
                <li>Excelencia en el Servicio.</li>
                <li>Crecimiento Sostenible.</li>
                <li>Innovación Continua.</li>
                <li>Desarrollo Profesional.</li>
                <li>Ética y Responsabilidad.</li>
            </div>
        </span>
        <picture className="flex max-w-lg rounded-xl overflow-hidden max-h-[215px]">
            <img src="https://mentee.es/wp-content/uploads/2022/01/objetivos-especificos.png" alt="justicia y contabilidad" className="w-full h-auto"/>
        </picture>
        </article>
    )
}
const CompoCinco = () => {
    return(
        <article className="font-semibold flex-col flex   md:flex-row justify-between items-center pl-4 pr-4 text-sm gap-2">
        <span className=" sm:w-[447px] w-[100%] flex flex-col items-center">
            <strong className="text-[#ffb703]">Valores: </strong>
            <div>
                <li>Integridad.</li>
                <li>Compromiso.</li>
                <li>Profesionalismo.</li>
                <li>Colaboración.</li>
                <li>Innovación.</li>
            </div>
            

        </span>
        <picture className="flex max-w-lg rounded-xl overflow-hidden max-h-[215px]">
            <img src="https://losvalores.org/wp-content/uploads/2019/03/Qu%C3%A9-es-la-justicia.jpg" alt="justicia y contabilidad" className="w-full h-auto"/>
        </picture>
        </article>
    )
}




Arti.propTypes = {
    index: PropTypes.number.isRequired,
  };
                