import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { image } from "./i.jsx";

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

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const Slider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 image, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 image.
  const imageIndex = wrap(0, image.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className=" flex flex-row items-center w-[100%]   justify-between overflow-hidden">
      <div className="bg-[#023047] text-white hover:text-[#023047] hover:bg-[#ffb703] rounded-sm w-[40px] h-[40px] flex justify-center items-center select-none cursor-pointer font-bold top-1/2  -translate-y-1/2 text-sm z-2  transform scale-1   "  
      onClick={() => paginate(-1)}
      
      >
        {"<"}
      </div>
      <AnimatePresence initial={false} custom={direction}   >
        <picture className="w-[70%] max-h-96  flex">
        <motion.img
          className="w-full h-auto "
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
        </picture>
      </AnimatePresence>
      <motion.h1
        initial={{display:'',}}
        transition={{duration:1}}
        animate={{
          y:0,
          x:-500,
          color:'#000',
          zIndex:2
        }}
        >
          hola  
        </motion.h1>
      <div className="  bg-[#023047] text-white hover:text-[#023047] hover:bg-[#ffb703] rounded-sm w-[40px] h-[40px] flex justify-center items-center select-none cursor-pointer font-bold top-1/2  -translate-y-1/2 text-sm z-2  transform scale-1  "  
      onClick={() => paginate(1)}
      
      >
        {">"}
      </div>
      
    </div>
  );
};
