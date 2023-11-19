import { FaArrowRight } from "react-icons/fa";

import articles from "../data/articles";
import Article from "./Article";

const ArticleShowcase = () => {
  return (
    <section className="px-2.5 grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {articles.map((article) => (
        <Article {...article} />
      ))}

      <div className="mt-5 col-span-full flex justify-center">
        <button className="px-5 py-2 flex justify-center items-center gap-5 font-bold text-xl border border-blue-500 text-blue-500 rounded hover:text-white hover:bg-blue-500 transition-all duration-500">
          <span>More Articles</span>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default ArticleShowcase;
