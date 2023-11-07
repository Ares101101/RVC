
import PropTypes from 'prop-types';
export function SliderCard ({imge, options}){
    return (    
        <div className=' flex-1 flex '>
            <div className=' '>
                <picture className='max-h-[21rem] flex w max-w-screen-md object-cover'>
                    <img src={imge} alt={imge} className='w-full h-auto '  />
                </picture>
            </div>
            
            <article>
                <p>
                    {options}
                </p>    
            </article>    
        </div>
    )
}
SliderCard.propTypes = {
    options: PropTypes.string.isRequired,
    imge: PropTypes.string.isRequired, // Se espera que imge sea una cadena (string) y es requerida
  };    