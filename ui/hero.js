import ThemeModeSvgComponent from "../components/theme_mode";

const Hero = () => {
  return (
    <div className="relative flex h-full min-w-min cursor-default content-center justify-center bg-white align-middle dark:bg-gray-900 md:w-full">
      <div className="relative mx-auto my-8 max-w-screen-xl px-4 py-8 md:m-8 lg:px-6 lg:py-16">
        <div className="absolute right-2 top-0">
          <ThemeModeSvgComponent className="cursor-pointer" />
        </div>
        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto grid max-w-screen-xl px-4 py-4 lg:grid-cols-12 lg:gap-8 lg:py-8 xl:gap-0">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="mb-4 max-w-2xl text-5xl font-extrabold leading-none tracking-tight dark:text-white md:text-6xl xl:text-8xl">
                Kamal Singh
              </h1>
              <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                Software Engineer with a passion for building scalable web
                applications and working across the full stack.
              </p>
            </div>
            <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
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
