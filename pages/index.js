import Head from "next/head";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import ThemeModeSvgComponent from "../components/theme_mode";
import { useEffect } from "react";
import ItemPost from "../components/itemPost";

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
                <ItemPost
                  id={id}
                  date={date}
                  title={title}
                  description={description}
                  language={language}
                  categories={categories}
                />
              )
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
