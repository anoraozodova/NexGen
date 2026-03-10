import React from 'react';
import NavBar from "../../widgets/NavBar/NavBar";
import Banner from "../Home/model/Banner";
import { BlogSection } from "../../widgets/BlogSection";
import { Footer } from "../../widgets/Footer";

const BlogPage: React.FC = () => {
    return (
        <>
            <NavBar />
            <Banner id={6} />
            <BlogSection />
            <Footer />
        </>
    )
}

export default BlogPage;
