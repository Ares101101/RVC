import { Scard } from "./serviciosCard.jsx/scard"


export function Servicios (){
    return(
        <article className="flex justify-center w-full pt-[196px] ">
            <main className="flex items-center gap-2 justify-around w-[1280px] bg-white p-4 flex-col   "
            >
             <Scard  id={"asda"} cover={"10"} title={"aaaaaa"} artists="juan"/>   
            </main>
        </article>
        
    )
}