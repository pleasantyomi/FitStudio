import PrimaryButton from "./PrimaryButton";
import { ArrowUpRight } from 'lucide-react'
import Blogs from "../Objects/Blogs";

const Subscribe = () =>{
    return(
        <div>
            <div className="w-11/12 lg:w-[89%] mx-auto py-10">
                <div className="lg:grid lg:grid-cols-2 w-full gap-20 pb-20    ">
                    <div >
                        <h1 className="text-[44px] font-[600] leading-tight ">Check our book top professionals and coaches</h1>
                    </div>

                    <div>
                        <p className="font-[400] text-[#494949] text-md">Read some books recommendation from our top professionals related to fitness, wellness and personal development</p>
                        <PrimaryButton className="py-3 px-10 mt-6" text={'subscribe to our blogs'} img={<ArrowUpRight strokeWidth={1} className="w-5"/>}/>
                    </div>
                </div>

                <div className="lg:grid lg:grid-cols-3 gap-5">
                    {Blogs.map((blog)=>(
                        <div key={blog.id}>
                            <div className="w-full lg:mb-0 mb-5">
                                <img src={blog.image}/>
                                <p className="grid pl-3 pt-5">
                                    <span>-{blog.category} | {blog.date}</span>
                                    <span className="font-[600] text-[28px] leading-none">{blog.title}</span>
                                </p>

                                <PrimaryButton className="bg-transparent text-primary pl-3 pt-2" text={'Read More'} img={<ArrowUpRight strokeWidth={1} className="w-5"/>}/>


                            </div>

                        </div>
                    ))}


                </div>

            </div>

        </div>
    )
}
export default Subscribe;