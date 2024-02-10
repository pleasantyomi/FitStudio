import { useState } from "react";

const Stats = () =>{
    const[statistics] = useState([
        {number: '30', text: 'Trainers', id: 1},
        {number: '150+', text: 'Membership', id: 2},
        {number: '125', text: 'Facilities', id: 3},
        {number: '25', text: 'Classes', id: 4},


    ])
    return(
        <div className="lg:flex grid justify-center w-screen lg:gap-[5rem] gap-[60px] text-white bg-black py-14">
            {
                statistics.map((stats)=>(
                    <div key={stats.id}>
                        <p className="grid text-center lg:text-left">
                            <span className="font-hero font-[600] text-[3rem]">{stats.number}</span>
                            <span className="text-2xl font-primary font-[200] text-secondary">{stats.text}</span>
                        </p>

                        <div className="lg:hidden bg-other w-[90vw] block mx-auto h-[0.5px] bg-opacity-30 mt-5"></div>
                    </div>
                ))
            }
        </div>
    )
}
export default Stats;