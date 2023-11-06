import PropTypes from 'prop-types';


export function NavBar( { text, textclass } ){

    return (
        
            
            <div className ="bg-opacity-50  text-lg h-14 text-center items-center flex hover:bg-[#ffb703] hover:text-[#023047] hover:bg-opacity-90 transition duration-300 cursor-pointer px-4 text-white font-semibold justify-center"  >      
                <p className={textclass}>{text}</p>
            </div>
        
    )
}


NavBar.propTypes = {
    text: PropTypes.string, 
    textclass:PropTypes.string
    // Define el tipo de la prop "text" como una cadena (string)
};