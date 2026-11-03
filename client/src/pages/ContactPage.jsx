import React, { useEffect } from 'react';
import Contact from "../components/Contact";
import { usePageMeta } from '../hooks/usePageMeta';
import { SEO_META } from '../data/seoMeta';

const ContactPage = () => {
    usePageMeta(SEO_META.contact.title, SEO_META.contact.description);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Contact />
    );
};

export default ContactPage;
