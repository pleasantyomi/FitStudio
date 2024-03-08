import AboutHero from "../components/AboutHero";
import image from '../assets/background.png'
import AboutStats from "../components/AboutStats";
import AboutTransform from "../components/AboutTransform";
import Values from "../components/Values";
import AboutTrainers from "../components/AboutTrainers";
import Faq from "../components/Faq";
import AboutSubscribe from "../components/AboutSubscribe";

const About = () => {
    return (
        <div className="overflow-x-hidden">
            <AboutHero/>
            <img className="w-full lg:h-[50vh] h-[40vh] object-cover object-center" src={image}/>
            <Values/>
            <AboutStats/>
            <AboutTransform/>
            <AboutTrainers/>
            <Faq/>
            <AboutSubscribe/>
        </div>
    )
}
export default About;