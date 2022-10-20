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

export default function Post({ postData }) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <section className="bg-white dark:bg-gray-900">
        <MarkDownWrapper>
          {" "}
          <div className="absolute top-0 right-0 flex w-full cursor-pointer justify-between p-8">
            {" "}
            <Link href={`/`}>
              <span>{"<"} Back to Home</span>
            </Link>
            <ThemeModeSvgComponent />
          </div>
          <span>
            <Date dateString={postData.date} />
          </span>
          <br />
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </MarkDownWrapper>
      </section>
    </Layout>
  );
}
