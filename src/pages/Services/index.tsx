import NavBar from "../../widgets/NavBar/NavBar";
import { ServicesDetailed } from "../../widgets/ServicesDetailed";
import { Footer } from "../../widgets/Footer";
import Banner from "../Home/model/Banner";

const ServicesPage: React.FC = () => {
    return (
        <>
            <NavBar />
            <div style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
                <Banner id={2} />
            </div>
            <ServicesDetailed />
            <Footer />
        </>
    )
}
export default ServicesPage;
