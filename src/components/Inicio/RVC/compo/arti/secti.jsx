import PropTypes from 'prop-types';
import styles from './secti.module.css'

export function Sect({ ar, foo, index, customKey }) {
    return (
      <section className={index === customKey ? styles.sect1 : styles.sect}>
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