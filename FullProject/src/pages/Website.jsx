import Explore from "../components/Explore";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats"

const Website = () => {
    return(
        <div className="overflow-x-hidden">
            <Header/>
            <Hero/>
            <Stats/>
            <Explore/>
            <Footer/>

        </div>
    )
};
export default Website;