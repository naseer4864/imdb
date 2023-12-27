import MenuItem from "./Menuitem";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
    return ( 
        <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
           <div className="flex">
            <MenuItem title="HOME" address="/" Icon={FaHome}/>
            <MenuItem title="ABOUT" address="/about" Icon={FaInfoCircle}/>
           </div>
           <div className='flex items-center space-x-5'>
         <DarkModeSwitch/>
            <Link href="/">
               <h2 className='text-2xl'><span className='font-bold bg-amber-400 py-1 px-1 rounded-lg mr-1'>IMDb</span> <span className="text-xl hidden sm:inline md:pr-5">Clone</span></h2>
            </Link>
           </div>
        </div>
     );
}
 
export default Header;