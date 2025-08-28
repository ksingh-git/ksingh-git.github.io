import Linkedin from "../icons/linkedin";
import Github from "../icons/github";
import HackerRank from "../icons/hackerrank";
import LeetCode from "../icons/leetcode";

const Footer = () => {
    return (
        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl">
                <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a
                href="/" className="hover:underline">Kamal Singh</a>. All Rights Reserved.
            </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a href="https://www.linkedin.com/in/kamalsingh-ln/"
                           className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <Linkedin/>
                        </a>
                        <a href="https://github.com/ksingh-git"
                           className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <Github/>
                        </a>
                        <a href="https://www.hackerrank.com/profile/kamalsingh_hr"
                           className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <HackerRank/>
                        </a>
                        <a href="https://leetcode.com/u/kamsingh-leet/"
                           className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <LeetCode/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>)
}
export default Footer