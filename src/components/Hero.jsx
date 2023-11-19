import { Link } from "react-router-dom";
import { images } from "../constants";

const Hero = () => {
  return (
    <section className="px-0 xl:px-20 w-full flex flex-col lg:flex-row gap-5 justify-center items-center">
      <div className="w-full lg:w-1/2 flex flex-col gap-5">
        <h1 className="text-5xl font-bold">
          An Article Hub for Readers and Authors
        </h1>
        <p className="text-xl">
          A site for bloggers of all sort. You can read, write and critique
          blogs here. It's completely free to use and unlike every other corp,
          it doesn't collect your data to sell you advertisement. The matter of
          fact is, it doesn't have any advertisement whatsoever. It's a platform
          that <span className="font-bold">you</span> run.
        </p>

        <div className="flex flex-col md:flex-row gap-5 justify-center items-center mx-5 md:mx-0">
          <input
            type="text"
            placeholder="Search for an Article..."
            className="w-full md:w-4/6 p-2.5 text-xl border border-gray-200 rounded focus:outline-none shadow"
          />
          <button className="w-full md:w-fit px-5 py-2.5 border border-blue-500 rounded bg-blue-500 font-bold text-white text-xl hover:text-blue-500 hover:bg-white transition-all duration-500">
            Search
          </button>
        </div>

        <div className="flex items-center justify-start gap-4 flex-wrap">
          <h2 className="text-2xl font-bold">Popular Tags:</h2>
          <ul className="flex gap-2 items-center justify-start">
            <li className="px-2 py-1 bg-blue-50 rounded-sm font-semibold hover:bg-blue-200 transition-all duration-500">
              <Link to="">Programming</Link>
            </li>
            <li className="px-2 py-1 bg-blue-50 rounded-sm font-semibold hover:bg-blue-200 transition-all duration-500">
              <Link to="">Designing</Link>
            </li>
            <li className="px-2 py-1 bg-blue-50 rounded-sm font-semibold hover:bg-blue-200 transition-all duration-500">
              <Link to="">Web Dev</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden lg:flex justify-center items-center w-full lg:w-1/2">
        <img
          src={images.heroImage}
          alt="hero image"
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
