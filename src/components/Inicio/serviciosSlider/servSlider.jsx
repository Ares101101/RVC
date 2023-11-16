import { Link } from "react-router-dom";
import { juan } from "../RVC/n";
import { Scard } from "../../servicios/serviciosCard.jsx/scard"



export function ServSlider (){
    return(
        <div className=" relative w-full flex items-center overflow-hidden ">
            <div className=" bg-gray-800 text-white absolute  flex z-[1] left-0 w-[40px] h-[40px] rounded-full items-center justify-center cursor-pointer font-semibold hover:bg-[#ffb703] hover:text-[#023047]  ">
                {"<"}
            </div>
            <div className="gap-2 flex items-center justify-center h-full flex-wrap">
            
            {juan.map((element) => (
                <Link 
                to={`/SERVICIOS/${element.id}`} 
                key={element.id} 
                className="flex justify-center items-center "
                >
                    <Scard 
                    cover={element.imagen} 
                    title={element.title} 
                    />
                </Link>
            ))}
            </div> 
            <div className="bg-gray-800 text-white absolute  flex z-[1] right-0  w-[40px] h-[40px] rounded-full items-center justify-center cursor-pointer font-semibold hover:bg-[#ffb703] hover:text-[#023047] ">
                {">"}
            </div>   
        </div>
        
    )
}