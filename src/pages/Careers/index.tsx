import React from 'react';
import NavBar from "../../widgets/NavBar/NavBar";
import Banner from "../Home/model/Banner";
import { CareersSection } from "../../widgets/CareersSection";
import { HowToApply } from "../../widgets/HowToApply";
import { Footer } from "../../widgets/Footer";
import { TestimonialsSection } from '../../widgets/TestimonialsSection';
import { FAQSection } from '../../widgets/FAQSection';

const Careers: React.FC = () => {
    return (
        <>
            <NavBar />
            <Banner id={5} />
            <CareersSection />
            <HowToApply />
            <TestimonialsSection />
            <FAQSection />
            <Footer />
        </>
    )
}
export default Careers;
