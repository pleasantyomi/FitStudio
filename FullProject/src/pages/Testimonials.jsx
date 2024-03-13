import Testimony from "../components/Testimony";
import image from '../assets/Frame15.png'
import PrimaryButton from "../components/PrimaryButton";
import { ArrowUpRight } from "lucide-react";

const Testimonials = () =>{
    return(
        <div className="mt-3 mb-10">
             <div className="relative w-full lg:h-[40vh] h-[30vh] bg-gradient-to-r from-[#072217] to-[#0B363B]">
                 <div className="absolute grid left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-4/12 w-10/12 rounded-md py-3 px-3  gap-2  text-white">
                    <h1 className="lg:text-[40px] text-[30px] font-[600] text-center">Testimonials</h1>
                    <p className="text-center lg:text-md">Customer loving our work, dont believe us, believe theirs</p>
                </div>
            </div>

            <div>
                <h1 className="text-center lg:w-8/12 w-11/12 font-[600] mx-auto lg:text-[36px] text-[24px] leading-tight my-8">We help people solving their finance problems in fitness and wellbeing</h1>
                <Testimony/>
            </div>

            <div className="lg:w-[89%] w-11/12 mx-auto lg:grid grid-cols-2 lg:mt-14 mt-6 items-center pt-10">
                    <div>
                        <h1 className="font-[600] lg:text-[40px] text-[28px] leading-tight">Join us today and kickstart your fitness journey</h1>
                        <p className="text-[#262626CC] text-opacity-80 lg:text-lg text-md pt-3 lg:w-10/12">Make faster loan decisions, reduce underwriting and credit assessment errors, enhance accuracy, and broaden your credit decisions.</p>
                        <PrimaryButton className="uppercase font-[400] text-md py-2 px-5 lg:mt-8 mt-6" text={'sign up'} img={<ArrowUpRight strokeWidth={1} className="w-5"/>} />
                    </div>

                    <div>
                        <img className="lg:pt-0 pt-5" src={image}/>
                    </div>
                </div>
        </div>
    )
}
export default Testimonials;