import Blogs from '../Objects/Blogs'
import PrimaryButton from './PrimaryButton';
import { ArrowUpRight } from 'lucide-react';

const AllBlogs= () =>{
    return(
        <div className="w-11/12 lg:w-[89%] mx-auto">
              <div className="lg:grid lg:grid-cols-3 gap-5">
                    {Blogs.All.map((blog)=>(
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
    )
}
export default AllBlogs;