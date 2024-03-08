import PrimaryButton from "./PrimaryButton";
import { ArrowUpRight } from 'lucide-react'


const AboutSubscribe = () =>{
    return(
        <div className="bg-[#072217] w-full py-14 mt-10 text-white">
            <div className="lg:w-[89%] w-11/12 mx-auto">
                <h1 className="font-[600] lg:text-[40px] text-[30px] text-center">Subscribe to our newsletter</h1>
                <p className="text-[#D7D7D7E5] text-opacity-90 text-md text-center lg:w-4/12 mx-auto pt-1">Get the latest fitness and industry tip about fitness when you subscribe to our newsletter</p>

                <div className="flex justify-between lg:w-4/12 w-full lg:bg-white py-2 mx-auto rounded-tl-lg rounded-br-lg px-3 mt-7">
                     <input type="text" placeholder="Enter email address" className="outline-none hidden lg:block"/>
                     <PrimaryButton className="py-2 px-5 uppercase text-sm w-full mx-auto" text={'Subscribe Now' } img={<ArrowUpRight strokeWidth={1} className="w-5"/>}/>

               </div>
            </div>
        </div>
    )
}
export default AboutSubscribe;