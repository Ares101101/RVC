
import PropTypes from 'prop-types';
import TCambio from './tc';
import PDt from './pdt';
import Sope from './Sop';
import MdPdt from './mdpdt';
import Su from './Su';
import Acdeuda from './acdeuda';

const logoFunction = (index) =>{
    switch (index) {
        case "1":
          return <PDt/>;
        case "2":
          return <TCambio/>;
        case "3":
          return <Sope/>;
        case "4":
          return <MdPdt/>;
        case "5":
          return <Su/>;
        case "6":
          return <Acdeuda/>;  
        default:
          return  <TCambio />;
      }
}
export function Sunatcard ({ title, index }){
    return(
        
          <article
            className="group flex justify-center relative hover:bg-[#fb8500] shadow-lg hover:shadow-xl bg-white  ransi transition-all duration-300 h-[200px] items-center "
            >
            <div
                className="absolute right-4 bottom-20 translate-y-4
                transition-all duration-500 opacity-0
                group-hover:translate-y-0 group-hover:opacity-100
                z-10"
            >
            </div>

            <div
                className="playlist-item transition-all duration-300 flex relative p-2 overflow-hidden gap-2 justify-center  flex-col items-center"
              
            >
                <picture className="aspect-square  h-auto flex-none">
                { logoFunction(index)}
                </picture>

                <div className="flex flex-auto flex-col px-2">
                <div className="text-[#023047] font-semibold text-sm  " >
                    
                    {title}
                </div>

            
                </div>
            </div>
            </article>       
    )
}
Sunatcard.propTypes = {
    title: PropTypes.string.isRequired,
    index: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
};