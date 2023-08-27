import { useRouter } from "next/router";
import Pagination from "../../components/pagination";
import { getPaginatedPosts, getTotalPosts } from "../../lib/posts";

const PostsPage = ({ posts, totalPages }) => {
  const router = useRouter();
  const currentPage = Number(router.query.page) || 1;

  return (
    <div>
      {/* Render your list of posts */}
      {posts.map((post) => (
        // Render post content
        <div>Mo</div>
      ))}

      {/* Render the Pagination component */}
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const postsPerPage = 4; // Number of posts to display per page
  const page = context.query.page || 1;
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

export default PostsPage;
