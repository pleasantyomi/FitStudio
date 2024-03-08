import frame2 from '../assets/Frame2.png'
import PrimaryButton from './PrimaryButton';
import Line from './Line'
import { ArrowUpRight } from 'lucide-react'
import frame1 from '../assets/Frame1.png'

const More = () =>{
    return(
        <div className="lg:w-[89%] w-11/12 mx-auto lg:mt-28 mt-10">
            <div className="grid lg:grid-cols-2 justify-items-end items-center lg:gap-20">
                <div className="lg:block hidden border-other border-[1px] p-3 rounded-sm">
                    <img className="object-cover" src={frame2}/>
                </div>

                <div>
                    <h1 className="lg:font-[600] font-[700] text-[30px] lg:text-[44px] leading-tight pb-3">Get more rid with low cost training programs and advanced programs</h1>
                    <p className="font-[400] text-[20px] text-[#262626CC] text-opacity-80 lg:pb-0 pb-8">Make faster loan decisions, reduce underwriting and credit assessment errors, enhance accuracy, and broaden your credit decisions.</p>
                    <Line className="hidden lg:block mb-10 mt-12"/>
                    <PrimaryButton text={'Register Now'} img={<ArrowUpRight strokeWidth={1} className="w-5"/>} className="px-5 py-3"/>
                    <img className="lg:hidden block pt-10" src={frame1}/>
                </div>

            </div>

        </div>
    )
}
export default More;