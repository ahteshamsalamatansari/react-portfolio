import { GithubActions_Dark } from "react-skillicons";
import profilePic from "../../assets/maddyProfile.png";
import { HERO_CONTENT } from "../../constants/index";

const TestHero = () => {
  return (
    <>
      <div className="hero w-full py-4 lg:mt-4 px-4 md:mx-auto mt-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between md:mt-14">
          <div className="w-full text-center lg:text-left">
            <div className="hero-content flex flex-col items-center lg:items-start">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-thin tracking-tight leading-tight">
                Mudassir Hussain Ansari
              </h1>
              <span className="mt-0 bg-gradient-to-r from-pink-300 via-zinc-200 to-purple-500 bg-clip-text text-lg md:text-xl lg:text-3xl tracking-tight text-transparent">
                Full Stack Developer
              </span>
              <p className="mt-0 max-w-md text-sm md:text-base font-light tracking-tighter px-4 lg:px-0">
                {HERO_CONTENT}
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
            <img
              src={profilePic}
              alt="Profile"
              className="w-48 h-48 md:w-[23rem] md:h-[23rem] max-w-xs lg:max-w-lg object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

    </>
  );
};

export default TestHero;