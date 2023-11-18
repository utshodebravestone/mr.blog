import { Link } from "react-router-dom";
import { images } from "../constants";

const Hero = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-5 justify-center items-center">
      <div className="w-full lg:w-1/2 flex flex-col gap-5">
        <h1 className="text-5xl font-bold">
          Read the most interesting articles
        </h1>
        <p className="text-xl">
          A site for bloggers of all sort. You can read, write and critique
          blogs here. It's completely free to use and unlike every other corp,
          it doesn't collect your data to sell you advertisement. The matter of
          fact is, it doesn't have any advertisement whatsoever. It's a platform
          that <span className="font-bold italic">you</span> run.
        </p>

        <div className="flex gap-5 justify-center items-center">
          <input
            type="text"
            placeholder="Search for an Article..."
            className="w-4/6 p-2.5 text-xl border border-gray-200 rounded focus:outline-none shadow"
          />
          <button className="px-5 py-3 border border-blue-500 rounded bg-blue-500 font-bold text-white hover:text-blue-500 hover:bg-white transition-all duration-500">
            Search
          </button>
        </div>

        <div className="flex items-center justify-start gap-4 flex-wrap">
          <h2 className="text-2xl font-bold">Popular Tags:</h2>
          <ul className="flex gap-2 items-center justify-start">
            <li className="px-2 py-1 bg-blue-200 rounded font-semibold">
              <Link to="">Programming</Link>
            </li>
            <li className="px-2 py-1 bg-blue-200 rounded font-semibold">
              <Link to="">Designing</Link>
            </li>
            <li className="px-2 py-1 bg-blue-200 rounded font-semibold">
              <Link to="">Web Dev</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center w-full lg:w-1/2">
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
