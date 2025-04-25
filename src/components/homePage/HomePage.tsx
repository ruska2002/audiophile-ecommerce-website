import Info from "./Info";
import Category from "./Category";
import MiddlePart from "./MiddlePart";
import Header from "./Header";

// import CheckOut from "../CategoryPage/CheckOut";

export default function HomePage() {
  return (
    <div>
      {" "}
      <Header />
      <Category />
      <MiddlePart />
      <Info />
      {/* <CheckOut /> */}
    </div>
  );
}
