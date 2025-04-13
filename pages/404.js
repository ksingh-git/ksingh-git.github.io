import Link from "next/link";
import Layout from "../components/layout";

// pages/404.js
export default function Custom404() {
  return (
    <Layout>
      <section className="flex h-screen w-screen items-center justify-center bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-8xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-8xl lg:text-9xl">
              404
            </h1>
            <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Something's missing.
            </p>
            <p className="mb-4 text-xl font-light text-gray-500 dark:text-gray-400 md:text-2xl">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.
            </p>
            <Link href={"/"}>
              <button
                type="button"
                className="
                  mb-2 mr-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 
                  text-base font-medium text-gray-900 hover:bg-gray-100 focus:outline-none 
                  focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 
                  dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 
                  dark:focus:ring-gray-700 md:text-lg
                "
              >
                Back to Homepage
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
