import MonthlyPrices from "../components/MonthlyPrices";
import YearlyPrices from "../components/YearlyPrices";
import { useState } from "react";

const Prices = () =>{
    const [page, setPage] = useState(0)
    const monthly = () =>{
        setPage(0);
    }
    const yearly = () =>{
        setPage(1);
    }
   
    const pageDisplay = () =>{
        if (page == 0){
            return<MonthlyPrices/>
        }
        else if (page == 1){
            return<YearlyPrices/>
        }
    }
    return(
        <div className="mt-3 mb-10">
            <div className="relative w-full lg:h-[40vh] h-[30vh] bg-gradient-to-r from-[#072217] to-[#0B363B]">
                 <div className="absolute grid left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-4/12 w-10/12 rounded-md py-3 px-3  gap-2  text-white">
                    <h1 className="lg:text-[40px] text-[30px] font-[600] text-center">Membership Pricing</h1>
                    <p className="text-center lg:text-md">Select suitable plan for yourself</p>
                </div>
            </div>

            <div>
                <h1 className="font-[600] lg:text-[36px] text-[24px] lg:w-6/12 mx-auto w-11/12 text-center lg:pt-10 pt-5 leading-none">Find the right plan for your fitness membership</h1>
                <p className="text-[#494949] lg:text-md text-center lg:pt-4 pt-3">Start 7 days free trails for any package you choose</p>
            </div>

            <div className="">
               <div className="flex justify-center gap-3  font-[400] lg:text-base text-sm lg:overflow-x-hidden overflow-x-scroll no-scrollbar border-[1px] border-[#ECECEA] w-fit mx-auto py-2 px-2 rounded-md my-6">
                    <button className={`flex-shrink-0 flex-nowrap cursor-pointer py-1 px-4 rounded-md ${page === 0 ? 'bg-primary' : 'bg-[#ECECEA]'}`} onClick={monthly} >Monthly</button>
                    <button className={`flex-shrink-0 flex-nowrap cursor-pointer py-1 px-4 rounded-md ${page === 1 ? 'bg-primary' : 'bg-[#ECECEA]'}`} onClick={yearly} >Yearly</button>
                </div>

                <div>
                    {pageDisplay()}
                </div>
            </div>
        </div>
    )
}
export default Prices;