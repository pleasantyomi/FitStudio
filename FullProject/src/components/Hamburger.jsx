import { useState } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

const Hamburger = () =>{
    const [open, isOpen] = useState(false)
    const genericHamburgerLine = `h-[2px] w-6 my-[1px] bg-black rounded-full bg-black transition ease transform duration-300`;

    return( 
        <div>
            <div className="grid gap-1 lg:hidden" onClick={()=>isOpen(!open)}>
                 <div className={`${genericHamburgerLine} ${open? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100": "opacity-50 group-hover:opacity-100" }`}/>
                 <div className={`${genericHamburgerLine} ${open ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`}/>
                 <div className={`${genericHamburgerLine} ${open? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100": "opacity-50 group-hover:opacity-100" }`}/>
            </div>
        

            <div className={open? "block" : "hidden"}>
                 <nav className="grid items-center gap-5 text-center absolute left-0 bg-white z-[9999] w-full mt-4 text-lg font-[500] pb-10 pt-5 ">
                    <Link to="/" onClick={()=>isOpen(!open)}>Home</Link>
                    <Link to="/about" onClick={()=>isOpen(!open)}>About</Link>
                    <Link to="/prices" onClick={()=>isOpen(!open)}>Pricing</Link>
                    <Link to="/classes" onClick={()=>isOpen(!open)}>Classes</Link>
                    <Link to="/testimony" onClick={()=>isOpen(!open)}>Testimonials</Link>
                    <Link to="/blogs" onClick={()=>isOpen(!open)}>Blogs</Link>
                    <PrimaryButton onClick={()=>isOpen(!open)} className="py-2 px-4 mx-auto w-6/12" text={'LOGIN'}/>
                 </nav> 
            </div>
        </div>
    )   
}
export default Hamburger;