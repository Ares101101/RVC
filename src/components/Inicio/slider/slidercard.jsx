
import PropTypes from 'prop-types';
export function SliderCard ({imge, options}){
    return (
        <div className=''>
            <div className=''>
                <picture className='  flex max-w-5xl  min-w-mg'>
                    <img src={imge} alt={imge} className='w-screen h-auto '  />
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