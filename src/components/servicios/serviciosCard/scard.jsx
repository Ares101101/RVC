
import PropTypes from 'prop-types';

export function Scard ({ cover, title, }){

    

    return(
        
          <article
            className="group flex justify-center relative hover:bg-[#1e73be] shadow-lg hover:shadow-xl bg-[#00bcd4]   ransi transition-all duration-300 h-[300px] "
            >
            <div
                className="playlist-item transition-all duration-300 flex relative p-2 overflow-hidden gap-2 pb-6  w-44 flex-col"
              
            >
                <picture className="aspect-square w-full h-auto flex-none">
                <img
                    src={cover}
                    alt={`Cover of ${title} `}
                    className="object-cover w-full h-full "
                    
                />
                </picture>

                <div className="flex flex-auto flex-col items-center justify-center px-2 ">
                    <h4 className="text-white text-sm" >
                        {title}
                    </h4>
                </div>
            </div>
            </article>       
    )
}
Scard.propTypes = {
    title: PropTypes.string.isRequired,
   
    cover: PropTypes.string.isRequired,
   

};