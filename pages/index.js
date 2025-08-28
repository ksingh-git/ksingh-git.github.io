import Layout from "../components/layout";
import Hero from "../ui/hero";
import Experience from "../ui/experience";
import Education from "../ui/education";

export default function Home() {

    return (<Layout>
        <Hero/>
        <Experience/>
        <Education/>
    </Layout>);
}
