import Head from "next/head";
import Layout from "../components/layout";
import PropTypes from "prop-types";
import { getSortedPostsData } from "../lib/posts";
import ThemeModeSvgComponent from "../components/theme_mode";
import { useState, useEffect } from "react";
import ItemPost from "../components/itemPost";
import { getCategoriesList } from "../lib/categories";

/**
 * Fetches and returns sorted posts data and categories list as props.
 *
 * @returns {Object} An object containing props for all posts data and all categories.
 * @returns {Array} props.allPostsData - Sorted data of all posts.
 * @returns {Array} props.allCategories - List of all categories.
 */
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

/**
 * The homepage of the site, showing all posts with a search bar to filter posts
 * and a list of categories to filter posts by category.
 *
 * @param {Object} props - Props passed to the component.
 * @param {Array} props.allPostsData - Sorted data of all posts.
 * @param {Array} props.allCategories - List of all categories.
 * @returns {ReactElement} - The JSX element representing the component.
 */
export default function Home({ allPostsData, allCategories }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  let numberOfPosts = 0;

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  const handleClear = () => {
    setSelectedCategory("");
    setSearchTerm("");
  };

  return (
    <Layout>
      <Head>
        <title>Snippets</title>
      </Head>
      <div className="relative flex h-full min-w-min cursor-default content-center justify-center bg-white align-middle dark:bg-gray-900 md:w-full">
        <div className="relative mx-auto my-8 max-w-screen-xl px-4 py-8 md:m-8 lg:px-6 lg:py-16">
          <div className="absolute right-2 top-0">
            <ThemeModeSvgComponent className="cursor-pointer" />
          </div>
          <h1 className="mx-auto mb-4 max-w-screen-sm select-none text-center text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Snippets
          </h1>

          {/* Search Bar - mobile and tab screens */}
          <div className="mx-auto mb-4 max-w-screen-lg tracking-tight text-gray-900 dark:text-white">
            <div className="top-2 z-auto content-center backdrop-blur-sm">
              <input
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                type="search"
                className="text-md block w-full max-w-5xl rounded-lg border border-gray-300 bg-gray-50 p-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
                    selectedCategory === category
                      ? "z-10 text-blue-700 outline-none ring-4 ring-gray-400 dark:text-white dark:ring-gray-700"
                      : "text-gray-900 dark:text-gray-400"
                  }  dark:border-gray-600 dark:bg-gray-800  dark:hover:bg-gray-700 dark:hover:text-white `}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
          {/* Posts */}
          <div className="min-w-200 grid gap-8 lg:grid-cols-2">
            {allPostsData.map(
              ({ id, date, title, description, language, categories }) => {
                if (
                  (selectedCategory === "" ||
                    categoryExists(selectedCategory, categories)) &&
                  (searchTerm === "" ||
                    searchTermCheck(searchTerm, [
                      title,
                      description,
                      language,
                      categories.join(" "),
                    ]))
                ) {
                  numberOfPosts++;
                  return (
                    <ItemPost
                      key={id}
                      id={id}
                      date={date}
                      title={title}
                      description={description}
                      language={language}
                      categories={categories}
                    />
                  );
                }
              }
            )}
          </div>
          {!numberOfPosts ? (
            <div className="flex flex-col items-center">
              <p className="mb-2 text-center text-3xl font-normal text-gray-500 dark:text-gray-400 sm:text-2xl lg:text-4xl xl:text-4xl">
                No Results
              </p>
              <button
                type="button"
                onClick={handleClear}
                className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                CLEAR
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </Layout>
  );
}

/**
 * Checks if the given search term is present in any of the elements in the
 * given list. Case is ignored.
 *
 * @param {string} searchTerm - The term to search for.
 * @param {Array<string>} includeList - The list of strings to search in.
 * @returns {boolean} - True if the search term is found, false otherwise.
 */
function searchTermCheck(searchTerm, includeList) {
  for (const element of includeList) {
    if (element.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    }
  }
  return false;
}

/**
 * Checks if the given selected category exists in the given list of categories.
 * Case is ignored.
 *
 * @param {string} selectedCategory - The category to search for.
 * @param {Array<string>} categories - The list of categories to search in.
 * @returns {boolean} - True if the selected category exists, false otherwise.
 */
function categoryExists(selectedCategory, categories) {
  return categories.some(
    (category) => category.toLowerCase() === selectedCategory.toLowerCase()
  );
}

Home.propTypes = {
  allPostsData: PropTypes.array,
  allCategories: PropTypes.array,
};
