import Explore from "../components/Explore";
import Hero from "../components/Hero";
import Stats from "../components/Stats"
import Transform from "../components/Transform";
import More from "../components/More"
import Pricing from "../components/Pricing";
import Trainer from "../components/Trainer";
import Subscribe from "../components/Subscribe";

const Website = () => {
    return(
        <div className="overflow-x-hidden">
            <Hero/>
            <Stats/>
            <Explore/>
            <Transform/>
            <More/>
            <Pricing/>
            <Trainer/>
            <Subscribe/>
        </div>
    )
};
export default Website;