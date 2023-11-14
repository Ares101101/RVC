import PropTypes from 'prop-types';
import Logo1 from './buttons/logo1'
import Logo2 from './buttons/logo2'
import Logo3 from './buttons/logo3'
import Logo4 from './buttons/logo4'
import Logo5 from './buttons/logo5'

const logoFunction = (index) =>{
    switch (index) {
        case 0:
          return <Logo1/>;
        case 1:
          return <Logo2/>;
        case 2:
          return <Logo3/>;
        case 3:
          return <Logo4/>;
        case 4:
          return <Logo5/>;
        default:
          return  <Logo1 />;
      }
}
export function Bno ({name  ,click , index}){
    return(
        <a className="text-white flex items-center justify-between hover:bg-[#fb8500]   cursor-pointer h-12 pl-4 pr-4 text-sm " onClick={()=>click(index)}>
            <div className='flex gap-2 items-center'>
                {logoFunction(index)}
                {name}
            </div>
           
           <div>{">"} </div> 
                 
        </a>
    )
}

Bno.propTypes = {
    name: PropTypes.string,
    svg:PropTypes.string,
    final: PropTypes.string,
    click: PropTypes.func,
    index: PropTypes.number,
}