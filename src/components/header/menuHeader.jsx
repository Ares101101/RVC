import RVC from '../../assets/RVC.svg'
import { MenuButtons } from './menuButtons'
import { motion } from 'framer-motion'

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

export function MenuHeader() {
    return (
        <motion.header 
        className=" w-full  flex justify-center fixed z-[11] inset-auto " 
        initial='hidden'
        animate='visible'
        custom={{ delay: 0.1, duration:1}}
        variants={editions}
        >
            <div 
            className="flex flex-col justify-between h-full w-[1280px] bg-white"
            
            >
                <div 
                className="h-9 bg-[#023047] text-white font-semibold max-w-[1280px] items-center text-sm flex  pl-4  "
                >
                    <p className="box-content">RVC servicios contables S.A.</p> 
                </div>
                <div 
                className="pl-4"
                
                >
                  <img src={RVC} alt="logo" />
                </div>
            
                <div 
                className="relative flex  overflow-hidden h-14"
                
                >
                    <picture className="bg-[#023047] absolute inset-0 z-1 justify-center flex items-center before:absolute before:inset-0 before:opacity-20 before:bg-gradient-to-l before:from-white before:to-[#023047] before:z-0 w-[1280px]">
                    </picture>
                    <div className="pl-4 z-1 relative flex items-center pr-4">
                    <MenuButtons/>
                    </div>
                </div>
            </div>
        </motion.header>
    )
}