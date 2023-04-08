import BringinFeatured from "../../../Components/HomeComponent/BringinFeatured/BringinFeatured";
import Business from "../../../Components/HomeComponent/Business/Business";
import ChatDirect from "../../../Components/HomeComponent/ChatDirect/ChatDirect";
import Find from "../../../Components/HomeComponent/Find/Find";
import Hero from "../../../Components/HomeComponent/Hero/Hero";
import HomeDownlode from "../../../Components/HomeComponent/HomeDownlode/HomeDownlode";
import HotJob from "../../../Components/HomeComponent/HotJob/HotJob";
import InfluencersOptionion from "../../../Components/HomeComponent/InfluencersOptionion/InfluencersOptionion";
import TopClint from "../../../Components/HomeComponent/TopClint/TopClint";


const index = () => {
    return (
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl">
            <Hero></Hero>
            <HomeDownlode></HomeDownlode>
            <HotJob></HotJob>
            <TopClint></TopClint>
            <Business></Business>
            <ChatDirect></ChatDirect>
            <BringinFeatured></BringinFeatured>
            <InfluencersOptionion></InfluencersOptionion>
            <Find></Find>
        </div>
    );
};

export default index;