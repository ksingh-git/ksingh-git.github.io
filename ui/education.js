const Education = () => {
    return (
        <div className="relative flex w-full justify-center bg-white dark:bg-gray-900">
            <div className="mx-auto my-12 max-w-screen-lg px-4 md:my-16 lg:px-6">
                <section className="bg-white dark:bg-gray-900">
                    <div className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
                        {/* Text Section */}
                        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <div className="mb-12 text-center">
                                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl">
                                    Education
                                </h2>
                                <figure className="max-w-screen-md mx-auto text-center">
                                    <blockquote>
                                        <p className="text-2xl text-gray-900 dark:text-white">
                                            "Education is not the learning of facts,
                                            but the training of the mind to think." – Albert Einstein
                                        </p>
                                    </blockquote>
                                </figure>
                            </div>

                            {/* Terna Engineering Content */}
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                Terna Engineering College – Bachelor of Engineering
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                Computer Engineering | 2019 – 2022 | CGPA: 8.53/10
                            </p>
                            <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                                <li>Built a strong foundation in computer science, data structures, and algorithms.</li>
                                <li>Studied key subjects like Operating Systems, DBMS, Computer Networks, and Software Engineering.</li>
                                <li>Worked on projects including a Women Safety App, URL Shortener, and a personal blog.</li>
                                <li>Developed teamwork and problem-solving skills through collaborative group projects.</li>
                                <li>Discovered a passion for full-stack development and automation testing.</li>
                            </ul>
                        </div>

                        {/* Images Section */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <img
                                className="w-full rounded-lg"
                                src="https://raw.githubusercontent.com/ksingh-git/ksingh-git.github.io/refs/heads/main/public/images/Terna1.jpg"
                                alt="Terna Engineering College 1"
                            />
                            <img
                                className="mt-4 w-full lg:mt-10 rounded-lg"
                                src="https://raw.githubusercontent.com/ksingh-git/ksingh-git.github.io/refs/heads/main/public/images/Terna2.jpg"
                                alt="Terna Engineering College 2"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Education;
