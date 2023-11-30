import { Link } from "react-router-dom";
import { Sunat } from "../RVC/n";
import { Sunatcard } from "./SunatCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar,Pagination  } from 'swiper/modules';
import SunatIcon from "./taxes-svgrepo-com";
import 'swiper/css';
import 'swiper/css/pagination';


export function ACSlider (){      

    return(
        <div className="flex flex-col w-full h-[350px] gap-4   items-start justify-center p-4">
            <div className="font-semibold text-sm text-[#00bcd4] flex items-center"><SunatIcon  /> SERVICIOS SUNAT DE ACCESO DIRECTO</div>
            <Swiper 
            modules={[Navigation, Scrollbar,Pagination]}
            slidesPerView={1}
            spaceBetween={14}
            pagination={{
                clickable: true,
              }}
            breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                1280:{
                  slidesPerView: 4,
                  spaceBetween: 50,
                }
            }}
            className="h-full flex w-[100%] items-center justify-center"
            >
                {Sunat.map((element) => (
                <SwiperSlide 
                key={element.id} 
                virtualIndex={element.id}
                >
                    <Link 
                        to={element.url}  target="_blank"
                        >   
                        <Sunatcard 
                            cover={element.imagen} 
                            title={element.title}
                            index={element.id} 
                        />
                    </Link>       
                </SwiperSlide>  
                ))}       
            </Swiper>                    
        </div>
           
    )
}
