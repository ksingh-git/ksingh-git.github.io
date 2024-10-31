import Layout from "../../components/layout";
import PropTypes from "prop-types";
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

/**
 * Renders a single blog post page.
 *
 * @param {Object} postData - The data of the post to be rendered.
 * @param {string} postData.title - The title of the post.
 * @param {string} postData.date - The date the post was published.
 * @param {string} postData.contentHtml - The HTML content of the post.
 * @returns {ReactElement} The JSX element representing the blog post page.
 */
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
              <Summarize content={postData.contentHtml} />
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </MarkDownWrapper>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/**
 * Pre-renders individual blog post pages at build time.
 *
 * @param {Object} context - The context passed to the function.
 * @param {Object} context.params - The route parameters.
 * @param {string} context.params.id - The id of the post to be rendered.
 * @returns {Object} The object containing the props for the page.
 * @property {Object} props - The props for the page.
 * @property {Object} props.postData - The data for the post, including
 *   title, date, and contentHtml.
 */
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

/**
 * Pre-renders individual blog post pages at build time, using
 * getStaticPaths to generate an array of paths.
 *
 * @returns {Object} The object containing the paths for the pages.
 * @property {Array} paths - The array of paths to be pre-rendered.
 * @property {boolean} fallback - The fallback value for getStaticPaths.
 */
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

Post.propTypes = {
  postData: PropTypes.object.isRequired,
};
