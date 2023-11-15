import { Link } from "react-router-dom";
import { juan } from "../RVC/n";
import { Scard } from "../../servicios/serviciosCard.jsx/scard"

export function ServSlider (){
    return(
        <div className=" relative h-[350px]  grid justify-center items-center overflow-hidden ">
            <div className="mx-2 px-4 py-2 bg-gray-800 text-white absolute  flex z-[1] left-0 w-[40px] h-[40px] rounded-full items-center justify-center cursor-pointer font-semibold ">
                {"<"}
            </div>
            <div className="  gap-2 flex-wrap flex justify-center">
            
            {juan.map((element) => (
                <Link to={`/SERVICIOS/${element.id}`} key={element.id} className=" flex justify-center items-center pt-[40px] pb-[40px]">
                    <Scard cover={element.imagen} title={element.title} />
                </Link>
            ))}
            </div> 
            <div className="mx-2 px-4 py-2 bg-gray-800 text-white absolute  flex z-[1] right-0  w-[40px] h-[40px] rounded-full items-center justify-center cursor-pointer font-semibold ">
                {">"}
            </div>   
        </div>
        
    )
}