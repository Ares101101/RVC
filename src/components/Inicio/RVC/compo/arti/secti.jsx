import PropTypes from 'prop-types';
import styles from './secti.module.css'

export function Sect({ ar, foo, index, actual, click}) {
    return (
      <section 
      className={index === actual ? styles.sect1 : styles.sect}
      onClick={()=>{click(actual)}}
      >
        <article>
          <div>{ar}</div>
        </article>
        <footer>{foo}</footer>
      </section>
    );
  }
Sect.propTypes = {
    ar: PropTypes.string.isRequired,
    foo: PropTypes.string.isRequired,
  };