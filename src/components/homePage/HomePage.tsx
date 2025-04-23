import Info from "./Info";
import Category from "./Category";
import MiddlePart from "./MiddlePart";
import Header from "./Header";

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
