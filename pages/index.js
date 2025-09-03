import Layout from "../components/layout";
import Hero from "../ui/hero";
import Experience from "../ui/experience";
import Education from "../ui/education";

export default function Home() {
    return (<Layout>
        {/* Scroll container */}
        <div
            className="bg-white dark:bg-gray-900 snap-none lg:h-screen lg:snap-y lg:snap-mandatory lg:overflow-y-scroll">
            {/* Each section should fill screen height and snap */}
            <section className="content-center lg:h-screen lg:snap-start">
                <Hero/>
            </section>
            <section className="content-center lg:h-screen lg:snap-start">
                <Experience/>
            </section>
            <section className="content-center lg:h-screen lg:snap-start">
                <Education/>
            </section>
        </div>
    </Layout>);
}
