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

export default function Post({ postData }) {
  useEffect(() => {
    hljs.configure({
      languages: ["python"],
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
      <section className="min-w-min bg-white dark:bg-gray-900">
        <div>
          <div className="flex w-full cursor-pointer justify-between md:p-8">
            {" "}
            <Link href={`/`}>
              <span className="p-2 text-2xl text-black dark:text-white md:pl-8">
                {"<"} Back to Home
              </span>
            </Link>
            <div className="p-2 md:pl-8">
              <ThemeModeSvgComponent />
            </div>
          </div>
          <div className="flex w-full flex-col items-center p-8 md:items-center lg:px-60">
            <MarkDownWrapper>
              <div className="flex w-full flex-col items-center">
                <Date dateString={postData.date} />
                <h1 className="text-center">{postData.title}</h1>
              </div>
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </MarkDownWrapper>
          </div>
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
