// import React, { useEffect } from 'react';
// import SubHero from '../components/SubHero';
// import About from "../components/About";
// import CTABanner from "../components/CTABanner";
// import Certifications from '../components/Certifications';
// import { usePageMeta } from '../hooks/usePageMeta';
// import { SEO_META } from '../data/seoMeta';

// const AboutPage = () => {
//     usePageMeta(SEO_META.about.title, SEO_META.about.description);

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     return (
//         <>
//             <SubHero 
//                 label="// OUR ORIGIN STORY"
//                 title="About Netcradus: A Global Cybersecurity Company"
//                 subtitle="Netcradus was founded on the principle that security is not a feature, but a fundamental right for every organization navigating the modern threat landscape."
//                 backgroundImage="/img/about us bg.png"
//             />
//             <About />
//             <CTABanner />
//             <Certifications />
//         </>
//     );
// };

// export default AboutPage;



import React, { useEffect } from 'react';
import SubHero from '../components/SubHero';
import About from "../components/About";
import TechnologyPartnersSection from "../components/TechnologyPartnersSection";
import TeamMembersSection from "../components/TeamMembersSection";
// import CTABanner from "../components/CTABanner";
import Certifications from '../components/Certifications';
import { usePageMeta } from '../hooks/usePageMeta';
import { SEO_META } from '../data/seoMeta';

const AboutPage = () => {
usePageMeta(SEO_META.about.title, SEO_META.about.description);

useEffect(() => {
    window.scrollTo(0, 0);
}, []);

return (
    <>
        <SubHero 
            label=""
            title="A Global Cybersecurity Company"
            subtitle="Netcradus was founded on the principle that security is not a feature, but a fundamental right for every organization navigating the modern threat landscape."
            backgroundVideo="/videos/ABOUT 1 (2).mp4"
        />

        <About />
        <TechnologyPartnersSection />

        {/* <TeamMembersSection /> */}

        {/* <CTABanner /> */}

        <Certifications />
    </>
);

};

export default AboutPage;