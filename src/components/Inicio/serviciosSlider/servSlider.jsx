import { Link } from "react-router-dom";
import { ServiciosDeRVC } from "../RVC/n";
import { Scard } from "../../servicios/serviciosCard/scard"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar,  } from 'swiper/modules';
import Service from "./service";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function ServSlider (){      

    return(
        <div className="flex flex-col w-full h-[500px] gap-4   items-start justify-center p-4">
            <div className="font-semibold text-sm text-[#00bcd4] flex items-center"> <Service/> NUESTROS SERVICIOS</div>
            <Swiper 
            modules={[Navigation, Scrollbar, ]}
            slidesPerView={1}
            spaceBetween={14}
            rewind={true}
            scrollbar={{ draggable: true }}
            pagination={{
                clickable: true,
              }}
            breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
                1280:{
                  slidesPerView: 5,
                  spaceBetween: 50,
                }
            }}
            className="h-full flex w-[100%] items-center justify-center"
            >
                {ServiciosDeRVC.map((element, index) => (
                <SwiperSlide 
                key={element.id} 
                virtualIndex={element.id}
                
                >
                    <Link 
                        to={`/SERVICIOS/${element.id}`} 
                        >   
                        <Scard 
                            cover={element.imagen} 
                            title={element.title}
                            index={index} 
                        />
                    </Link>       
                </SwiperSlide>  
                ))}       
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