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
    console.log(allPostsData);
  }, [selectedCategory]);
  return (
    <Layout>
      <Head>
        <title>Snippets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="cursor-default bg-white dark:bg-gray-900">
        <div className="relative mx-auto my-8 max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6">
          <h1 className="mx-auto mb-4 max-w-screen-sm text-center text-7xl font-extrabold tracking-tight text-gray-900 underline dark:text-white">
            Snippets
          </h1>
          <div className=" absolute top-0 right-0 flex cursor-pointer p-8">
            <ThemeModeSvgComponent />
          </div>
          <ul className="my-8 flex flex-wrap justify-center text-center font-medium text-gray-500 dark:text-gray-400">
            {" "}
            <li className="mr-2">
              <button
                onClick={() => {
                  setSelectedCategory("");
                }}
                type="button"
                className="mr-2 mb-2 rounded-full border border-gray-200 bg-white py-2.5 px-5 text-lg font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                ALL
              </button>
            </li>
            {allCategories.map((category) => (
              <li className="mr-2" key={category}>
                <button
                  onClick={() => {
                    setSelectedCategory(category);
                  }}
                  type="button"
                  className="mr-2 mb-2 rounded-full border border-gray-200 bg-white py-2.5 px-5 text-lg font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
          <div className="grid gap-8 lg:grid-cols-2">
            {allPostsData.map(
              ({ id, date, title, description, language, categories }) => {
                return selectedCategory === "" ||
                  categories.includes(selectedCategory) ? (
                  <ItemPost
                    key={id}
                    id={id}
                    date={date}
                    title={title}
                    description={description}
                    language={language}
                    categories={categories}
                  />
                ) : null;
              }
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
