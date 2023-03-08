import { Outlet } from "react-router-dom";
import FooterComponent from "../components/partials/FooterComponent";

const HomeLayout = () => {
  return (
    <>
      <div>Nav header component</div>
      <main>
        <Outlet />
      </main>
      <FooterComponent />
    </>
  );
};

export default HomeLayout;
