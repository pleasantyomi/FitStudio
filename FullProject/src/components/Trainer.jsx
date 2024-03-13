import Trainers from "../Objects/Trainers";
import PrimaryButton from "./PrimaryButton";
import { ArrowUpRight } from 'lucide-react'


const Trainer = () =>{
    return(
        <div className="bg-black py-10">
            <div className="lg:w-[89%] w-11/12 mx-auto">
                <div>
                    <h1 className="text-white lg:font-[600] font-[700] lg:text-[44px] text-[30px] pb-10">Our Trainers</h1>
                </div>

                <div className="lg:grid lg:grid-cols-3 gap-5">
                    {Trainers[0].Home.map((train)=>(
                        <div key={train.id}>
                            <div className="bg-white w-full p-2 pb-10 lg:mb-0 mb-5">
                                <img className="pb-5 rounded-md" src={train.image}/>
                                <p className="grid pl-3">
                                    <span className="font-[500] text-[18px]">- {train.name}</span>
                                    <span className="font-[600] text-[30px]">{train.title}</span>
                                </p>

                                <PrimaryButton className="bg-transparent text-primary ml-3 font-[400]" text={'Read More'} img={<ArrowUpRight strokeWidth={1} className="w-5"/>}/>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}
export default Trainer;