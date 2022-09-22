import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { useEffect } from "react";

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
      <section className="text-justify p-36 mx-36 prose prose-slate prose-xl md:prose-2xl max-w-none dark:prose-invert prose-h2:underline prose-h3:underline">
        <span>
          <Date dateString={postData.date} />
        </span>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </section>
    </Layout>
  );
}
