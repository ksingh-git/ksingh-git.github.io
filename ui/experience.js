const Experience = () => {
    return (<div className="relative flex w-full justify-center bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-lg px-4 py-8 md:my-16 lg:px-6">

            {/* Section Title */}
            <div className="mb-12 text-center">
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl">
                    Experience
                </h2>
                <figure className="max-w-screen-lg mx-auto text-center">
                    <blockquote>
                        <p className="text-2xl text-gray-900 dark:text-white">"Experience is the teacher of all things."
                            - Julius Caesar</p>
                    </blockquote>
                </figure>
            </div>

            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {/* Recent Exp */}
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
                        Software Engineer
                    </h3>
                    <time
                        className="block mb-3 text-base font-light leading-none text-gray-500 dark:text-gray-400 md:text-lg">
                        Capgemini • Oct 2022 – Present
                    </time>
                    <ul className="ml-6 list-disc text-base font-light text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
                        <li>Developed extensible Java utilities to support test automation frameworks and improving
                            maintainability.
                        </li>
                        <li>Automated UI workflows and API validations for financial applications, increasing efficiency
                            by 30%.
                        </li>
                        <li>Built a Java-based PDF parser to auto-validate customer data, reducing manual work by 70%.
                        </li>
                    </ul>
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
                        Software Trainee
                    </h3>
                    <time
                        className="block mb-3 text-base font-light leading-none text-gray-500 dark:text-gray-400 md:text-lg">
                        Capgemini • Jan 2022 – Apr 2022
                    </time>
                    <ul className="ml-6 list-disc text-base font-light text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
                        <li>Gained hands-on experience in Java, Python, SQL, and automation testing.</li>
                        <li>Assisted in building proof-of-concept automation scripts for internal projects.</li>
                        <li>Collaborated with senior engineers to learn Agile methodologies,and software engineering.
                        </li>

                    </ul>
                </li>
            </ol>
        </div>
    </div>);
};

export default Experience;
