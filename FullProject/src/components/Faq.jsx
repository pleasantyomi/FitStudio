import Line from '../components/Line'
import { ChevronDown } from 'lucide-react';

const Faq = () =>{
    const faq =[
        {
            title: "FAQS 1",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            id: 1,
        },
        {
            title: "FAQS 2",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            id: 2,
        },        
        {
            title: "FAQS 3",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            id: 3,
        },
    ]
    return(
        <div className="lg:w-[89%] w-11/12 mx-auto">
            <div className="pb-6">
                <h1 className="text-center lg:font-[700] lg:text-[40px] text-[30px]">Find answer here</h1>
                <p className="text-md text-center">We've redefined the game to make it more thrilling and rewarding than ever. </p>
            </div>

            <div className="lg:w-[45%] w-full mx-auto grid">
                {faq.map((faqs)=>(
                    <div key={faqs.id}>
                        <div>
                            <div className="flex justify-between items-center pt-4">
                                <p className="font-[600] lg:text-lg text-md">{faqs.title}</p>
                                < ChevronDown/>
                            </div>
                            <Line/>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default Faq;