import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react'
import PrimaryButton from './PrimaryButton';
import Hamburger from './Hamburger';

const Header = () =>{
    return(
        <div className="w-11/12 mx-auto mt-3 text-sm font-normal font-primary text-Grey">
            <div className="flex items-center justify-between gap-20">
                <div className="flex items-center w-full gap-20">
                    <div className="flex-shrink-0 flex-nowrap">
                       <img className="w-auto h-10 lg:h-14"  src={logo} alt="logo"/>
                    </div>
                    
                    <div className="relative hidden w-full lg:block">
                        <nav className="flex items-center gap-5 ">
                           <Link className="flex items-center" to="/">About us <ChevronDown strokeWidth={1} /></Link>
                           <Link to="/">Pricing</Link>
                           <Link to="/">Classes</Link>
                           <Link to="/">Testimonials</Link>
                           <Link to="/">Blogs</Link>
                        </nav>

                        <div className="absolute h-[1px] w-full bg-other mt-3"></div>
                    </div>
                </div>

                <div className="hidden lg:block">
                    <PrimaryButton text={'LOGIN'}/>
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