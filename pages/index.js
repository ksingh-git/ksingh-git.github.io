import Layout from "../components/layout";
import Hero from "../ui/hero";
import Experience from "../ui/experience";
import Education from "../ui/education";
import Projects from "../ui/projects";
import {useEffect, useState} from "react";
import Head from "next/head";

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading (2 seconds)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    return (<Layout>
        <Head>
            <title>Kamal Singh</title>
        </Head>
        {loading ? <div className="bg-white dark:bg-gray-900 h-screen w-screen flex items-center justify-center">
            <dotlottie-player
                src="https://lottie.host/e752b4e6-1123-4ef3-81dd-3d9b206d45b2/TqZvAl1zPY.lottie"
                speed="1"
                style={{width: "400px", height: "400px"}}
                loop
                autoplay
            ></dotlottie-player>
        </div> : <div
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
            <section className="content-center lg:h-screen lg:snap-start">
                <Projects/>
            </section>
        </div>}
    </Layout>);
}
