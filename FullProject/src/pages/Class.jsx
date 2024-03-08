import image from '../assets/background.png'
import Line from '../components/Line'
import ClassHeader from '../components/ClassHeader'
import Classes from '../Objects/Classes'
import { useState } from 'react'
import AllClasses from '../components/AllClasses'
import YogaClass from '../components/YogaClass'
import CardioClass from '../components/CardioClass'
import PlateClass from '../components/PlateClass'
import HmtClass from '../components/HmtClass'
import Subscribe from '../components/Subscribe'


const Class = () =>{
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
    const plate = () =>{
        setPage(3);
        console.log('Correct')
    }
    const hmt = () =>{
        setPage(4);
    }

    const pageDisplay = () =>{
        if (page == 0){
            return<AllClasses/>
        }
        else if (page == 1){
            return<YogaClass/>
        }
        else if (page == 2){
            return<CardioClass/>
        } 
        else if (page == 3){
            return<PlateClass/>
        } 
        else if (page == 4){
            return<HmtClass/>
        }
    }
    return(
        <div>
            <div className="w-full h-[40vh] mt-6">
                <img className="h-full w-full object-cover" src={image}/>
            </div>

            <ClassHeader/>
            <Line className="lg:w-[89%] w-11/12 mx-auto"/> 

            <div className="lg:w-[89%] w-11/12 mx-auto">
                <div className="flex gap-6 pt-8 font-[400] text-[20px] pb-10 lg:overflow-x-hidden overflow-x-scroll no-scrollbar">
                    <button className={`flex-shrink-0 flex-nowrap cursor-pointer pb-2 px-2 ${page === 0 ? 'border-b-[2px] border-b-primary' : ''}`} onClick={all}>All</button>
                    <button className={`flex-shrink-0 flex-nowrap cursor-pointer pb-2 px-2 ${page === 1 ? 'border-b-[2px] border-b-primary' : ''}`} onClick={yoga}>Yoga</button>
                    <button className={`flex-shrink-0 flex-nowrap cursor-pointer pb-2 px-2 ${page === 2 ? 'border-b-[2px] border-b-primary' : ''}`} onClick={cardio}>Cardio Trainer</button>
                    <button className={`flex-shrink-0 flex-nowrap cursor-pointer pb-2 px-2 ${page === 3 ? 'border-b-[2px] border-b-primary' : ''}`} onClick={plate}>Plate Trainer</button>
                    <button className={`flex-shrink-0 flex-nowrap cursor-pointer pb-2 px-2 ${page === 4 ? 'border-b-[2px] border-b-primary' : ''}`} onClick={hmt}>Hmt Trainer</button>
                </div>

                <div className="pb-10 lg:pb-14">
                    {pageDisplay()}
                </div>
            </div>

            <Subscribe/>

        </div>
    )
}
export default Class;