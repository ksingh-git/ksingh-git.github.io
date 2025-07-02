import ThemeModeSvgComponent from "../components/theme_mode";

const Hero = () => {
  return (
    <div className="relative flex h-full min-w-min cursor-default content-center justify-center bg-white align-middle dark:bg-gray-900 md:w-full">
      <div className="relative mx-auto my-8 max-w-screen-xl px-4 py-8 md:m-8 lg:px-6 lg:py-16">
        <div className="absolute right-2 top-0">
          <ThemeModeSvgComponent className="cursor-pointer" />
        </div>
        <section class="bg-white dark:bg-gray-900">
          <div class="mx-auto grid max-w-screen-xl px-4 py-4 lg:grid-cols-12 lg:gap-8 lg:py-8 xl:gap-0">
            <div class="mr-auto place-self-center lg:col-span-7">
              <h1 class="mb-4 max-w-2xl text-5xl font-extrabold leading-none tracking-tight dark:text-white md:text-6xl xl:text-8xl">
                Kamal Singh
              </h1>
              <p class="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                Software Engineer with a passion for building scalable web
                applications and working across the full stack.
              </p>
              <a
                href="/blog"
                class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Go to Blog
                <svg
                  class="-mr-1 ml-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div class="hidden lg:col-span-5 lg:mt-0 lg:flex">
              <dotlottie-player
                src="https://lottie.host/a4b45020-cc3d-479b-b9c9-bea4ef720150/4bQEIJFbo8.lottie"
                background="transparent"
                speed="1"
                className="w-100 h-100"
                loop
                autoplay
              ></dotlottie-player>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
