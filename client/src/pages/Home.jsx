import React from 'react';
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import TechStack from "../components/TechStack";
import Services from "../components/Services";
//import ACISSection from "../components/ACISSection";
import LiveThreatMap from "../components/LiveThreatMap";
import Industries from "../components/Industries";
import AboutSection from "../components/AboutSection";
import CloudAISection from "../components/CloudAISection";
import SoftwareSection from "../components/SoftwareSection";
import ContactSection from "../components/ContactSection";
import HowWeWork from "../components/HowWeWork";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/BlogSection";
import TrustMarquee from '../components/TrustMarquee';

export default function Home() {
    return (
        <div className="flex flex-col">
            <Hero />
            <TrustMarquee/>
            <StatsBar />
            <TechStack />
            <Services />
            {/* <ACISSection /> */}
            <LiveThreatMap />
            <HowWeWork />
            <Industries />
            <Testimonials />
            <AboutSection />
            <CloudAISection />
            <SoftwareSection />
            <BlogSection />
            <ContactSection />
        </div>
    );
}
