import PrimaryButton from "./PrimaryButton";
import { ArrowUpRight } from 'lucide-react'
import Classes from '../Objects/Classes'
import { Link } from 'react-router-dom'

const Explore = () =>{
    return(
        <div className="lg:w-[89%] w-11/12  mx-auto lg:mt-32 mt-10 ">
            <div className="grid lg:grid-cols-2 lg:gap-28 gap-4 self-auto mb-10 lg:mb-14">
                <div>
                    <h1 className="text-hero lg:font-[600] font-[700] lg:text-[48px] text-[32px] leading-tight">Transforming ordinary into extraordinary for health solution</h1>
                </div>

                <div>
                    <p className="lg:text-[20px] leading-[30px] text-Grey font-[400] font-primary lg:pb-10 pb-6 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a</p>
                   <Link to="/classes">
                        <PrimaryButton className="block w-full py-4 text-center lg:w-11/12" text={'Explore all classes'} img={<ArrowUpRight strokeWidth={1}/>}/>
                   </Link>
                </div>
            </div>
           

            <div className="lg:grid lg:grid-cols-3 lg:grid-rows-none grid-rows-3 w-full gap-5">
                {Classes[0].All.map(ClassItem =>(
                    <div key={ClassItem.id}>
                        <div className="w-full lg:pb-0 pb-5"> 
                            <img src={ClassItem.image}/>
                            <div className="pl-1">
                                <p className="grid text-[#252525] mt-4">
                                    <span className="text-lg font-[400]">- {ClassItem.category}</span>
                                    <span className="font-[600] lg:text-[32px] text-[24px] ">{ClassItem.title}</span>
                                </p>

                                <PrimaryButton text={'Learn More'} img={<ArrowUpRight strokeWidth={1} className="w-5"/>} className="bg-transparent text-primary font-[400] text-sm"/>

                            </div>

                           
                        </div>
                    </div>

                    
                ))}
            </div>

        </div>
    )
}
export default Explore;