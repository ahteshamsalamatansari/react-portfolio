import { bggradient, EXPERIENCES } from "../../constants";

const Experience = () => {
  return (
    <section className=" text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-800">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="h-full w-full bg-slate-950">
          <div className={bggradient}></div>
        </div>
      </div>
      <div className="w-full h-full container mb-2">
        <h2 className="pt-11 my-20 text-center text-4xl"> Work Experience </h2>
        <div>
          {EXPERIENCES.map((experience, index) => {
            return (
              <div
                key={index}
                className="mb-8 flex flex-wrap  lg:justify-center"
              >
                <div className="w-full lg:w-1/4">
                  <p className="mb-2 text-sm text-neutral-400">
                    {experience.year}
                  </p>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                  <h6 className="mb-2 font-semibold ">
                    {experience.role} - <span className="text-sm text-purple-100">{experience.company}</span>
                  </h6>
                  <p className="mb-4 text-neutral-400">{experience.description}</p>
                  {experience.technologies.map((tech, index) =>(
                    
                      <span className="mr-2 mt-4 rounded-md bg-neutral-900 px-2 py-1 font-medium text-cyan-500" key={index}>
                         {tech} 
                      </span>
                    
                  ))}
                </div>
              </div>
            );
          })}

        </div>
      </div>
      
    </section>
  );
};

export default Experience;
