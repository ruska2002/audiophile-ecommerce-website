import { Outlet } from "react-router-dom";
import Footer from "../components/homePage/Footer";
import TopBar from "../components/homePage/TopBar";

export default function Layout() {
  return (
    <>
      <TopBar />
      <Outlet />
      <Footer />
    </>
  );
}
