import RVC from '../../assets/RVC.svg'
import { MenuButtons } from './menuButtons'

export function MenuHeader() {
    return (
        <header className=" w-full  flex justify-center fixed " >
            <div className="flex flex-col justify-between h-full w-[1280px] bg-sky-50">
                <div className="h-10 bg-[#013b57c2] text-white font-semibold max-w-[1280px] items-center flex  pl-4  ">
                    <p className="box-content">RVC servicios contables S.A.</p> 
                </div>
                <div className="pl-4">
                  <img src={RVC} alt="logo" />
                </div>
            
                <div className="relative flex  overflow-hidden h-14">
                    <picture className="absolute inset-0 z-0 justify-center flex items-center before:absolute before:inset-0 before:opacity-20 before:bg-gradient-to-r before:from-sky-50 before:to-sky-900 before:z-0 w-[1280px]">
                        <img src='https://i0.wp.com/blog.claroshop.com/wp-content/uploads/2021/06/como-elegir-pluma-fuente-caligrafia.jpg?fit=1025%2C675&ssl=1' className="h-auto w-full"/>
                    </picture>
                    <div className="pl-4 z-1 relative flex items-center pr-4">
                    <MenuButtons/>
                    </div>
                </div>
            </div>
        </header>
    )
}