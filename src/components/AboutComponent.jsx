import { skillsArray } from "../assets/images/index.js";
import profileImg from "../assets/images/img/profile__img.png";
import myResume from "../assets/MyResume.pdf";

const AboutComponent = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="component__header">
            <p className="text-light lead my-1">INTRODUCTION</p>
            <h2 className="text-radial">About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 my-1">
            <img src={profileImg} alt="profile_img" className="img-fluid" />
            <div className="position-relative d-flex justify-content-center">
              <div className="about_img d-flex align-items-center">
                <p className="text-secondary my-0 py-0 fw-bold">
                  4+ Years of Experience
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 my-1">
            <div className="mt-3">
              <p className="text-secondary lead">
                I'm a Full-Stack Software Engineer with 4+ years of experience.
                My Tech stack consists of HTML5, CSS3, TailwindCSS, Bootstrap,
                JavaScript, React, Redux, VueX, Vue.js, NextJs, NuxtJs, NodeJs,
                ExpressJs, PHP, Laravel, MongoDB, and MySQL.
              </p>
              <p className="text-secondary lead">
                I'm a self-motivated developer with extensive experience
                designing, developing, and deploying web applications with
                strong attention to details and an innate passion for learning
                new technologies.
              </p>
            </div>
            <div className="about__skills my-2">
              {skillsArray.map((img, index) => (
                <div className="img" key={index}>
                  <img
                    src={img}
                    alt={`skills_logo_${index}`}
                    className="img-fluid"
                  />
                </div>
              ))}
            </div>
            <a
              className="btn btn-primary rounded-pill mt-2"
              href={myResume}
              download
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
