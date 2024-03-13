import Testimonials from '../Objects/Testimonials';
import avatar from '../assets/avatar.png'
import Line from './Line'

const Testimony = () =>{
    return(
        <div className="lg:w-[89%] w-11/12 mx-auto">
            <div className="grid lg:grid-cols-3 gap-5">
                {Testimonials[0].All.map((Test)=>(
                    <div key={Test.id}>
                        <div className="w-full border-[1px] border-[#BDBDBD] rounded-tl-lg rounded-br-lg p-2">
                             <div className="bg-[#D3EEE34D] bg-opacity-30 rounded-md p-5">
                                <img src={avatar}/>
                                <p className="text-[#494949] pt-3 pb-4">{Test.content}</p>
                                <Line/>
                                <p className="font-[600] pt-1">{Test.writer}</p>
                                <p className="text-[#494949] text-xs">{Test.location}</p>
                             </div>
                         </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Testimony;