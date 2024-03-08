import { Search } from 'lucide-react'
const ClassHeader = () =>{
    return(
        <div className="w-11/12 lg:w-[89%] mx-auto py-10">
            <div className="grid lg:grid-cols-2 items-center lg:justify-items-end">
            <div className="mb-10 w-full lg:hidden border-[#C3C3C3] border-[1px] rounded-full py-3 px-3 flex justify-between">
                    <input className="outline-none text-[#C3C3C3] text-md" type="text" placeholder="search for class"/>
                    <div className="relative bg-primary w-10 h-10 rounded-full flex">
                        <Search strokeWidth={0.5} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-5 h-5"/>
                    </div>
                    
                </div>

                <div>
                    <h1 className="font-[700] lg:font-[600] text-[30px] lg:text-[40px] leading-tight">Our dynamic and flexible class for you and family</h1>
                </div>

                <div className="w-6/12 border-[#C3C3C3] border-[1px] rounded-full py-3 px-3 lg:flex justify-between hidden">
                    <input className="outline-none text-[#C3C3C3] text-md" type="text" placeholder="search for class"/>
                    <div className="relative bg-primary w-10 h-10 rounded-full flex">
                        <Search strokeWidth={0.5} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-5 h-5"/>
                    </div>
                </div>

            </div>


        </div>
    )
}
export default ClassHeader;