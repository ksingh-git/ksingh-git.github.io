import {useEffect} from "react";
import Layout from "../components/layout";
import Hero from "../ui/hero";
import Experience from "../ui/experience";
import Education from "../ui/education";

export default function Home() {
    useEffect(() => {
        let isScrolling = false;
        const SCROLL_THRESHOLD = 50; // Minimum wheel delta to trigger section change

        const handleWheel = (e) => {
            if (isScrolling) return;

            if (Math.abs(e.deltaY) < SCROLL_THRESHOLD) return; // ignore small scrolls

            isScrolling = true;

            const sections = document.querySelectorAll("section");
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;

            let targetIndex = 0;

            sections.forEach((section, index) => {
                const offsetTop = section.offsetTop;
                if (scrollTop >= offsetTop - windowHeight / 2) {
                    targetIndex = index + (e.deltaY > 0 ? 1 : -1);
                }
            });

            targetIndex = Math.max(0, Math.min(targetIndex, sections.length - 1));

            sections[targetIndex].scrollIntoView({behavior: "smooth"});

            setTimeout(() => {
                isScrolling = false;
            }, 700); // slightly longer to match smooth scroll
        };

        window.addEventListener("wheel", handleWheel, {passive: false});
        return () => window.removeEventListener("wheel", handleWheel);
    }, []);

    return (<Layout>
        <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
            <section className="snap-start min-h-screen flex items-center justify-center">
                <Hero/>
            </section>

            <section className="snap-start min-h-screen flex items-center justify-center">
                <Experience/>
            </section>

            <section className="snap-start min-h-screen flex items-center justify-center">
                <Education/>
            </section>
        </div>
    </Layout>);
}
