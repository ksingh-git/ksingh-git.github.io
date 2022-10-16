import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faMedapps,
  faJs,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import ThemeModeSvgComponent from "../components/theme_mode";
import { useEffect } from "react";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>Snippets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-white dark:bg-gray-900 cursor-default">
        <div className="relative py-8 px-4 mx-auto my-8 max-w-screen-xl lg:py-16 lg:px-6">
          <h2 className="mx-auto max-w-screen-sm text-center mb-4 text-7xl underline tracking-tight font-extrabold text-gray-900 dark:text-white">
            Snippets
          </h2>
          <div className=" p-8 cursor-pointer flex absolute top-0 right-0">
            <ThemeModeSvgComponent />
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {allPostsData.map(
              ({ id, date, title, description, language, categories }) => (
                <div
                  key={id}
                  className="p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
                >
                  <article className="flex flex-col h-full p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-between items-center mb-5 text-gray-500">
                      <span className="bg-primary-100 text-primary-800 text-xl font-medium inline-flex justify-center items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                        <span
                          className="mr-1 mb-1 w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {getLanguageIcon({ language })}
                        </span>

                        {language}
                      </span>
                      <span className="text-xl">
                        <Date dateString={date} />
                      </span>
                    </div>
                    <Link href={`/posts/${id}`}>
                      <h2 className="hover:underline cursor-pointer mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                      </h2>
                    </Link>
                    <p className="grow mb-5 text-xl font-light text-gray-500 dark:text-gray-400">
                      {description}
                    </p>
                    <div className="flex">
                      {categories.map((category) => (
                        <span className="p-2 cursor-pointer">
                          <Link key={category} href={`/category/${category}`}>
                            <h6>#{category}</h6>
                          </Link>
                        </span>
                      ))}
                    </div>
                  </article>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </Layout>
  );

  function getLanguageIcon({ language }) {
    switch (language.toLowerCase()) {
      case "python":
        return <FontAwesomeIcon icon={faPython} />;
      case "javascript":
        return <FontAwesomeIcon icon={faJs} />;
      case "html":
        return <FontAwesomeIcon icon={faHtml5} />;
      default:
        return <FontAwesomeIcon icon={faMedapps} />;
    }
  }
}
