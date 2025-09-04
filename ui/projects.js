import {useEffect, useRef} from "react";

const Projects = () => {
    const anim1Ref = useRef(null);
    const anim2Ref = useRef(null);
    const anim3Ref = useRef(null);
    const anim4Ref = useRef(null);

    useEffect(() => {
        const players = [anim1Ref.current, anim2Ref.current, anim3Ref.current, anim4Ref.current];

        const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    const player = entry.target;
                    if (entry.isIntersecting) {
                        player.seek(0); // restart from beginning
                        player.play();  // play animation
                    } else {
                        player.stop();  // stop when out of view
                    }
                });
            }, {threshold: 0.5} // play when 50% visible
        );

        players.forEach((player) => {
            if (player) observer.observe(player);
        });

        return () => {
            players.forEach((player) => {
                if (player) observer.unobserve(player);
            });
        };
    }, []);

    return (<section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-8 mx-auto max-w-screen-xl lg:px-8 ">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-8">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl">
                        Projects
                    </h2>
                    <figure className="p-2 max-w-screen-lg mx-auto text-center">
                        <blockquote>
                            <p className="text-2xl text-gray-900 dark:text-white">
                                "Art is never finished, only abandoned." - Leonardo da Vinci
                            </p>
                        </blockquote>
                    </figure>
                </div>
            </div>

            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                {/* Project 1 */}
                <div
                    className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                    <div className="hidden w-full h-full rounded-lg sm:block sm:rounded-none sm:rounded-l-lg">
                        <dotlottie-player
                            ref={anim1Ref}
                            src="https://lottie.host/8a9752cf-21eb-4469-95d9-56ce6d70ebc0/BOR7SbzqBU.lottie"
                            speed="1"
                            className="w-80 h-80"
                        ></dotlottie-player>
                    </div>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Ai Trading Application</a>
                        </h3>
                        <span className="text-gray-500 dark:text-gray-400">PYTHON</span>
                        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                            An intelligent trading platform powered by AI that analyzes market trends,
                            automates strategies, and helps investors make smarter, data-driven decisions
                            with real-time insights and precision.
                        </p>
                    </div>
                </div>

                {/* Project 2 */}
                <div
                    className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                    <div className="hidden w-full h-full rounded-lg sm:block sm:rounded-none sm:rounded-l-lg">
                        <dotlottie-player
                            ref={anim2Ref}
                            src="https://lottie.host/da75111e-b43d-4d49-8ace-32c50b5304f9/6TeyPW3w7I.lottie"
                            speed="1"
                            className="w-80 h-80"
                        ></dotlottie-player>
                    </div>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Woman Safety Android App</a>
                        </h3>
                        <span className="text-gray-500 dark:text-gray-400">JAVA</span>
                        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                            A mobile application designed to enhance women’s safety with real-time location
                            tracking, emergency alerts, and quick access to trusted contacts, built using Java
                            for reliable and user-friendly performance.
                        </p>
                    </div>
                </div>

                {/* Project 3 */}
                <div
                    className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                    <div className="hidden w-full h-full rounded-lg sm:block sm:rounded-none sm:rounded-l-lg">
                        <dotlottie-player
                            ref={anim3Ref}
                            src="https://lottie.host/841bf82c-82ca-4ce0-804c-f8219feb292b/HXfSioX3tZ.lottie"
                            speed="3"
                            className="w-80 h-80"
                        ></dotlottie-player>
                    </div>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Snippets Blog</a>
                        </h3>
                        <span className="text-gray-500 dark:text-gray-400">NEXT.JS</span>
                        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                            A modern blog platform built with Next.js that features fast performance,
                            clean design, and SEO-friendly architecture, allowing developers to share
                            code snippets, tutorials, and insights with ease.
                        </p>
                    </div>
                </div>
                {/* Project 4 */}
                <div
                    className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                    <div className="hidden w-full h-full rounded-lg sm:block sm:rounded-none sm:rounded-l-lg">
                        <dotlottie-player
                            ref={anim4Ref}
                            src="https://lottie.host/72c7225e-238b-4df3-b760-ffc72e1feaf2/KMTbyRwyzH.lottie"
                            speed="1"
                            className="w-80 h-80"
                        ></dotlottie-player>
                    </div>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Self Driving Car Simulation</a>
                        </h3>
                        <span className="text-gray-500 dark:text-gray-400">PYTHON</span>
                        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                            A JavaScript-based self-driving car simulation that demonstrates core
                            autonomous driving concepts such as lane following and obstacle detection,
                            built to visualize how AI models can process and respond to driving environments.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>);
};

export default Projects;
