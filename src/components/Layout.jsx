import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="my-5 mx-2.5">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
