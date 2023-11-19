import ArticleShowcase from "../components/ArticleShowcase";
import Gap from "../components/Gap";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Gap y={5} />
      <ArticleShowcase />
    </Layout>
  );
};

export default Home;
