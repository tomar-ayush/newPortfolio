import Image from "next/image";
import profile from "../../assets/profile.jpg";
import { DATA } from "../../constants/aboutme.config";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

const Hero = () => {
  return (
    <>
      <div className="absolute inset-0 flex md:mt-52 mt-28 px-2 sm:px-0 mx-4 md:mx-8 lg:mx-0 text-muted-foreground ">
        <div className="relative z-40 mx-auto  max-w-[52rem] ">
          <div className="flex flex-col justify-between space-y-10  md:flex-row md:space-x-10 md:space-y-0">
            <div>
              <h1 className="max-w-3xl text-2xl font-bold dark:text-zinc-50 md:text-5xl md:leading-tight ">
                Hey! I'm{" "}
                <RoughNotation
                  type="highlight"
                  show
                  color="#f59e0b"
                  animationDelay={1000}
                >
                  Ayush Pratap Singh
                </RoughNotation>{" "}
              </h1>
              <p className="mt-8 max-w-2xl text-sm tracking-wide text-muted-foreground md:text-base md:leading-loose">
                I am a third-year B.Tech Computer Science student with a strong passion for backend and full-stack web development. I enjoy building scalable, efficient systems and diving deep into understanding how things work at a low level. With a solid foundation in programming languages like Java,  C++, JavaScript, and TypeScript, I have honed my skills in frameworks such as React.js, Node.js, Express.js, and Next.js.
              </p>
            </div>
            <div className="order-first md:order-last">
              <Image
                src={profile}
                alt="heroimage"
                className="rounded-2xl cursor-pointer h-32 w-32 md:h-36 md:w-36"
                height={150}
                width={150}
                draggable={false}
              />
              <div className="mt-2 flex flex-row justify-start space-x-2 md:justify-center">
                <a
                  href={DATA.twitter}
                  className="relative text-sm text-zinc-500"
                  target="__blank"
                >
                  <span className="relative z-10 inline-block px-2 py-2 hover:text-cyan-500">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      className="hover:text-primary h-5 w-5 transition duration-150"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
                    </svg>
                  </span>
                </a>
                <a
                  href={DATA.linkedin}
                  className="relative text-sm text-zinc-500"
                  target="__blank"
                >
                  <span className="relative z-10 inline-block px-2 py-2 hover:text-cyan-500">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      className="hover:text-primary h-5 w-5 transition duration-150"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"></path>
                    </svg>
                  </span>
                </a>
                <a
                  href={DATA.github}
                  className="relative text-sm text-zinc-500"
                  target="__blank"
                >
                  <span className="relative z-10 inline-block px-2 py-2 hover:text-cyan-500">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      className="hover:text-primary h-5 w-5 transition duration-150"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <p className="mt-8 text-sm tracking-wide  md:text-base md:leading-loose">
            This portfolio is a reflection of my technical growth and the projects I have passionately worked on. Feel free to explore and learn more about my work!
            <RoughNotation type="box" show color="cyan">
              {" "}
              <span className="text-blue-600">
                <Link href="mailto:ayushtomar8624@gmail.com" target="_blank">
                  contact me
                </Link>{" "}
              </span>
            </RoughNotation>{" "}
            if you want to bring your MVP idea to life.{" "}
            <Link href="/about">
              <span className="text-blue-600">Read more</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
