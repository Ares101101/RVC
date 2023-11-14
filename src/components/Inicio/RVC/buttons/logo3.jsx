import styles from './s.module.css'

const Logo3 = () => {
  return (
    <svg 
    width="24px" 
    height="24px" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={styles.svgComponent}
    >
      <path d="M15 3C16.8856 3 17.8284 3 18.4142 3.58579C19 4.17157 19 5.11438 19 7L19 17C19 18.8856 19 19.8284 18.4142 20.4142C18.4142 20.4142 18.4142 20.4142 18.4142 20.4142C17.8284 21 16.8856 21 15 21V21L9 21V21C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17L5 7C5 5.11438 5 4.17157 5.58579 3.58579C5.58579 3.58579 5.58579 3.58579 5.58579 3.58579C6.17157 3 7.11438 3 9 3V3L15 3V3Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M9 3V6C9 7.10457 9.89543 8 11 8H13C14.1046 8 15 7.10457 15 6V3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 15L10.5 16.5V16.5C10.7761 16.7761 11.2239 16.7761 11.5 16.5V16.5L15 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default Logo3;