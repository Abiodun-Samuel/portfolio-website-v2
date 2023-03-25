import { useState, useEffect, useRef } from "react";
import AnimatedLetters from "./partials/AnimatedLetters";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const HeroComponent = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const timer = useRef(null);

  const nameArray = ["S", "a", "m", "u", "e", "l"];
  const jobArray = [
    "F",
    "u",
    "l",
    "l",
    " ",
    "S",
    "t",
    "a",
    "c",
    "k",
    " ",
    "E",
    "n",
    "g",
    "i",
    "n",
    "e",
    "e",
    "r",
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
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="hero__text">
              <h1 className="my-2">
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

                <span className={`text-radial ${letterClass} _8`}>Samuel</span>
                <br />
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={jobArray}
                  idx={11}
                />
              </h1>
              <p className="my-2 lead text-secondary">
                i-Design, i-Develop Innovative Web Solutions for Individuals,
                Organizations and Companies.
              </p>

              <div>
                <div className="my-2">
                  <a className="btn btn-primary rounded-pill" href="#projects">
                    PROJECTS
                  </a>
                  <button
                    className="btn btn-outline-primary mx-2 rounded-pill"
                    href="#contact"
                  >
                    CONTACT
                  </button>
                </div>

                <div className="my-2 d-flex gap-2">
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
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
