import { Outlet } from "react-router-dom";
import FooterComponent from "../components/partials/FooterComponent";
import HeaderComponent from "../components/partials/HeaderComponent";

const HomeLayout = () => {
  return (
    <>
      <HeaderComponent />
      <main>
        <Outlet />
      </main>
      <FooterComponent />
    </>
  );
};

export default HomeLayout;
