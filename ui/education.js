const Education = () => {
    return (<div className="relative flex w-full justify-center bg-white dark:bg-gray-900">
        <div className="mx-auto my-12 max-w-screen-md px-4 py-8 md:my-16 lg:px-6 lg:py-16">

            {/* Section Title */}
            <h1 className="mb-16 text-center text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-6xl xl:text-8xl">
                Education
            </h1>

            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {/* B.Tech */}
                <li className="mb-12 ms-6">
            <span
                className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
              <svg
                  className="h-2.5 w-2.5 text-blue-800 dark:text-blue-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
              >
                <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
              </svg>
            </span>
                    <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                        Bachelor of Technology in Computer Science
                    </h3>
                    <time
                        className="block mb-3 text-base font-light leading-none text-gray-500 dark:text-gray-400 md:text-lg">
                        2017 – 2021 • XYZ University
                    </time>
                    <p className="text-base font-light text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
                        Focused on software engineering, data structures, and full-stack
                        development.
                    </p>
                </li>

                {/* High School */}
                <li className="mb-12 ms-6">
            <span
                className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 ring-8 ring-white dark:bg-green-900 dark:ring-gray-900">
              <svg
                  className="h-2.5 w-2.5 text-green-800 dark:text-green-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
              >
                <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
              </svg>
            </span>
                    <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                        High School
                    </h3>
                    <time
                        className="block mb-3 text-base font-light leading-none text-gray-500 dark:text-gray-400 md:text-lg">
                        2015 – 2017 • ABC Senior Secondary School
                    </time>
                    <p className="text-base font-light text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
                        Specialized in Science stream with Mathematics and Computer Science.
                    </p>
                </li>
            </ol>
        </div>
    </div>);
};

export default Education;
