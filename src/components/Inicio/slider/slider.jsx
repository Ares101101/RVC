import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { image } from "./i.jsx";
import PropTypes from 'prop-types';

const editions = {
  hidden:{
      opacity: 0
  },
  visible:({ delay , duration, })=>( {
      opacity: 1,
      transition: {
          delay,
          duration,
      }
  })
}

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};


const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};



export const Slider = ( {indexFunc}) => {



  const [[page, direction], setPage] = useState([0, 0]);

 
  const imageIndex = wrap(0, image.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };


  const sliderRef = useRef(imageIndex);


  useEffect(() => {
    if (typeof indexFunc === "function") {
      indexFunc(imageIndex);
    }
  }, [indexFunc, imageIndex]);


  return (
    <motion.div 
      className=" flex  items-center w-[100%]  relative justify-center overflow-hidden"
      index ={page}
      initial='hidden'
      animate='visible'
      custom={{ delay:(page+1)*0.2, duration:1}}
      variants={editions}
      ref={sliderRef}
    >
      <div className="bg-[#00bcd4] text-white hover:text-white hover:bg-[#1e73be]  w-[40px] h-[40px] flex justify-center items-center select-none cursor-pointer font-bold top-1/2  -translate-y-1/2 text-sm z-10  transform scale-1 absolute left-0  "  
      onClick={() => paginate(-1)}
      
      >
        {"<"}
      </div>
      <AnimatePresence initial={false} custom={direction}   >
        <picture className="w-full   items-center  flex  justify-center">
        <motion.img
          className="w-full h-auto filter contrast-125 "
          key={page}
          src={image[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
        {console.log(imageIndex)}
        </picture>
      </AnimatePresence>
     
      <div className="  bg-[#00bcd4] text-white hover:text-white hover:bg-[#1e73be]  w-[40px] h-[40px] flex justify-center items-center select-none cursor-pointer font-bold top-1/2  -translate-y-1/2 text-sm z-10  transform scale-1 absolute right-0 "  
      onClick={() => paginate(1)}
      
      >
        {">"}
      </div>
      
    </motion.div>
  );
};
Slider.propTypes = {
  indexFunc: PropTypes.func.isRequired,
};