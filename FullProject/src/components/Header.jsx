import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react'
import PrimaryButton from './PrimaryButton';
import Hamburger from './Hamburger';
import Line from './Line'

const Header = () =>{
    return(
        <div className="w-11/12 mx-auto mt-3 text-sm font-normal font-primary text-Grey">
            <div className="flex items-center justify-between gap-20">
                <div className="flex items-center w-full gap-20">
                    <Link to="/" className="flex-shrink-0 flex-nowrap">
                       <img className="w-auto h-10 lg:h-14"  src={logo} alt="logo"/>
                    </Link>
                    
                    <div className="relative hidden w-full lg:block">
                        <nav className="flex items-center gap-5 ">
                           <Link to="/about" className="flex items-center" >About us{/* {<ChevronDown strokeWidth={1}}/>*/}  </Link>
                           <Link to="/prices">Pricing</Link>
                           <Link to="/classes">Classes</Link>
                           <Link to="/testimony">Testimonials</Link>
                           <Link to="/blogs">Blogs</Link>
                        </nav>

                        <Line className="absolute"/>

                    </div>
                </div>

                <div className="hidden lg:block">
                    <PrimaryButton className="py-2 px-4" text={'LOGIN'}/>
                </div>

                <div className="lg:hidden">
                    <Hamburger />
                </div>
            </div>
            <div className="lg:hidden block h-[1px] w-full bg-other mt-3"></div>
        </div>
    )
}
export default Header;