import Trainersss from '../components/Trainersss'
import { Search } from 'lucide-react'
import Line from '../components/Line'
import img1 from '../assets/Frame9.png'
import img2 from '../assets/Frame10.png'
import img3 from '../assets/Frame11.png'
import img4 from '../assets/Frame12.png'
import img5 from '../assets/Frame13.png'

const Trainers = () =>{
    const partners =[
        {image: img3, id: 1},
        {image: img4, id: 2},
        {image: img5, id: 3},
        {image: img2, id: 4},
        {image: img1, id: 5},
        {image: img5, id: 6},
        {image: img1, id: 7},
        {image: img2, id: 8},
    ]
    return(
        <div className="mt-3 mb-10">
          <div className="relative w-full lg:h-[40vh] h-[30vh] bg-gradient-to-r from-[#072217] to-[#0B363B]">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-4/12 w-10/12 ">
                    <div>
                        <h1 className="font-[700] lg:text-[36px] text-[24px] text-center text-white pb-6">Our Trainers</h1>
                    </div>
                    <div className="rounded-md py-3 px-3 flex gap-2  bg-white">
                        <Search className="w-4 h-auto text-[#2F2F2F]" />
                        <input className="text-[#2F2F2F] outline-none w-full" type="text" placeholder="Search by name/training"/>
                    </div>

                </div>
            </div>

            <div className="lg:w-[89%] w-11/12 mx-auto">
                <div className=" grid lg:grid-cols-2 my-10 lg:gap-20 gap-3">
                    <div>
                        <h1 className="font-[600] leading-tight text-[30px] lg:text-[44px]">Meet the behind the fitness of our team </h1>
                    </div> 
                    <div>
                         <p className="lg:text-lg text-md  text-[#494949]">Read some books recommendation from our top professionals related to fitness, wellness and personal development</p>
                    </div>
                </div>
              

                <Line/>

                <div>
                      <Trainersss/>
                </div>

                <div >
                    <h1 className="font-[600] leading-tight text-[20px] lg:text-[36px] text-center lg:w-8/12 mx-auto">We partner with top companies for professionals and experienced trainers</h1>
                    <div className="grid grid-flow-col lg:gap-3 justify-items-center lg:w-9/12 w-11/12 mx-auto pt-3">
                        {partners.map((partner)=>(
                            <div key={partner.id}>
                                <div>
                                    <img src={partner.image}/>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </div>
    )
}
export default Trainers;