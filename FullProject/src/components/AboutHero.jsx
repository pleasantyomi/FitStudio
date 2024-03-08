import woman from '../assets/woman.png'
import PrimaryButton from './PrimaryButton';
import { ArrowUpRight } from 'lucide-react'

const AboutHero = () =>{
    return(
        <div className="relative w-screen mt-3 lg:bg-Hero z-0 lg:h-[60vh]  lg:pb-0 pb-10 lg:pt-0 pt-10">
             <img className="lg:block absolute hidden inset-0 z-[-1] object-center object-cover w-full h-full opacity-10" src={woman} alt="woman"/>
             <div className="lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-7/12">
                 <h1 className="lg:text-[60px] text-[30px] font-[700] text-center leading-none">Your journey to wellness start here</h1>
                 <p className="text-[20px] font-[400] text-[#494949] text-center lg:w-8/12 w-10/12 mx-auto lg:pt-4 pt-2">Transform your fitness journey with our engaging classes and experts.</p>
                 <PrimaryButton className="mx-auto py-3 px-6 text-base uppercase lg:mt-6 mt-4" text={'Join Now'} img={<ArrowUpRight strokeWidth={1} className="w-5"/>}/>


             </div>
        
       
    </div>
    )
}
export default AboutHero;