import Link from "next/link";
import Date from "../components/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faMedapps,
  faJs,
  faHtml5,
  faCss3Alt,
  faReact,
  faAws,
  faAngular,
  faGithub,
  faGit,
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
      className="p-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
    >
      <article className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
        <div className="mb-5 flex items-center justify-between text-gray-500">
          <span className="bg-primary-100 text-primary-800 dark:bg-primary-200 dark:text-primary-800 inline-flex items-center justify-center rounded px-2.5 py-0.5 text-xl font-medium">
            <span
              className="mr-1 mb-1 h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {getLanguageIcon({ language })}
            </span>
          </span>
          <span className="select-none text-xl">
            <Date dateString={date} />
          </span>
        </div>
        <Link href={`/posts/${id}`}>
          <h2 className="mb-2 cursor-pointer text-4xl font-bold tracking-tight text-gray-900 hover:underline dark:text-white">
            {title}
          </h2>
        </Link>
        <p className="mb-5 grow text-xl font-light text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <div className="flex select-none">
          {categories.map((category) => (
            <span className="p-2" key={category}>
              <Link key={category} href={`/category/${category}`}>
                <span className="text-s mr-2 rounded bg-gray-100 px-2.5 py-0.5 font-semibold text-gray-800 dark:bg-gray-700 dark:text-gray-300">
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
      case "aws":
        return <FontAwesomeIcon icon={faAws} />;
      case "javascript":
        return <FontAwesomeIcon icon={faJs} />;
      case "html":
        return <FontAwesomeIcon icon={faHtml5} />;
      case "css":
        return <FontAwesomeIcon icon={faCss3Alt} />;
      case "react":
        return <FontAwesomeIcon icon={faReact} />;
      case "angular":
        return <FontAwesomeIcon icon={faAngular} />;
      case "git":
        return <FontAwesomeIcon icon={faGit} />;
      case "github":
        return <FontAwesomeIcon icon={faGithub} />;
      default:
        return <FontAwesomeIcon icon={faMedapps} />;
    }
  }
}
