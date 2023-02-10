import Slider from "./Other/Slider";
import Youtube from "./Other/Youtube";
import HomeDoctors from "./Other/HomeDoctors";
import GeneralSpecialties from "./Other/GeneralSpecialties";
import Achieved from "./Other/Achieved";

function Home(){
    return(
        <>
            {/* <Slider/> */}
            <Youtube/>
            <HomeDoctors/>
            <GeneralSpecialties/>
            <Achieved/>
        </>
    )
}
export default Home;