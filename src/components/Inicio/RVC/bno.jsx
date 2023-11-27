import PropTypes from 'prop-types';
import Logo1 from './buttons//logo1'
import Logo2 from './buttons/logo2'
import Logo3 from './buttons/logo3'
import Logo4 from './buttons/logo4'
import Logo5 from './buttons/logo5'
import styles from './bno.module.css';



const logoFunction = (index) => {
  switch (index) {
    case 0:
      return <Logo1 />;
    case 1:
      return <Logo2 />;
    case 2:
      return <Logo3 />;
    case 3:
      return <Logo4 />;
    case 4:
      return <Logo5 />;
    default:
      return <Logo1 />;
  }
};



export function Bno ({name, click, index, estado}){


  

  return(
  <a 
    className={`${index == estado ? styles.clicked : styles.customlink} `} 
    onClick={() =>click(index)}
    >
    <div className={styles.logocontainer}>
      <div className={styles.iconcontainer}>
        {logoFunction(index)}
      </div>
        {name}
    </div>
    <div className={styles.arrow}>{'>'}</div>
  </a>
  )
}

Bno.propTypes = {
    name: PropTypes.string,
    svg:PropTypes.string,
    final: PropTypes.string,
    click: PropTypes.func,
    index: PropTypes.number,
    estado:PropTypes.number,
}