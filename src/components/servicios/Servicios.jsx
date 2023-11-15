import { Scard } from "./serviciosCard.jsx/scard"
import { juan } from "../Inicio/RVC/n";
import { Link } from "react-router-dom";

export function Servicios (){
    return(
        <article className="flex justify-center w-full pt-[192px] ">
            <main className=" items-center gap-2  w-[1280px] bg-[#063e56] p-4 flex flex-wrap justify-center  "
            >
             {juan.map((element) => (
                <Link to={element.id} key={element.id}>
                    <Scard cover={element.imagen} title={element.title} />
                </Link>
                ))}
                
            </main>
        </article>
        
    )
}