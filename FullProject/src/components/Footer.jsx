import logo from '../assets/logo-white.svg'
import PrimaryButton from './PrimaryButton';
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react';

const Footer = () =>{
    const [footerIcons] = useState([
        {title: 'linkedin', id:1},
        {title: 'facebook', id:2},
        {title: 'instagram', id:3},
        {title: 'twitter', id:4},
    ])
    return(
        <div className="py-10 mt-10 text-white bg-black lg:py-20 ">
            <div className="lg:w-[89%] w-11/12 mx-auto">
                <div className="grid items-center justify-between gap-2 pb-8 lg:flex lg:gap-0 lg:pb-14">
                    <div>
                        <h1 className="font-hero font-[700] lg:text-[2.5rem] text-[30px]">Feel free to contact us</h1>
                    </div>

                    <div>
                        <PrimaryButton text={'Contact us'} img={<ArrowUpRight strokeWidth={1} className="w-5"/>} className="px-5 py-3"/>
                    </div>
                </div>

                <div className="grid w-full lg:items-center lg:grid-cols-3">
                    <div className="grid pb-3 lg:gap-2 lg:pb-0">
                        <img className="w-auto h-10 lg:h-14" src={logo}/>
                        <p className="lg:text-[16px] text-[12px]">Your Fitness Matters</p>
                    </div>

                    <div>
                        <nav>
                            <ul className="lg:flex grid items-center lg:gap-10 gap-1 list-disc lg:text-[20px] lg:pl-0 pl-5">
                                <li className="flex-shrink-0 flex-nowrap">About us</li>
                                <li  className="flex-shrink-0 flex-nowrap">Contact us</li>
                                <li>Pricing</li>
                                <li>Testimonials</li>
                                <li>Blogs</li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="w-full h-[1px] bg-footer bg-opacity-50 mt-10"></div>

                <div className="flex items-center justify-center gap-3 mt-4 lg:mt-8 lg:gap-5">
                    {
                        footerIcons.map((icons) =>(
                            <div key={icons.id}>
                                <div className="w-6 h-6 rounded-md bg-icons">
                                        
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Footer;