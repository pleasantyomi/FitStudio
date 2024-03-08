import CardioTrainers from "./CardioTrainers";
import HmtTrainers from "./HmtTrainers";
import YogaTrainers from "./YogaTrainers";
import AllTrainers from "./AllTrainers";
import { useState } from "react";

const AboutTrainers = () =>{
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
        <div className="lg:w-[89%] w-11/12 mx-auto py-10">
            <h1 className="font-[700] lg:text-[40px] text-[30px] text-center">Meet our trainers</h1>
            <p className="text-center text-lg">Passionate expertise committed to your fitness journey</p>

            <div className="w-full mx-auto">
                <div className="flex justify-center gap-3  font-[400] lg:text-base text-sm lg:overflow-x-hidden overflow-x-scroll no-scrollbar border-[1px] border-[#ECECEA] w-fit mx-auto py-2 px-2 rounded-md my-6">
                    <button className={`flex-shrink-0 flex-nowrap cursor-pointer py-1 px-4 rounded-md ${page === 0 ? 'bg-primary' : 'bg-[#ECECEA]'}`} onClick={all}>All</button>
                    <button className={`flex-shrink-0 flex-nowrap cursor-pointer py-1 px-4 rounded-md ${page === 1 ? 'bg-primary' : 'bg-[#ECECEA]'}`} onClick={yoga}>Yoga</button>
                    <button className={`flex-shrink-0 flex-nowrap cursor-pointer py-1 px-4 rounded-md ${page === 2 ? 'bg-primary' : 'bg-[#ECECEA]'}`} onClick={cardio}>Cardio</button>
                    <button className={`flex-shrink-0 flex-nowrap cursor-pointer py-1 px-4 rounded-md ${page === 3 ? 'bg-primary' : 'bg-[#ECECEA]'}`} onClick={hmt}>Hmt</button>
                </div>

                <div className="pb-10 lg:pb-14">
                    {pageDisplay()}
                </div>
            </div>
        </div>
    )
}
export default AboutTrainers;