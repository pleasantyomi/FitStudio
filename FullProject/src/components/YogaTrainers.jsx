import Trainers from "../Objects/Trainers";

const YogaTrainers = () =>{
    return(
        <div>
            <div className="grid lg:grid-cols-3 w-full mx-auto gap-5">
                {Trainers[0].Yoga.map((train)=>(
                    <div key={train.id}>
                        <div className="relative border-[1px] border-[#BDBDBD] py-3 px-2 rounded-tl-xl rounded-br-xl">
                            <img className="rounded-md" src={train.image}/>
                            <div className="absolute w-9/12 bg-white py-3 left-1/2 -translate-x-1/2 bottom-[2rem] rounded-xl">
                                <p className="text-center grid leading-tight">
                                    <span className="font-[600]">{train.name}</span>
                                    <span>{train.position}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default YogaTrainers;