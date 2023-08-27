// components/Pagination.js
import Link from "next/link";

const Pagination = ({ currentPage, totalPages }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <nav aria-label="Page navigation example">
        <ul class="inline-flex h-10 -space-x-px text-base">
          {pages.map((page) => (
            <Link href={`/content/${page}`} key={page}>
              <a
                className={`flex h-10 items-center justify-center border border-gray-300 px-4 ${
                  page === currentPage
                    ? "bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    : "bg-white leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
              >
                {page}
              </a>
            </Link>
          ))}
        </ul>
      </nav>

      {pages.map((page) => (
        <Link href={`/page/${page}`} key={page}>
          <a className={page === currentPage ? "active" : ""}>{page}</a>
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
