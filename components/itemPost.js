import Link from "next/link";
import Date from "../components/date";
import PythonIcon from "../icons/language/pythonIcon";
import AwsIcon from "../icons/language/awsIcon";
import JavascriptIcon from "../icons/language/javascriptIcon";
import HtmlIcon from "../icons/language/htmlIcon";
import CssIcon from "../icons/language/cssicon";
import ReactIcon from "../icons/language/reactIcon";
import AngularIcon from "../icons/language/angularIcon";
import GitIcon from "../icons/language/gitIcon";
import GithubIcon from "../icons/language/githubIcon";
import AiIcon from "../icons/language/aiIcon";
import DefaultIcon from "../icons/language/defaultIcon";
import SecurityIcon from "../icons/language/securityIcon";
import JavaIcon from "../icons/language/javaIcon";

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
            <article
                className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <div className="mb-5 flex items-center justify-between text-gray-500">
          <span
              className="bg-primary-100 text-primary-800 dark:bg-primary-200 dark:text-primary-800 inline-flex items-center justify-center rounded px-2.5 py-0.5 text-xl font-medium">
            <span
                className="mb-1 mr-1 h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
              {getLanguageIcon({language})}
            </span>
          </span>
                    <span className="select-none text-xl">
            <Date dateString={date}/>
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
                <span
                    className="text-s mr-2 rounded bg-gray-100 px-2.5 py-0.5 font-semibold text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                  #{category}
                </span>
              </Link>
            </span>
                    ))}
                </div>
            </article>
        </div>
    );

    function getLanguageIcon({language}) {
        switch (language.toLowerCase()) {
            case "python":
                return <PythonIcon/>;
            case "aws":
                return <AwsIcon/>;
            case "javascript":
                return <JavascriptIcon/>;
            case "html":
                return <HtmlIcon/>;
            case "css":
                return <CssIcon/>;
            case "react":
                return <ReactIcon/>;
            case "angular":
                return <AngularIcon/>;
            case "git":
                return <GitIcon/>;
            case "github":
                return <GithubIcon/>;
            case "ai":
                return <AiIcon/>;
            case "security":
                return <SecurityIcon/>;
            case "automation":
                return <AiIcon/>;
            case "java":
                return <JavaIcon/>;
            default:
                return <DefaultIcon/>;
        }
    }
}
