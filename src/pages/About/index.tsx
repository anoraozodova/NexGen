import React from 'react';
import NavBar from "../../widgets/NavBar/NavBar";
import Banner from "../Home/model/Banner";
import WhyChooseUs from "../../widgets/WhyChooseUs/ui/WhyChooseUs";
import { Developers } from "../../widgets/Developers";
import { Achievements } from "../../widgets/Achievements";
import { TestimonialsSection } from "../../widgets/TestimonialsSection";
import { FAQSection } from "../../widgets/FAQSection";
import { Footer } from "../../widgets/Footer";

const About: React.FC = () => {
    return (
        <>
            <NavBar />
            <Banner id={4} />
            <Developers />
            <Achievements />
            <WhyChooseUs />
            <TestimonialsSection />
            <FAQSection />
            <Footer />
        </>
    );
};

export default About;
