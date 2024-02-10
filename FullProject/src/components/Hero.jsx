import woman from '../assets/woman.png'
import image from  '../assets/Frame 1321319180.svg'
import mobile from '../assets/Frame 1321318116.png'
import PrimaryButton from './PrimaryButton'
import { ArrowUpRight } from 'lucide-react'

const Hero = () =>{
    return(
        <div className="relative w-screen mt-3 lg:bg-Hero z-0 lg:h-[100vh] lg:pb-0 pb-10">
            <img className="lg:block absolute hidden inset-0 z-[-1] object-cover w-full h-full opacity-10" src={woman} alt="woman"/>
            <div className="lg:flex items-center justify-between w-11/12 lg:w-[89%] mx-auto lg:pt-[3rem] pt-8">
                <div className="lg:w-5/12">
                    <h1 className="font-[800] font-hero lg:text-[4rem] text-[32px] lg:leading-[4.5rem] lg:pb-6 pb-2">Empowering your body; Inspiring your life wellbeing</h1>
                    <p className="pb-5 text-lg lg:pb-10 lg:text-xl text-Grey font-primary">Transform your fitness journey with our engaging classes and experts.</p>
                    <PrimaryButton text={'Explore Class'} img={<ArrowUpRight strokeWidth={1} className="w-5"/>} className="py-3 px-7"/>
                </div>

                <div>
                    <img className="hidden lg:block w-auto h-[90vh]" src={image} alt="Hero image"/>
                    <img className="block w-full mx-auto pt-9 lg:hidden" src={mobile} alt="Hero image"/>
                </div>
            </div>
        </div>
    )
}
export default Hero;