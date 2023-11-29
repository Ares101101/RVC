import { CompoUno } from './compo/compouno';
import PropTypes from 'prop-types';


export function Arti({ index }) {
    switch (index) {
      case 0:
        return <CompoUno />;
      case 1:
        return <CompoDos />;
      case 2:
        return <CompoTres />;
      case 3:
        return <CompoCuatro />;
      case 4:
        return <CompoCinco />;
      default:
        return <CompoUno />;
    }
}




const CompoDos = () => {
    return(
        <article className="h-auto w-full flex text-xs font-semibold">
            <span className="h-auto  flex flex-col">
                <div className="text-[#094074] h-10 flex w-full items-center">
                    Misión de RVC: 
                </div>
                Facilitar el éxito empresarial brindando servicios contables y legales de calidad excepcional. Nos comprometemos a ser socios estratégicos de nuestros clientes, proporcionando soluciones integrales que impulsen su crecimiento y cumplimiento.
            </span>
            
        </article>
    )
}
const CompoTres = () => {
    return(
        <article className="h-auto w-full flex text-xs font-semibold">
            <span className="h-auto  flex flex-col">
                <div className="text-[#094074] h-10 flex w-full items-center">Visión de RVC: </div>
                Ser reconocidos como líderes en la prestación de servicios contables y legales, destacándonos por nuestra excelencia, innovación y compromiso con la satisfacción del cliente. Aspiramos a ser un referente en el sector, contribuyendo al éxito y desarrollo sostenible de las empresas que servimos.
            </span>
        </article>
    )
}
const CompoCuatro = () => {
    return(
        <article className="h-auto w-full flex text-xs font-semibold">
        <span className="h-auto  flex flex-col">
            <div className="text-[#094074] h-10 flex w-full items-center">Objetivos: </div>
            <div>
            En RVC, nos esforzamos por la excelencia y el crecimiento sostenible. Buscamos superar las expectativas en cada servicio, expandir nuestra cartera de manera constante, promover la innovación continua, invertir en el desarrollo profesional de nuestro equipo, y actuar con integridad y responsabilidad en todas nuestras interacciones.
            </div>
        </span>
        </article>
    )
}
const CompoCinco = () => {
    return(
        <article className="h-auto w-full flex text-xs font-semibold">
        <span className="h-auto  flex flex-col">
            <div className="text-[#094074] h-10 flex w-full items-center">Valores: </div>
            <div>
                En el corazón de RVC, la integridad es fundamental. Nos comprometemos plenamente con el éxito de nuestros clientes y el crecimiento sostenible, manteniendo estándares profesionales elevados. Fomentamos un entorno colaborativo y abrazamos la innovación como parte central de nuestra identidad empresarial.
            </div>
            

        </span>
        </article>
    )
}




Arti.propTypes = {
    index: PropTypes.number.isRequired,
  };
                