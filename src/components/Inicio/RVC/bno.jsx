import PropTypes from 'prop-types';
import Logo1 from './buttons/building-svgrepo-com';

export function Bno ({name  ,click , index}){
    return(
        <a className="text-white flex items-center justify-between hover:bg-[#fb8500] hover:text-[#023047] hover:stroke-[#023047] cursor-pointer h-12 pl-4 pr-4 text-sm " onClick={()=>click(index)}>
            <div className='flex gap-2 items-center'>
            <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <path 
        d="M3 21H21"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 21V15V7C19 5.11438 19 4.17157 18.4142 3.58579C17.8284 3 16.8856 3 15 3H12H9C7.11438 3 6.17157 3 5.58579 3.58579C5 4.17157 5 5.11438 5 7V15V21"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 8L10 8"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12L10 12"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 16L10 16"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 8L15 8"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 12L15 12"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 16L15 16"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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