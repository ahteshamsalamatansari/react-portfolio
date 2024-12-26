import { HERO_CONTENT } from "../../constants/index.js";
import profilePic from "../../assets/kevinRushProfile.png";
const Hero = () => {
  return (
    <div className="p-4 border-b border-neutral-900 pb-4 lg:mb-24">
      <div className="flex flex-wrap">
        <div className="w-full   lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-4 text-3xl font-thin tracking-tight lg:mt-12 lg:text-6xl break-words ">
              {" "}
              Mudassir Hussain Ansari{" "}
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-zinc-200 to-purple-500 bg-clip-text text-xl lg:text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-lg py-4 font-light tracking-tighter text-sm lg:text-base">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <div className="flex justify-center">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full max-w-md lg:max-w-lg object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
