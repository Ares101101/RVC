import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

export function Scard ({ id, cover, title, artists, }){
    return(
        <Link to={id}>
          <article
            className="group relative hover:bg-[#023047] shadow-lg hover:shadow-xl bg-zinc-500/30 rounded-md ransi transition-all duration-300"
            >
            <div
                className="absolute right-4 bottom-20 translate-y-4
                transition-all duration-500 opacity-0
                group-hover:translate-y-0 group-hover:opacity-100
                z-10"
            >
            </div>

            <a
                className="playlist-item transition-all duration-300 flex relative p-2 overflow-hidden gap-2 pb-6 rounded-md w-44 flex-col"
              
            >
                <picture className="aspect-square w-full h-auto flex-none">
                <img
                    src={cover}
                    alt={`Cover of ${title} by ${artists}`}
                    className="object-cover w-full h-full rounded-md"
                    
                />
                </picture>

                <div className="flex flex-auto flex-col px-2">
                <h4 className="text-white text-sm" >
                    {title}
                </h4>

            
                </div>
            </a>
            </article>
        </Link>
            
        
    )
}
Scard.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    cover: PropTypes.bool.isRequired,
    artists : PropTypes.string.isRequired,
    color: PropTypes.string.isRequired  
};