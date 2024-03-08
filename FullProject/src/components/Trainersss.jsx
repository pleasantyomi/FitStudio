import CardioTrainers from "./CardioTrainers";
import HmtTrainers from "./HmtTrainers";
import YogaTrainers from "./YogaTrainers";
import AllTrainers from "./AllTrainers";
import { useState } from "react";

const Trainersss = () =>{
    const [page, setPage] = useState(0)
    const all = () =>{
        setPage(0);
    }
    const yoga = () =>{
        setPage(1);
    }
    const cardio = () =>{
        setPage(2);
    }
    const hmt = () =>{
        setPage(3);
        console.log('Correct')
    }


    const pageDisplay = () =>{
        if (page == 0){
            return<AllTrainers/>
        }
        else if (page == 1){
            return<YogaTrainers/>
        }
        else if (page == 2){
            return<CardioTrainers/>
        } 
        else if (page == 3){
            return<HmtTrainers/>
        } 
    }
    return(
        <div>
             <div className="">
                <div className="flex gap-6 pt-8 font-[400] text-[20px] pb-10 lg:overflow-x-hidden overflow-x-scroll no-scrollbar">
                    <button className={`flex-shrink-0 flex-nowrap cursor-pointer pb-2 px-2 ${page === 0 ? 'border-b-[2px] border-b-primary' : ''}`} onClick={all}>All Trainers</button>
                    <button className={`flex-shrink-0 flex-nowrap cursor-pointer pb-2 px-2 ${page === 1 ? 'border-b-[2px] border-b-primary' : ''}`} onClick={yoga}>Yoga Trainer</button>
                    <button className={`flex-shrink-0 flex-nowrap cursor-pointer pb-2 px-2 ${page === 2 ? 'border-b-[2px] border-b-primary' : ''}`} onClick={cardio}>Cardio Trainer</button>
                    <button className={`flex-shrink-0 flex-nowrap cursor-pointer pb-2 px-2 ${page === 3 ? 'border-b-[2px] border-b-primary' : ''}`} onClick={hmt}>Hmt Trainer</button>
                </div>

                <div className="pb-10 lg:pb-14">
                    {pageDisplay()}
                </div>
            </div>
        </div>
    )
}
export default Trainersss;