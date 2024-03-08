import Prices from '../Objects/Prices'
import logo from '../assets/favicon.png'
import Line from './Line'
import PrimaryButton from './PrimaryButton'
import {  ArrowUpRight  } from 'lucide-react'

const YearlyPrices = () =>{
    return(
        <div>
             <div className="lg:w-[89%] w-11/12 mx-auto grid lg:grid-cols-3 lg:gap-5 ">
                {Prices[0].Yearly.map((PriceList) =>(
                    <div key={PriceList.id}>
                        <div className="bg-white border-[1px] border-[#DBDBDB] w-full pt-10 pb-12 rounded-lg lg:mb-0 mb-5">
                            <div className="w-10/12 mx-auto">
                                <div className="flex items-center gap-4">
                                   <div className="bg-hero w-14 h-14 rounded-full bg-Hero relative flex-shrink-0 flex-nowrap">
                                       <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-auto" src={logo}/>
                                   </div>
                                   <div>
                                        <h1 className="grid">
                                            <span className="font-[600] text-[20px]">{PriceList.title}</span>
                                            <span className="text-sm  text-[#494949]">{PriceList.subtitle}</span>
                                       </h1>
                                   </div>
                                </div>

                                <Line/>

                                <div>
                                    <p className="grid pb-10">
                                        <span className="font-[700] text-[30px]">{PriceList.price}</span>
                                        <span className="pl-2 text-[#262626CC]">/per Year</span>
                                    </p>

                                    <PrimaryButton text={'Enroll Now'} img={<ArrowUpRight strokeWidth={1} className="w-5"/>} className="lg:w-11/12 w-full py-3 bg-transparent border-primary border-[1px]"/> 
                                </div>
                            </div>
                            

                        </div>

                    </div>
                ))}

            </div>

        </div>
    )
}
export default YearlyPrices;