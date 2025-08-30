import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import hljs from "highlight.js/lib/common";
import "highlight.js/styles/github-dark.css";
import { useEffect } from "react";
import Link from "next/link";
import ThemeModeSvgComponent from "../../components/theme_mode";
import MarkDownWrapper from "../../components/markdownWrapper";
import { addButtonToPre } from "../../components/copyFunctions";
import Summarize from "../../components/summarize";

export default function Post({ postData }) {
    useEffect(() => {
        hljs.configure({
            languages: ["python", "java", "xml"],
        });
        hljs.highlightAll();

        const highlights = document.querySelectorAll("pre");
        highlights.forEach((div) => {
            div.append(addButtonToPre());
        });
    }, []);

    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>

            {/* Background Hero Section */}
            <section
                className="relative min-h-[80vh] w-full overflow-hidden bg-cover bg-center bg-no-repeat sm:bg-fixed"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&auto=format&fit=crop&q=80')`,
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />

                {/* Top Bar */}
                <div className="relative z-10 flex w-full items-center justify-between p-4 sm:p-6">
                    <Link href={`/blog`}>
            <span className="text-base sm:text-lg text-white">
              {"<"} Back to Home
            </span>
                    </Link>
                    <ThemeModeSvgComponent />
                </div>

                {/* Center Content */}
                <div className="relative z-10 flex flex-col items-center justify-center px-4 py-12 sm:px-8 sm:py-20 text-center text-white">
                    <Date dateString={postData.date} />
                    <h1 className="mt-4 mb-4 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
                        {postData.title}
                    </h1>
                    <Summarize content={postData.contentHtml} />
                </div>
            </section>

            {/* Content Section */}
            <section className="w-full overflow-x-hidden bg-white dark:bg-gray-900">
                <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 md:px-10 lg:px-16">
                    <MarkDownWrapper>
                        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                    </MarkDownWrapper>
                </div>
            </section>
        </Layout>
    );
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}
