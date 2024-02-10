import PrimaryButton from "./PrimaryButton";
import { ArrowUpRight } from 'lucide-react'


const Explore = () =>{
    return(
        <div className="grid lg:w-[89%] w-11/12 lg:grid-cols-2 lg:gap-28 gap-4 mx-auto lg:mt-32 mt-10 self-auto">
            <div>
                <h1 className="text-hero lg:font-[600] font-[700] lg:text-[48px] text-[32px] leading-tight">Transforming ordinary into extraordinary for health solution</h1>
            </div>

            <div>
                <p className="lg:text-[20px] leading-[30px] text-Grey font-[400] font-primary lg:pb-10 pb-6 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a</p>
                <PrimaryButton className="block w-full py-4 text-center lg:w-11/12" text={'Explore all classes'} img={<ArrowUpRight strokeWidth={1}/>}/>
            </div>

        </div>
    )
}
export default Explore;