// components/Pagination.js
import Link from "next/link";

const Pagination = ({ currentPage, totalPages }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <nav>
        <ul class="inline-flex h-10 -space-x-px text-xl">
          {/* Previous Button */}
          <Link href={currentPage !== 1 ? `/content/${currentPage - 1}` : ``}>
            <button
              className={`ml-0 flex h-10 items-center justify-center rounded-l-lg border border-gray-300 bg-white px-4 leading-tight text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 
              ${
                currentPage === 1
                  ? "cursor-not-allowed line-through decoration-pink-500"
                  : "hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
              }`}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </Link>
          {/* Pages in number - 1,2,3,.... */}
          {pages.map((page) => (
            <Link href={`/content/${page}`} key={page}>
              <div
                className={`
                 ${
                   page === currentPage
                     ? "flex h-10 items-center justify-center border border-gray-300 bg-blue-50 px-4 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                     : "flex h-10 items-center justify-center border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                 }`}
              >
                {page}
              </div>
            </Link>
          ))}
          {/* Next button */}
          <Link
            href={
              currentPage !== totalPages
                ? `/content/${currentPage + 1}`
                : `/content/${currentPage}`
            }
          >
            <button
              className={`flex h-10 items-center justify-center rounded-r-lg border border-gray-300 
              bg-white px-4 leading-tight text-gray-500  
              dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 
               ${
                 currentPage === totalPages
                   ? "cursor-not-allowed line-through decoration-pink-500"
                   : "hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
               }`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
