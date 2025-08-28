import ThemeModeSvgComponent from "../components/theme_mode";
import Linkedin from "../icons/linkedin";
import Github from "../icons/github";
import Leetcode from "../icons/leetcode";
import Hackerrank from "../icons/hackerrank";
import BlogIcon from "../icons/blogIcon";

const Hero = () => {
    return (<div
        className="relative flex h-full min-w-min cursor-default justify-center bg-white dark:bg-gray-900 md:w-full">
        {/* Theme Toggle */}
        <div className="absolute right-4 top-4">
            <ThemeModeSvgComponent className="cursor-pointer"/>
        </div>
        <div
            className="relative mx-auto my-8 flex max-w-screen-xl flex-col items-center px-4 py-8 md:m-8 lg:flex-row lg:items-center lg:justify-between lg:px-6 lg:py-16">


            {/* Text Section */}
            <div className="flex-1 text-center lg:text-left mt-12 lg:mt-0">
                <h1 className="mb-4 max-w-2xl text-5xl font-extrabold leading-none tracking-tight dark:text-white md:text-6xl xl:text-8xl">
                    Kamal Singh
                </h1>
                <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                    Software Engineer with a passion for building scalable web
                    applications and working across the full stack.
                </p>
                <ul className="flex justify-center lg:justify-start space-x-4 sm:mt-0">

                    <li>
                        <a href="#" title={"Linkedin"} target="_blank"
                           rel="noopener noreferrer"
                           className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <Linkedin/>
                        </a>
                    </li>
                    <li>
                        <a href="#" title={"Github"} target="_blank"
                           rel="noopener noreferrer"
                           className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <Github/>
                        </a>
                    </li>
                    <li>
                        <a href="#" title={"Leetcode"} target="_blank"
                           rel="noopener noreferrer"
                           className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <Leetcode/>
                        </a>
                    </li>
                    <li>
                        <a href="#" title={"Hackerrank"} target="_blank"
                           rel="noopener noreferrer"
                           className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <Hackerrank/>
                        </a>
                    </li>
                    <li>
                        <a href="/blog" title={"Blog"} target="_blank"
                           rel="noopener noreferrer"
                           className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <BlogIcon/>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Animation Section */}
            <div className="hidden flex-1 mt-8 lg:mt-0 lg:flex lg:justify-center">
                <dotlottie-player
                    src="https://lottie.host/a4b45020-cc3d-479b-b9c9-bea4ef720150/4bQEIJFbo8.lottie"
                    speed="1"
                    className="w-80 h-80"
                    loop
                    autoplay
                ></dotlottie-player>
            </div>
        </div>
    </div>);
};

export default Hero;
