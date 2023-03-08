import { skillsArray } from "../assets/images/index.js";

const AboutComponent = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="component__header">
          <p className="text-secondary lead my-1">INTRODUCTION</p>
          <h2 className="text-light">About Me</h2>
          <div className="row">
            <div className="col-lg-8 my-1">
              <p className="text-secondary lead">
                I'm a Full-Stack Software Engineer with 4+ years of experience.
                My Tech stack consists of Html5, CSS3, TailwindCSS, Bootstrap,
                JavaScript, React, Redux, VueX, Vue.js, Next.js, Nuxt.js,
                Node.js, PHP, Laravel, MongoDB, and MySQL.
              </p>
              <p className="text-secondary lead">
                I'm a self-motivated developer with extensive experience
                designing, developing, and deploying web applications with
                strong attention to details and an innate passion for learning
                new technologies.
              </p>
            </div>
          </div>
        </div>
        <div className="about__skills mt-1">
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
      </div>
    </section>
  );
};

export default AboutComponent;
