import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export function NavBar( { text, textclass } ){
    return (
        <Link to={text}>
            {console.log(text)}
            <div className ="bg-opacity-50  text-lg h-14 text-center items-center flex hover:bg-cyan-50 hover:text-[#013b57c2] hover:bg-opacity-90 transition duration-300 cursor-pointer px-4 text-white font-semibold "  >      
                <p className={textclass}>{text}</p>
            </div>
        </Link>
        
    )
}


NavBar.propTypes = {
    text: PropTypes.string, 
    textclass:PropTypes.string
    // Define el tipo de la prop "text" como una cadena (string)
};