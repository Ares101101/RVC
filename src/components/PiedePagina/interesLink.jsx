import Sope from "../Inicio/ACslider/Sop";
import Su from "../Inicio/ACslider/Su";
import Acdeuda from "../Inicio/ACslider/acdeuda";
import MdPdt from "../Inicio/ACslider/mdpdt";
import PDt from "../Inicio/ACslider/pdt";
import TCambio from "../Inicio/ACslider/tc";
import styles from './interesLink.module.css'
import PropTypes from 'prop-types';

const logoFunction = (index) =>{
    switch (index) {
        case 1:
          return <Su/>;
        case 2:
          return <TCambio/>;
        case 3:
          return <Sope/>;
        case 4:
          return <MdPdt/>;
        case 5:
          return <PDt/>;
        case 6:
          return <Acdeuda/>;  
        default:
          return  <TCambio />;
      }
}
export function InteresLinck ({ title, index }){

    return(
        <section className={styles.linck}>
            <article >
                { logoFunction(index + 1)}
            </article>
            <article>
                {title}
            </article>
        </section>
        
        
    )

}

InteresLinck.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}