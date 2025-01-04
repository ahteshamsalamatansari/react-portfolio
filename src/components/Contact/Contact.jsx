import { ABOUT_TEXT } from "../../constants";

const Contact = () => {
  return (
    <section className="  text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-800">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
      </div>
      <div className="relative w-full container mx-auto px-8 flex flex-col mt-10">
        <h1 className="uppercase text-3xl md:text-4xl font-medium tracking-tight leading-tight text-center border-b-2 border-zinc-50/5 mt-16">
          Get Into <span> Touch </span>
        </h1>
        <p className="text-center mt-4 font-sans tracking-tighter selection:bg-sky-400">
            {ABOUT_TEXT}
          </p>
        <div className="ml-2 md:ml-0 w-full mt-5  md:flex md:items-center md:justify-between border-2 py-4 px-3 border-zinc-50/10 rounded-md">
          <form className="md:w-1/2  mt-5 md:mt-0 items-center" action="#">
            <div className="mt-5 flex flex-col">
              <label className="text-m font-semibold p-2 " htmlFor="Name">
                Name
              </label>
              <input
                placeholder="Enter Your Name"
                className="md:w-[65%] w-full rounded-md text-black input-sm input-bordered"
                type="text"
                name="Name"
                id=""
              />
            </div>
            <div className="mt-5 flex flex-col">
              <label className="text-m font-semibold p-2" htmlFor="Name">
                Email
              </label>
              <input
                placeholder="Enter Your Email"
                className="md:w-[65%] w-full rounded-md text-black input-sm input-bordered"
                type="email"
                name="Name"
                id=""
              />
            </div>
            <div className="mt-5 flex flex-col">
              <label className="text-m font-semibold p-2" htmlFor="Name">
                Your Message
              </label>
              <input
                placeholder="Hi Maddy..."
                className="md:w-[65%] w-full h-32 rounded-md text-black input-sm input-bordered"
                type="text"
                name="Name"
                id=""
              />
            </div>
          </form>
          <div className="mockup-code mt-10 w-full h-45 md:mt-0 md:w-96 md:h-72">
            <pre data-prefix="1">
              <code>Maddy was busy with your issue</code>
            </pre>
            <pre data-prefix="2">
              <code>Processing...</code>
            </pre>
            <pre data-prefix="3" className="bg-green-600 text-warning-content">
              <code>Solved!</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
