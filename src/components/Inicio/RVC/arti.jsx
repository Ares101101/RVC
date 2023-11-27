
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
const CompoUno = () => {
    return(
            <article className="font-semibold sm:w-[68%] w-full flex-col flex   md:flex-row justify-around  items-center  text-sm gap-4">
                <span className="md:w-[50%] w-[100%]">
                    <strong className="text-[#ffb703]">Ámbito de Actividad: </strong>
                    RVC es una empresa integral que se dedica tanto a servicios contables como a la abogacía. Nuestro enfoque es brindar soluciones completas a las necesidades legales y financieras de nuestros clientes.
                </span>
                <picture className="flex md:w-[50%] w-[100%] rounded-xl overflow-hidden max-h-[215px]">
                    <img src="https://idafservicioslegales.com/wp-content/uploads/2020/03/derechotri.jpg" alt="justicia y contabilidad" className="w-full h-auto"/>
                </picture>
            </article>
    )
}
const CompoDos = () => {
    return(
        <article className="font-semibold flex-col flex sm:w-[68%] w-full  md:flex-row justify-around  items-center  text-sm gap-4">
            <span className="md:w-[50%] w-[100%]">
                <strong className="text-[#ffb703]">Misión de RVC: </strong>
                Facilitar el éxito empresarial brindando servicios contables y legales de calidad excepcional. Nos comprometemos a ser socios estratégicos de nuestros clientes, proporcionando soluciones integrales que impulsen su crecimiento y cumplimiento.
            </span>
            <picture className="flex md:w-[50%] w-[100%] rounded-xl overflow-hidden max-h-[215px]">
                <img src="https://jezzmedia.com/wp-content/uploads/2022/10/mision-vision-y-valores-6.jpg" alt="justicia y contabilidad" className="w-full h-auto"/>
            </picture>
        </article>
    )
}
const CompoTres = () => {
    return(
        <article className="font-semibold flex-col flex sm:w-[68%] w-full md:flex-row justify-around  items-center  text-sm gap-4">
            <span className="md:w-[50%] w-[100%]">
                <strong className="text-[#ffb703]">Visión de RVC: </strong>
                Ser reconocidos como líderes en la prestación de servicios contables y legales, destacándonos por nuestra excelencia, innovación y compromiso con la satisfacción del cliente. Aspiramos a ser un referente en el sector, contribuyendo al éxito y desarrollo sostenible de las empresas que servimos.
            </span>
            <picture className="flex md:w-[50%] w-[100%] rounded-xl overflow-hidden max-h-[215px]">
                <img src="https://concepto.de/wp-content/uploads/2016/03/vision-de-una-empresa-e1547822994306.jpg" alt="justicia y contabilidad" className="w-full h-auto"/>
            </picture>
        </article>
    )
}
const CompoCuatro = () => {
    return(
        <article className="font-semibold flex-col flex sm:w-[68%] w-full md:flex-row justify-between  items-center  text-sm gap-4">
        <span className="md:w-[50%] w-[100%]">
            <strong className="text-[#ffb703]">Objetivos: </strong>
            <div>
            En RVC, nos esforzamos por la excelencia y el crecimiento sostenible. Buscamos superar las expectativas en cada servicio, expandir nuestra cartera de manera constante, promover la innovación continua, invertir en el desarrollo profesional de nuestro equipo, y actuar con integridad y responsabilidad en todas nuestras interacciones.
            </div>
        </span>
        <picture className="flex md:w-[50%] w-[100%] rounded-xl overflow-hidden max-h-[215px]">
            <img src="https://mentee.es/wp-content/uploads/2022/01/objetivos-especificos.png" alt="justicia y contabilidad" className="w-full h-auto"/>
        </picture>
        </article>
    )
}
const CompoCinco = () => {
    return(
        <article className="font-semibold flex-col flex sm:w-[68%] w-full md:flex-row justify-between items-center  text-sm gap-4">
        <span className="md:w-[50%] w-[100%]">
            <strong className="text-[#ffb703]">Valores: </strong>
            <div>
                En el corazón de RVC, la integridad es fundamental. Nos comprometemos plenamente con el éxito de nuestros clientes y el crecimiento sostenible, manteniendo estándares profesionales elevados. Fomentamos un entorno colaborativo y abrazamos la innovación como parte central de nuestra identidad empresarial.
            </div>
            

        </span>
        <picture className="flex md:w-[50%] w-[100%] rounded-xl overflow-hidden max-h-[215px]">
            <img src="https://losvalores.org/wp-content/uploads/2019/03/Qu%C3%A9-es-la-justicia.jpg" alt="justicia y contabilidad" className="w-full h-auto"/>
        </picture>
        </article>
    )
}




Arti.propTypes = {
    index: PropTypes.number.isRequired,
  };
                