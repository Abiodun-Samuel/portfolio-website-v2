import { useState, useEffect, useRef } from "react";
import profileImg from "../assets/images/img/profile__img.png";
import AnimatedLetters from "./partials/AnimatedLetters";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const HeroComponent = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const timer = useRef(null);

  const nameArray = ["S", "a", "m", "u", "e", "l"];
  const jobArray = [
    //  "F",
    //  "u",
    //  "l",
    //  "l",
    //  " ",
    //  "S",
    //  "t",
    //  "a",
    //  "c",
    //  "k",
    //  " ",
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    timer.current = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <div id="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 my-1">
            <div className="hero__text pt-5">
              <h1 className="pt-1">
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={["H", "i", ","]}
                  idx={1}
                />
                <br />
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={["I", "'m", " "]}
                  idx={3}
                />

                <span className={`radial-text ${letterClass} _8`}>Samuel</span>
                <br />
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={jobArray}
                  idx={11}
                />
              </h1>
              <p className="my-1 lead text-secondary">
                i-Design, i-Develop Innovative Web Solutions for Individuals,
                Organizations and Companies.
              </p>

              <div className="mt-2">
                <button className="btn btn-primary rounded-pill">
                  PROJECTS
                </button>

                <div className="mt-2 d-flex gap-2">
                  <a href="https://github.com/Abiodun-Samuel" target="_blank">
                    <BsGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/samuel-abiodun/"
                    target="_blank"
                  >
                    <BsLinkedin />
                  </a>
                  <a href="https://wa.link/u3afoc" target="_blank">
                    <BsWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 my-1">
            <div className="hero_img_container">
              <div className="hero_img position-relative">
                <div className="hero__info-one d-flex align-items-center">
                  <h2
                    className="text-black fw-bolder"
                    style={{ marginRight: "5px" }}
                  >
                    4+
                  </h2>
                  <small className="text-primary fw-bold small">
                    Years of <br /> Experience
                  </small>
                </div>
                <img src={profileImg} alt="profile_img" className="img-fluid" />
                <div className="hero__info-two d-flex align-items-center">
                  <h2
                    className="text-black fw-bolder"
                    style={{ marginRight: "5px" }}
                  >
                    10+
                  </h2>
                  <small className="text-primary fw-bold small">
                    Completed <br /> Projects
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
