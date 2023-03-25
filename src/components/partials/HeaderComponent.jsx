import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const HeaderComponent = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const openMobileNav = () => {
    setMobileNav(!mobileNav);
  };
  return (
    <div className="fixed-top bg-white header">
      <header className="container">
        <div className="d-lg-flex justify-content-between align-items-center">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" height="37" />
            </Link>
          </div>
          <div className={"list-unstyled d-lg-flex d-none"}>
            <li className="my-1 my-lg-0 mx-lg-1">
              <Link to="/" className="btn">
                Home
              </Link>
            </li>
            <li className="my-1 my-lg-0 mx-lg-1">
              <a href="/#about" className="btn">
                About
              </a>
            </li>
            <li className="my-1 my-lg-0 mx-lg-1">
              <a href="/#projects" className="btn">
                Projects
              </a>
            </li>
          </div>
          <div className="contact d-lg-flex d-none">
            <a href="/#contact" className="btn btn-primary rounded-pill">
              Contact
            </a>
          </div>
          {mobileNav ? (
            <>
              <div className="list-unstyled d-lg-none">
                <li className="my-1 my-lg-0 mx-lg-1">
                  <Link to="/" className="btn">
                    Home
                  </Link>
                </li>
                <li className="my-1 my-lg-0 mx-lg-1">
                  <a href="/#about" className="btn">
                    About
                  </a>
                </li>
                <li className="my-1 my-lg-0 mx-lg-1">
                  <a href="/#projects" className="btn">
                    Projects
                  </a>
                </li>
              </div>
              <div className="contact d-lg-none">
                <a href="/#contact" className="btn btn-primary rounded-pill">
                  Contact
                </a>
              </div>
            </>
          ) : null}
        </div>
      </header>
      <div>
        <button
          onClick={openMobileNav}
          className="btn menu_toggler d-lg-none d-md-block"
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  );
};

export default HeaderComponent;
