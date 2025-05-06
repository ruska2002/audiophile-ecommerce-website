import Info from "./Info";
import Category from "./Category";
import MiddlePart from "./MiddlePart";
import Header from "./Header";

export default function HomePage() {
  return (
    <div className="font-manrope">
      <Header />
      <Category />
      <MiddlePart />
      <Info />
    </div>
  );
}
