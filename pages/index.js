import Head from "next/head";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import ThemeModeSvgComponent from "../components/theme_mode";
import { useState, useEffect } from "react";
import ItemPost from "../components/itemPost";
import { getCategoriesList } from "../lib/categories";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allCategories = await getCategoriesList();
  return {
    props: {
      allPostsData,
      allCategories,
    },
  };
}

export default function Home({ allPostsData, allCategories }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
    }
    console.log("Theme: " + localStorage.getItem("theme"));
  }, []);
  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);
  return (
    <Layout>
      <Head>
        <title>Snippets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-white dark:bg-gray-900 cursor-default">
        <div className="relative py-8 px-4 mx-auto my-8 max-w-screen-xl lg:py-16 lg:px-6">
          <h1 className="mx-auto max-w-screen-sm text-center mb-4 text-7xl underline tracking-tight font-extrabold text-gray-900 dark:text-white">
            Snippets
          </h1>
          <h1>{selectedCategory}</h1>
          <div className=" p-8 cursor-pointer flex absolute top-0 right-0">
            <ThemeModeSvgComponent />
          </div>
          <ul className="flex flex-wrap justify-center my-8 font-medium text-center text-gray-500 dark:text-gray-400">
            {" "}
            <li className="mr-2">
              <button
                onClick={() => {
                  setSelectedCategory("");
                }}
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-400 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                All
              </button>
            </li>
            {allCategories.map((category) => (
              <li className="mr-2">
                <button
                  onClick={() => {
                    setSelectedCategory(category);
                  }}
                  type="button"
                  className="py-2.5 px-5 mr-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-400 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
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
