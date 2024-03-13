import AllBlogs from '../components/AllBlogs'
import Fitness from './Fitness'
import Nutrition from './Nutrition'
import Diet from './Diet'
import Training from './Training'
import { useState } from 'react'

const Blogs = () =>{
    const [page, setPage] = useState(0)
    const all = () =>{
        setPage(0);
    }
    const fitness = () =>{
        setPage(1);
    }
    const nutrition = () =>{
        setPage(2);
    }
    const diet = () =>{
        setPage(3);
    }
    const training = () =>{
        setPage(4);
    }


    const pageDisplay = () =>{
        if (page == 0){
            return<AllBlogs/>
        }
        else if (page == 1){
            return<Fitness/>
        }
        else if (page == 2){
            return<Nutrition/>
        } 
        else if (page == 3){
            return<Diet/>
        } 
        else if (page == 4){
            return<Training/>
        } 
    }
    return(
        <div className="w-11/12 lg:w-[89%] mx-auto">
             <div className="flex gap-6 pt-8 font-[400] text-[20px] pb-10 lg:overflow-x-hidden overflow-x-scroll no-scrollbar">
                    <button className={`flex-shrink-0 flex-nowrap cursor-pointer pb-2 px-2 ${page === 0 ? 'border-b-[2px] border-b-primary' : ''}`} onClick={all}>All</button>
                    <button className={`flex-shrink-0 flex-nowrap cursor-pointer pb-2 px-2 ${page === 1 ? 'border-b-[2px] border-b-primary' : ''}`} onClick={fitness}>Fitness</button>
                    <button className={`flex-shrink-0 flex-nowrap cursor-pointer pb-2 px-2 ${page === 2 ? 'border-b-[2px] border-b-primary' : ''}`} onClick={nutrition}>Nutrition</button>
                    <button className={`flex-shrink-0 flex-nowrap cursor-pointer pb-2 px-2 ${page === 3 ? 'border-b-[2px] border-b-primary' : ''}`} onClick={diet}>Diet Habits</button>
                    <button className={`flex-shrink-0 flex-nowrap cursor-pointer pb-2 px-2 ${page === 4 ? 'border-b-[2px] border-b-primary' : ''}`} onClick={training}>Training & Session</button>
            </div>

        </div>
    )
}
export default Blogs;