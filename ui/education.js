const Education2 = () => {
    return (<div className="relative flex w-full justify-center bg-white dark:bg-gray-900">
        <div className="mx-auto my-12 max-w-screen-lg px-4 py-8 md:my-16 lg:px-6 lg:py-16">
            <section className="bg-white dark:bg-gray-900">
                <div
                    className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <div className="mb-12 text-center">
                            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl">
                                Education
                            </h2>
                            <figure className="max-w-screen-md mx-auto text-center">
                                <blockquote>
                                    <p className="text-2xl text-gray-900 dark:text-white">"Education is not the learning
                                        of facts,
                                        but the training of the mind to think" - Albert Einstein</p>
                                </blockquote>
                            </figure>
                        </div>
                        <p className="mb-4">We are strategists, designers and developers. Innovators and problem
                            solvers. Small enough to be simple and quick, but big enough to deliver the scope you want
                            at the pace you need. Small enough to be simple and quick, but big enough to deliver the
                            scope you want at the pace you need.</p>
                        <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to
                            be simple and quick.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg"
                             src="https://github.com/ksingh-git/ksingh-git.github.io/blob/main/public/images/Terna1.webp"
                             alt="office content 1"/>
                        <img className="mt-4 w-full lg:mt-10 rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                             alt="office content 2"/>
                    </div>
                </div>
            </section>
        </div>
    </div>);
};

export default Education2;
