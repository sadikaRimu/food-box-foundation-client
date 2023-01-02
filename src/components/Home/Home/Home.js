import React from 'react';
import Banner from '../Banner/Banner';
import BannerItem from '../BannerItem/BannerItem';
import CardCarousel from '../CardCarousel/CardCarousel';
import EmailSection from '../EmailSection/EmailSection';
import FirstBlog from '../FirstBlog/FirstBlog';
import HomeGallery from '../HomeGallery/HomeGallery';
import SecondBlog from '../SecondBlog/SecondBlog';
import OurDonatePlan from './OurDonatePlan/OurDonatePlan';

const Home = () => {
    return (
        <div>
            {/* <BannerItem></BannerItem> */}
            <Banner></Banner>
            <OurDonatePlan></OurDonatePlan>
            <FirstBlog></FirstBlog>
            <SecondBlog></SecondBlog>
            <HomeGallery></HomeGallery>
            <EmailSection></EmailSection>
            {/* <CardCarousel></CardCarousel> */}
        </div>
    );
};

export default Home;