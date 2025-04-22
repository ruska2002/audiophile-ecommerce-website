import Info from "./Info";
import Category from "./Category";
import Header from "./Header";
import MiddlePart from "./MiddlePart";
export default function HomePage() {
  return (
    <div>
      {" "}
      <Header />
      <Category />
      <MiddlePart />
      <Info />
    </div>
  );
}
