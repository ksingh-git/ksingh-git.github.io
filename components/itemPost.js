import Link from "next/link";
import Date from "../components/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faMedapps,
  faJs,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";

export default function ItemPost({
  id,
  date,
  title,
  description,
  language,
  categories,
}) {
  return (
    <div
      key={id}
      className="p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
    >
      <article className="flex flex-col h-full p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center mb-5 text-gray-500">
          <span className="bg-primary-100 text-primary-800 text-xl font-medium inline-flex justify-center items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
            <span
              className="mr-1 mb-1 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {getLanguageIcon({ language })}
            </span>

            {language}
          </span>
          <span className="text-xl">
            <Date dateString={date} />
          </span>
        </div>
        <Link href={`/posts/${id}`}>
          <h2 className="hover:underline cursor-pointer mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h2>
        </Link>
        <p className="grow mb-5 text-xl font-light text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <div className="flex">
          {categories.map((category) => (
            <span className="p-2">
              <Link key={category} href={`/category/${category}`}>
                <span class="bg-gray-100 text-gray-800 text-s font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                  #{category}
                </span>
              </Link>
            </span>
          ))}
        </div>
      </article>
    </div>
  );
  function getLanguageIcon({ language }) {
    switch (language.toLowerCase()) {
      case "python":
        return <FontAwesomeIcon icon={faPython} />;
      case "javascript":
        return <FontAwesomeIcon icon={faJs} />;
      case "html":
        return <FontAwesomeIcon icon={faHtml5} />;
      default:
        return <FontAwesomeIcon icon={faMedapps} />;
    }
  }
}
