import PropTypes from 'prop-types';
import { motion, } from 'framer-motion';

const editions = {
    hidden:{
        opacity: 0
    },
    visible:({ delay , duration })=>( {
        opacity: 1,
        transition: {
            delay,
            duration,
        }
    })
}

export function NavBar( { text, textclass, index } ){

    return (
            <motion.div 
            className ="bg-opacity-50  h-14 text-center items-center flex hover:bg-[#005596]  hover:bg-opacity-90 transition duration-300 cursor-pointer px-4  text-white font-semibold justify-center text-sm" 
            index ={index}
            initial='hidden'
            animate='visible'
            custom={{ delay:(index+1)*0.2, duration:1}}
            variants={editions}
            >   
                 <p className={textclass} >{text} </p>   
            </motion.div>
        
    )
}


NavBar.propTypes = {
    text: PropTypes.string, 
    textclass:PropTypes.string,
    index: PropTypes.number,
    // Define el tipo de la prop "text" como una cadena (string)
};