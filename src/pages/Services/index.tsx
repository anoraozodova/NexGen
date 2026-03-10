import NavBar from "../../widgets/NavBar/NavBar";
import { ServicesDetailed } from "../../widgets/ServicesDetailed";
import { SuccessStories } from "../../widgets/SuccessStories";
import { Footer } from "../../widgets/Footer";
import Banner from "../Home/model/Banner";
import { TestimonialsSection } from "../../widgets/TestimonialsSection";
import { FAQSection } from "../../widgets/FAQSection";

const ServicesPage: React.FC = () => {
    return (
        <>
            <NavBar />
            <Banner id={2} />
            <ServicesDetailed />
            <SuccessStories />
            <TestimonialsSection />
            <FAQSection />
            <Footer />
        </>
    )
}
export default ServicesPage;
