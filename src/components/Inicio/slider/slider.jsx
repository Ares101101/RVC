import { image } from "./i" 
import { SliderCard } from "./slidercard"
export function Slider(){

    return(
        <article className="flex aspect-video overflow-x-auto" style={{ scrollSnapType: 'x mandatory', scrollBehavior:'smooth', boxShadow:'0 1.5rem -0.75rem hsla(0,0%,0%,0.25)' }}>
            {image.map((image, index) => <SliderCard imge={image} key={index} options=""/>
            )}
        </article>
        
    )

}