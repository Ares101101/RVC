import { Link } from "react-router-dom";
import { juan } from "../RVC/n";
import { Scard } from "../../servicios/serviciosCard.jsx/scard"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Navigation, EffectCoverflow} from 'swiper/modules'

export function ServSlider (){      

    return(
        <div className="flex w-full  items-center justify-initial  ">
            <Swiper 
                centeredSlides={true}
                grabCursor={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="flex"
                modules={[EffectCoverflow, Navigation,Pagination]}
                
            >
                <div className="flex gap-3 ">
                {juan.map((element) => (
                <SwiperSlide key={element.id}>
                    <Link 
                        to={`/SERVICIOS/${element.id}`} 
                        >
                        <Scard 
                            cover={element.imagen} 
                            title={element.title} 
                        />
                    </Link>       
                </SwiperSlide>  
                ))}       
                </div>
            </Swiper>  
        </div>
        
    )
}








// <div className=" bg-gray-800 text-white absolute  flex z-[1] left-0 w-[40px] h-[40px] rounded-full items-center justify-center cursor-pointer font-semibold hover:bg-[#ffb703] hover:text-[#023047]  ">
// {"<"}
// </div>      
//  <div className="bg-gray-800 text-white absolute  flex z-[1] right-0  w-[40px] h-[40px] rounded-full items-center justify-center cursor-pointer font-semibold hover:bg-[#ffb703] hover:text-[#023047] ">
//  {">"}
// </div> 