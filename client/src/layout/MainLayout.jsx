import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

export default function MainLayout() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (


        <div className="min-h-screen bg-background text-white flex flex-col relative">
            {/* Scroll Progress Bar at Top */}
            <motion.div
                className="scroll-progress"
                style={{ scaleX }}
            />

            <Navbar />

            <main className="flex-grow">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <Outlet />
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
