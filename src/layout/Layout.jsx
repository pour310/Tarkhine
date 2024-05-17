import { Outlet } from "react-router-dom";
import Footer from "../components/templetes/Footer";
import Header from "../components/templetes/Header";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
