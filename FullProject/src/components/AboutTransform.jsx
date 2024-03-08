import frame from '../assets/Frame.png'
import { Check } from 'lucide-react'
import Line from './Line'
import frame1 from '../assets/Frame1.png'
import PrimaryButton from './PrimaryButton'
import { ArrowUpRight } from 'lucide-react'

const AboutTransform = () =>{
    const items =[
        {title: "inspiring fitness community", id:1},
        {title: "Flexible class and schedule", id:2},
        {title: "New amenities and facilities", id:3},
    ]

    return(
        <div className="lg:w-[89%] w-11/12 mx-auto mt-10 lg:mt-28">
        <div className="grid lg:grid-cols-2  w-full items-center justify-items-end">
            <div className="grid gap-1">
                <div className="grid-1">
                   <h1 className="lg:text-[48px] text-[30px] lg:font-[600] font-[700] leading-[px]">Transform your family fitness today for better</h1>
                   <p className="font-[400] text-[20px] text-[#262626CC] text-opacity-80">Make faster loan decisions, reduce underwriting and credit assessment errors, enhance accuracy, and broaden your credit decisions.</p>
                </div>

                <Line className="lg:mt-12 mt-14 mb-10"/>

                <div className="grid lg:gap-2 gap-4">
                    {items.map((item)=>(
                        <div key={item.id}>
                            <div className="flex items-center gap-1">
                                <div className="relative bg-primary h-10 w-10 rounded-full">
                                    <Check className="absolute text-white top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2"/>
                                </div>

                                <div>
                                    <p className="font-[400] text-[24px] text-[#262626CC] text-opacity-80">{item.title}</p>
                                </div>
                            </div>  
                        </div>
                    ))}
                </div>

                <PrimaryButton className="py-3 px-4 lg:mt-5 mt-3" text={'Register Now'} img={<ArrowUpRight strokeWidth={1} className="w-5"/>} />
            </div>

            <div className="lg:border-[#F7F7F7] lg:border-[2px]  rounded-3xl w-fit lg:p-3 ">
                <img className="lg:flex hidden  justify-center w-auto h-[90vh] object-cover rounded-2xl" src={frame}/>
                <img className="lg:hidden mt-10" src={frame1}/>
            </div>

        </div>


    </div>
    )
}
export default AboutTransform;