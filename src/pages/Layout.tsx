import Category from "../components/Category";
import Header from "../components/Header";
import MiddlePart from "../components/MiddlePart.tsx";

export default function Layout() {
  return (
    <div>
      <Header />
      <Category />
      <MiddlePart />
    </div>
  );
}
