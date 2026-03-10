import React from 'react';
import NavBar from "../../widgets/NavBar/NavBar";
import Banner from '../Home/model/Banner';
import { ProjectFeatures } from '../../widgets/ProjectFeatures';
import { WorksSection } from '../../widgets/WorksSection';
import { FAQSection } from '../../widgets/FAQSection';
import { Footer } from "../../widgets/Footer";
import { TestimonialsSection } from '../../widgets/TestimonialsSection';

const Projects: React.FC = () => {
    return (
        <>
            <NavBar />
            <Banner id={3} />
            <ProjectFeatures />
            <WorksSection title="PROJECTS SHOWCASE" showTabs={true} />
            <TestimonialsSection />
            <FAQSection />
            <Footer />
        </>
    );
};

export default Projects;
