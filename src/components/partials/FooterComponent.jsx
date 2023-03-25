import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="d-flex justify-content-center gap-2 my-1">
              <Link to="/">Home</Link>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
              <a href="#about">About</a>
              {/* <Link to="/blogs">Blogs</Link> */}
            </div>
            <p className="my-1">
              © Copyright 2023. All Rights Reserved. Designed & Developed by Me
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
