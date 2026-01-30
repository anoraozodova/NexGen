import React from "react";
import Services from "../../entities/Services/ui/Services";
import Statistic from "../../entities/statistics/ui/Statistic";
import NavBar from "../../widgets/NavBar/NavBar";
import { TestimonialsSection } from "../../widgets/TestimonialsSection";
import { FAQSection } from "../../widgets/FAQSection";
import WhyChooseUs from "../../widgets/WhyChooseUs/ui/WhyChooseUs";
import { WorksSection } from "../../widgets/WorksSection/ui/WorksSection";
import HeroSection from "./ui/HeroSection";
import { Footer } from "../../widgets/Footer";

const HomePage: React.FC = () => {
    return (
        <>
            <NavBar />
            <HeroSection />
            <Statistic />
            <WhyChooseUs />
            <Services />
            <WorksSection />
            <TestimonialsSection />
            <FAQSection />
            <Footer />
        </>
    )
}
export default HomePage;