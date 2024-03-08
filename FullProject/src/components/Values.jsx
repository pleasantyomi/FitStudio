const Values = () =>{
    const list =[
        {title: "Value 1", content: "Description of the company total energy saved from the production and the activity made so far they btyeyvyvf.", id:1 },
        {title: "Value 2", content: "Description of the company total energy saved from the production and the activity made so far they btyeyvyvf.", id:2 },
        {title: "Value 3", content: "Description of the company total energy saved from the production and the activity made so far they btyeyvyvf.", id:3 },
    ]
    return(
        <div className="lg:w-[89%] w-11/12 py-10 mx-auto">
            <div>
                <h1 className="text-center grid gap-2">
                    <span className=" font-[400] text-lg">Our Values</span>
                    <span className="font-[700] lg:text-[40px] text-[30px] text-[#252525] leading-none lg:w-7/12 mx-auto">Empowering Your Body; Inspiring Your Life</span>
                </h1>
            </div>

            <div className="grid lg:grid-cols-3 gap-3 w-[95%] mx-auto pt-8">
                {list.map((lists)=>(
                    <div key={lists.id}>
                        <div className="bg-[#F7F7F7] w-full py-10 px-6 rounded-lg">
                            <div className="bg-primary w-10 h-10 rounded-full relative mb-2">

                            </div>

                            <div>
                                <h1 className="font-[600] text-xl">{lists.title}</h1>
                                <p className="text-[#696969] pt-3">{lists.content}</p>
                            </div>

                        </div>
                    </div>
                ))}


            </div>

        </div>
    )
}
export default Values;