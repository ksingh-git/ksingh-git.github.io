const Experience = () => {
    return (<div className="relative flex w-full justify-center bg-white dark:bg-gray-900">
        <div className="mx-auto my-12 max-w-screen-md px-4 py-8 md:my-16 lg:px-6 lg:py-16">

            {/* Section Title */}
            <h1 className="mb-16 text-center text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-6xl xl:text-8xl">
                Experience
            </h1>

            <ol className="relative border-s border-gray-200 dark:border-gray-700">

                {/* Experience 1 */}
                <li className="mb-12 ms-6">
            <span
                className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 ring-8 ring-white dark:bg-purple-900 dark:ring-gray-900">
              <svg
                  className="h-2.5 w-2.5 text-purple-800 dark:text-purple-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
              >
                <path
                    d="M6 2a1 1 0 0 0-1 1v1H3a2 2 0 0 0-2 2v1h18V6a2 2 0 0 0-2-2h-2V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1ZM0 9v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9H0Zm5 2h10a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Z"/>
              </svg>
            </span>
                    <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                        Software Engineer – Company A
                    </h3>
                    <time
                        className="block mb-3 text-base font-light leading-none text-gray-500 dark:text-gray-400 md:text-lg">
                        2022 – Present
                    </time>
                    <p className="text-base font-light text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
                        Working on full-stack applications, optimizing backend APIs, and
                        leading feature development for scalable systems.
                    </p>
                </li>

                {/* Experience 2 */}
                <li className="mb-12 ms-6">
            <span
                className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-100 ring-8 ring-white dark:bg-yellow-900 dark:ring-gray-900">
              <svg
                  className="h-2.5 w-2.5 text-yellow-800 dark:text-yellow-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
              >
                <path
                    d="M6 2a1 1 0 0 0-1 1v1H3a2 2 0 0 0-2 2v1h18V6a2 2 0 0 0-2-2h-2V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1ZM0 9v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9H0Zm5 2h10a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Z"/>
              </svg>
            </span>
                    <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                        Intern – Company B
                    </h3>
                    <time
                        className="block mb-3 text-base font-light leading-none text-gray-500 dark:text-gray-400 md:text-lg">
                        Jan 2021 – Dec 2021
                    </time>
                    <p className="text-base font-light text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
                        Built internal tools, collaborated with the engineering team, and
                        gained hands-on experience in modern web development.
                    </p>
                </li>
            </ol>
        </div>
    </div>);
};

export default Experience;
