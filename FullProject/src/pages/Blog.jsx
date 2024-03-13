import { Search } from 'lucide-react'
import Blogs from '../components/Blogs'
import Line from '../components/Line'

const Blog = () => {
    return (
        <div>
             <div className="relative w-full lg:h-[40vh] h-[30vh] bg-gradient-to-r from-[#072217] to-[#0B363B]">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-4/12 w-10/12 ">
                    <div>
                        <h1 className="font-[700] lg:text-[36px] text-[24px] text-center text-white pb-6">Our Blogs</h1>
                    </div>
                    <div className="rounded-md py-3 px-3 flex gap-2  bg-white">
                        <Search className="w-4 h-auto text-[#2F2F2F]" />
                        <input className="text-[#2F2F2F] outline-none w-full" type="text" placeholder="Search by name/training"/>
                    </div>

                </div>
             </div>

            
             <div className=" grid lg:grid-cols-2 my-6 lg:gap-20 gap-3 lg:w-[89%] w-11/12 mx-auto">
                    <div>
                        <h1 className="font-[600] leading-tight text-[30px] lg:text-[44px]">Read professionals books article about wellbeing</h1>
                    </div> 
                    <div>
                         <p className="lg:text-lg text-md  text-[#494949]">Read some books recommendation from our top professionals related to fitness, wellness and personal development</p>
                    </div>
            </div>

            <Line className="lg:w-[89%] w-11/12 mx-auto"/>


             <div>
                <Blogs/>
             </div>
            
        </div>
    )
}
export default Blog;