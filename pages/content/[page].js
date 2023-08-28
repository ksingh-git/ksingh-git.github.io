import { useRouter } from "next/router";
import Pagination from "../../components/pagination";
import { getPaginatedPosts, getTotalPosts } from "../../lib/posts";
import ItemPost from "../../components/itemPost";
import Head from "next/head";
import Layout from "../../components/layout";
import ThemeModeSvgComponent from "../../components/theme_mode";
const PostsPage = ({ posts, totalPages }) => {
  const router = useRouter();
  const currentPage = Number(router.query.page) || 1;

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

            {/* Posts */}
            <div className="min-w-200 grid gap-8 lg:grid-cols-2">
              {posts.map(
                ({ id, date, title, description, language, categories }) => {
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
              )}
            </div>
            {/* Render the Pagination component */}
            <div
              className="mx-auto mb-4 max-w-screen-sm select-none text-center text-7xl font-extrabold tracking-tight
           text-gray-900 underline dark:text-white"
            >
              {totalPages > 1 ? (
                <Pagination currentPage={currentPage} totalPages={totalPages} />
              ) : null}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const postsPerPage = 4; // Number of posts to display per page
  const page = params.page || 1;
  const posts = await getPaginatedPosts(page, postsPerPage);
  const totalPosts = await getTotalPosts(); // Implement this function to get the total number of posts
  const totalPages = Math.ceil(totalPosts / postsPerPage); // Calculate the total number of pages

  return {
    props: {
      posts,
      totalPages,
    },
  };
}
export async function getStaticPaths() {
  const postsPerPage = 4; // Number of posts to display per page
  const totalPosts = await getTotalPosts(); // Implement this function to get the total number of posts
  const totalPages = Math.ceil(totalPosts / postsPerPage); // Calculate the total number of pages
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: {
      page: (i + 1).toString(), // Pages are 1-indexed
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default PostsPage;
