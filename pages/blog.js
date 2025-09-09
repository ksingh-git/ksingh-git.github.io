import Head from "next/head";
import Layout from "../components/layout";
import {getSortedPostsData} from "../lib/posts";
import ThemeModeSvgComponent from "../components/theme_mode";
import {useState, useEffect} from "react";
import ItemPost from "../components/itemPost";
import {getCategoriesList} from "../lib/categories";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    const allCategories = await getCategoriesList();
    return {
        props: {
            allPostsData, allCategories,
        },
    };
}

export default function Home({allPostsData, allCategories}) {
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

    return (<Layout>
        <Head>
            <title>Snippets</title>
        </Head>
        <div
            className="relative flex min-h-screen w-full cursor-default content-center justify-center bg-white align-middle dark:bg-gray-900 overflow-x-hidden">
            <div className="relative mx-auto my-8 w-full max-w-screen-xl px-4 py-8 md:m-8 lg:px-6 lg:py-16">
                {/* Theme Toggle */}
                <div className="absolute right-2 top-0">
                    <ThemeModeSvgComponent className="cursor-pointer"/>
                </div>

                {/* Title */}
                <h1 className="mx-auto mb-4 max-w-screen-sm select-none text-center text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    Snippets
                </h1>

                {/* Search Bar */}
                <div className="mx-auto mb-4 w-full max-w-screen-lg">
                    <input
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                        }}
                        type="search"
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder="Search"
                        required=""
                    />
                </div>

                {/* Categories */}
                <ul className="my-8 flex flex-wrap justify-center gap-2 text-center font-medium text-gray-500 dark:text-gray-400">
                    {allCategories.map((category) => (<li key={category}>
                        <button
                            onClick={() => {
                                selectedCategory !== category ? setSelectedCategory(category) : setSelectedCategory("");
                            }}
                            type="button"
                            className={`rounded-full border px-4 py-2 text-sm sm:text-base font-medium transition ${selectedCategory === category ? "text-blue-700 ring-2 ring-gray-400 dark:text-white dark:ring-gray-700" : "text-gray-900 dark:text-gray-400"} bg-white hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
                        >
                            {category.toUpperCase()}
                        </button>
                    </li>))}
                </ul>

                {/* Posts */}
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
                    {allPostsData.map(({id, date, title, description, language, categories}) => {
                        if ((selectedCategory === "" || categoryExists(selectedCategory, categories)) && (searchTerm === "" || searchTermCheck(searchTerm, [title, description, language, categories.join(" "),]))) {
                            numberOfPosts++;
                            return (<ItemPost
                                key={id}
                                id={id}
                                date={date}
                                title={title}
                                description={description}
                                language={language}
                                categories={categories}
                            />);
                        }
                    })}
                </div>

                {/* No Results */}
                {!numberOfPosts ? (<div className="flex flex-col items-center">
                    <p className="mb-2 text-center text-2xl md:text-3xl lg:text-4xl font-normal text-gray-500 dark:text-gray-400">
                        No Results
                    </p>
                    <button
                        type="button"
                        onClick={handleClear}
                        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                        CLEAR
                    </button>
                </div>) : null}
            </div>
        </div>
    </Layout>);
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
    return categories.some((category) => category.toLowerCase() === selectedCategory.toLowerCase());
}
