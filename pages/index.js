import {useEffect} from "react";
import Layout from "../components/layout";
import Hero from "../ui/hero";
import Experience from "../ui/experience";
import Education from "../ui/education";

export default function Home() {
    useEffect(() => {
        const sections = Array.from(document.querySelectorAll("section"));
        let currentIndex = 0;
        let isScrolling = false;
        const SCROLL_DURATION = 700; // match scroll duration
        const SCROLL_THRESHOLD = 50;

        const scrollToIndex = (index) => {
            index = Math.max(0, Math.min(index, sections.length - 1));
            currentIndex = index;
            sections[index].scrollIntoView({behavior: "smooth"});
            isScrolling = true;
            setTimeout(() => {
                isScrolling = false;
            }, SCROLL_DURATION);
        };

        const handleWheel = (e) => {
            if (isScrolling) return;
            if (Math.abs(e.deltaY) < SCROLL_THRESHOLD) return;

            const targetIndex = currentIndex + (e.deltaY > 0 ? 1 : -1);
            scrollToIndex(targetIndex);
        };

        const handleKeyDown = (e) => {
            if (isScrolling) return;

            let targetIndex = currentIndex;

            if (e.key === "ArrowDown") targetIndex += 1;
            if (e.key === "ArrowUp") targetIndex -= 1;

            scrollToIndex(targetIndex);
        };

        window.addEventListener("wheel", handleWheel, {passive: false});
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (<Layout>
        <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-white dark:bg-gray-900">
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
