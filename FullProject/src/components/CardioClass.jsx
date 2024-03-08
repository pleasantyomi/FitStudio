import Classes from '../Objects/Classes'
import Line from '../components/Line'
import PrimaryButton from './PrimaryButton'
import { ArrowUpRight } from 'lucide-react'

const CardioClass = () =>{
    return(
        <div className="grid lg:grid-cols-3 lg:grid-flow-row gap-5 gap-y-10">
            {Classes[0].cardio.map((classList)=>(
                <div key={classList.id}>
                    <div className="w-full">
                        <div className="w-full h-[45vh] relative">
                             <img className="w-full h-full object-cover" src={classList.image}/>
                             <div className="absolute bottom-0 bg-white w-6/12 py-3 left-1/2 -translate-x-1/2 rounded-tl-xl">
                                <p className="grid text-center leading-none">
                                    <span className="lg:font-[600] text-[30px]">{classList.price}</span>
                                    <span className="text-[#494949]">/per month</span>
                                </p>
                             </div>
                        </div>

                        <div className="px-3 pt-5">
                            <h1 className="font-[600] text-[30px]">{classList.title}</h1>
                            <p className="text-[#494949]">{classList.content}</p>
                        </div>

                        <Line className="w-10/12 mx-auto"/>

                        <div className="px-3 pt-5 flex items-center gap-2">
                            <div className="bg-[#F5FFF9] w-10 h-10 rounded-full relative flex-shrink-0 flex-nowrap">
                                {/* <img className="w-4 h-auto text-primary" src={'https://img.icons8.com/pastel-glyph/64/bank-building--v2.png'} alt={"bank-building--v2"}/> */}
                            </div>
                            <div>
                                 <p className="font-[500] text-[20px]">{classList.desc}</p>
                             </div>
                        </div> 

                        <div>
                            <PrimaryButton className="bg-transparent border-[1px] border-[#D7D7D7] rounded-md px-5 py-2 ml-3 mt-5" text={'Register Now'} img={<ArrowUpRight strokeWidth={1} className="w-5"/>}/>
                        </div>


                    </div>

                </div>
            ))}
        </div>
    )
}
export default CardioClass;