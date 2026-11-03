import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace("#", "");
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });

                    // Focus the first input if it's the contact form
                    if (id === "contact") {
                        const firstInput = element.querySelector("input, textarea");
                        if (firstInput) {
                            setTimeout(() => firstInput.focus(), 800);
                        }
                    }
                }
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
}
