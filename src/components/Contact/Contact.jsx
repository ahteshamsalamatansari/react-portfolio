import { ABOUT_TEXT, bggradient } from "../../constants";

const Contact = () => {
  return (
    <section className="text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-800">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="h-full w-full bg-slate-950">
          <div className={bggradient}></div>
        </div>
      </div>

      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 mt-16 text-4xl tracking-tight font-extrabold text-center text-zinc-50">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-6 font-light text-center text-zinc-300 sm:text-xl">
          {ABOUT_TEXT }
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-zinc-50"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-zinc-900 border border-zinc-700 text-zinc-200 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
              placeholder="📧 Your inbox is waiting! Share your email with us. ✨"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-zinc-50"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-zinc-200 bg-zinc-900 rounded-lg border border-zinc-700 shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="📝 What’s on your mind? Let us know how we can help! 💡"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-zinc-50"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-zinc-200 bg-zinc-900 rounded-lg shadow-sm border border-zinc-700 focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="💬 Drop us a message, we’re all ears! 👂"
            />
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-zinc-200 rounded-lg bg-purple-600 sm:w-fit hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-cyan-300"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
