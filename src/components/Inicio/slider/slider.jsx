import { useState } from "react"
import { image } from "./i" 
import { SliderCard } from "./slidercard"
export function Slider(){
    const [imagen, setimagen] = useState({
        imag: image[0],
        id: 0   
    });
    function nextImage(){
        if(imagen.id == image.length - 1){
            
            setimagen({
                ...imagen,
                imag: image[0],
                id: 0
            })
            console.log(imagen.id)
         }
         else if(imagen.id < image.length){
            
            setimagen({
                ...imagen,
                imag: image[imagen.id+1],
                id: imagen.id + 1
            })
            console.log(imagen.id)
         }
    }
    function formerImage(){
        if(imagen.id == 0){

            setimagen({
                ...imagen,
                imag: image[image.length-1],
                id: image.length-1
            })
            console.log(imagen.id)
        }
        else if(imagen.id < image.length){
            
            setimagen({
                ...imagen,
                imag: image[imagen.id-1],
                id: imagen.id - 1
            })
            console.log(imagen.id)
         }
    }
    return(

        <article  className="flex  items-center justify-center relative" >
            <div className="cursor-pointer " onClick={formerImage} >
                <SliderCard imge={image[(imagen.id - 1) >= 0 ? (imagen.id - 1) : image.length - 1]} key={image.id} options="" />   
            </div>
           <div>
                 <SliderCard imge={imagen.imag} key={imagen.id} options=""/>
           </div>
           <div className="cursor-pointer " onClick={nextImage}>
                <SliderCard imge={image[(imagen.id ) >= (image.length-1) ? (0) : imagen.id + 1]} key={image.id+1} options="" />   
           </div>
            
        </article>
        
    )

}