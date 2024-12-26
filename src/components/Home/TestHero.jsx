import profilePic from "../../assets/maddyProfile.png";

const TestHero = () => {
    const HERO_CONTENT = "I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.";
  
    return (
      <div className="w-full py-4 md:py-8 lg:mt-4 px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-thin tracking-tight leading-tight">
                Mudassir Hussain Ansari
              </h1>
              <span className="mt-4 bg-gradient-to-r from-pink-300 via-zinc-200 to-purple-500 bg-clip-text text-lg md:text-xl lg:text-3xl tracking-tight text-transparent">
                Full Stack Developer
              </span>
              <p className="mt-4 max-w-lg text-sm md:text-base font-light tracking-tighter px-4 lg:px-0">
                {HERO_CONTENT}
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
            <img 
              src={profilePic}
              alt="Profile"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-full lg:h-auto max-w-xs lg:max-w-lg object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default TestHero;