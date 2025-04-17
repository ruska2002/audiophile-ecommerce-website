import Category from "../components/Category";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import MiddlePart from "../components/MiddlePart";

export default function Layout() {
  return (
    <>
      <Header />
      <Category />
      <MiddlePart />
      <Info />
      <Footer />
    </>
  );
}
