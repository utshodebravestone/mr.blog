import articles from "../data/articles";
import Article from "./Article";

const ArticleShowcase = () => {
  return (
    <section className="px-2.5 grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {articles.map((article) => (
        <Article {...article} />
      ))}
    </section>
  );
};

export default ArticleShowcase;
