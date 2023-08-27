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
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
    }
  }, []);
  return (
    <Layout>
      <Head>
        <title>Snippets</title>
        <link
          rel="icon"
          href="https://img.icons8.com/emoji/256/four-leaf-clover.png"
        />
      </Head>
      <div className="flex min-w-min cursor-default content-center justify-center align-middle">
        <section className="relative bg-white dark:bg-gray-900 md:m-8 md:w-full">
          <div className="relative mx-auto my-8 max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
            <div className="absolute right-2 top-0 md:hidden">
              <ThemeModeSvgComponent className="cursor-pointer" />
            </div>
            <h1
              className="mx-auto mb-4 max-w-screen-sm select-none text-center text-7xl font-extrabold tracking-tight
           text-gray-900 underline dark:text-white"
            >
              Snippets
            </h1>

            {/* Search Bar - large screen */}
            <div className="absolute right-0 top-0 hidden p-8 md:flex">
              <input
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                type="search"
                className="text-md mr-4  w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white
               dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 md:block"
                placeholder="Search"
                required=""
              />
              <ThemeModeSvgComponent className="cursor-pointer" />
            </div>
            <div className="top-2 z-auto backdrop-blur-sm">
              {/* Search Bar - mobile and tab screens */}
              <div>
                {/* Search Bar - mobile and tab screens */}
                <div>
                  <input
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                    }}
                    type="search"
                    className="text-md mr-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-4
             text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600
              dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500
               dark:focus:ring-blue-500 md:hidden"
                    placeholder="Search"
                    required=""
                  />
                </div>
              </div>
              {/* Categories */}
              <ul className="my-8 flex select-none flex-wrap justify-center text-center font-medium text-gray-500 dark:text-gray-400">
                {allCategories.map((category) => (
                  <li className="mr-2" key={category}>
                    <button
                      onClick={() => {
                        selectedCategory !== category
                          ? setSelectedCategory(category)
                          : setSelectedCategory("");
                      }}
                      type="button"
                      className={`mb-2 mr-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-lg font-medium  hover:bg-gray-100 hover:text-blue-700 ${
                        selectedCategory == category
                          ? "z-10 text-blue-700 outline-none ring-4 ring-gray-400 dark:text-white dark:ring-gray-700"
                          : "text-gray-900 dark:text-gray-400"
                      }  dark:border-gray-600 dark:bg-gray-800  dark:hover:bg-gray-700 dark:hover:text-white `}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Posts */}
            <div className="min-w-200 grid gap-8 lg:grid-cols-2">
              {allPostsData.map(
                ({ id, date, title, description, language, categories }) => {
                  return (selectedCategory === "" ||
                    categoryExists(selectedCategory, categories)) &&
                    (searchTerm === "" ||
                      searchTermCheck(searchTerm, [
                        title,
                        description,
                        language,
                        categories.join(" "),
                      ])) ? (
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
      </div>
    </Layout>
  );
}

function searchTermCheck(searchTerm, includeList) {
  for (const element of includeList) {
    if (element.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    }
  }
  return false;
}

function categoryExists(selectedCategory, categories) {
  return categories.some(
    (category) => category.toLowerCase() === selectedCategory.toLowerCase()
  );
}
