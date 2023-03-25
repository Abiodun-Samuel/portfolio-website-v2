import { BsFillEyeFill, BsGithub } from "react-icons/bs";
import supero from "../assets/images/projects/supero.png";
import tonote from "../assets/images/projects/tonote.png";
import petigrity from "../assets/images/projects/petigrity.png";

const ProjectComponent = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="component__header">
          <p className="text-light lead my-1">MY WORKS</p>
          <h2 className="text-radial">Projects</h2>
          <div className="row">
            <div className="col-lg-8 my-1">
              <p className="text-secondary lead">
                Here's a catalogue of my projects executed over the years as a
                Developer. I've selected a few of them for your amusement, It's
                only a drop in the ocean compared to the entire list. Interested
                to see more? Visit my porfolio page.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 my-1 d-flex align-items-stretch">
            <div className="card bg-ter shadow">
              <img src={tonote} className="card-img-top" alt="project image" />
              <div className="card-body">
                <div>
                  <h4 className="fw-bolder text-white">
                    Virtual Notarization System
                  </h4>
                  <p className="text-secondary">
                    Sign and notarize document virtually.
                  </p>
                  <i className="small">
                    Username: user@gettonote.com <br />
                    Password: password
                  </i>
                </div>
                <div>
                  <small className="margin-right text-dark">#Laravel Api</small>
                  <small className="margin-right text-dark">#NodeJs</small>
                  <small className="margin-right text-dark">#Vue</small>
                  <small className="margin-right text-dark">#React</small>
                  <small className="margin-right text-dark">#Socket.io</small>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-1">
                  <a
                    href="https://github.com/Abiodun-Samuel/tonote-virtual-notary"
                    target="_blank"
                    disabled
                  >
                    <BsGithub />
                  </a>
                  <a
                    href="https://staging-virtualnotary.gettonote.com/"
                    className="btn btn-sm btn-primary rounded-pill"
                    target="_blank"
                  >
                    view <BsFillEyeFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-1 d-flex align-items-stretch">
            <div className="card bg-ter shadow">
              <img src={supero} className="card-img-top" alt="project image" />
              <div className="card-body">
                <div>
                  <h4 className="fw-bolder text-white">AgroEcommerce</h4>
                  <p className="text-secondary">
                    A full-fledged e-commerce agro products web application.
                  </p>
                </div>
                <div>
                  <small className="margin-right text-dark">#Laravel Api</small>
                  <small className="margin-right text-dark">#Vue</small>
                  <small className="margin-right text-dark">#VueX</small>
                  <small className="margin-right text-dark">#React</small>
                  <small className="margin-right text-dark">#Redux</small>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-1">
                  <a
                    href="https://github.com/Abiodun-Samuel/AgroEcommerce"
                    target="_blank"
                  >
                    <BsGithub />
                  </a>
                  <a
                    href="https://superoagrobase.com/"
                    className="btn btn-sm btn-primary rounded-pill"
                    target="_blank"
                  >
                    view <BsFillEyeFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-1 d-flex align-items-stretch">
            <div className="card bg-ter shadow">
              <img
                src={petigrity}
                className="card-img-top"
                alt="project image"
              />
              <div className="card-body">
                <div>
                  <h4 className="fw-bolder text-white">Petigrity</h4>
                  <p className="text-secondary">
                    Get the best health plan for your specific needs.
                  </p>
                </div>
                <div>
                  <small className="margin-right text-dark">#Laravel Api</small>
                  <small className="margin-right text-dark">#Vue</small>
                  <small className="margin-right text-dark">#VueX</small>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-1">
                  <a
                    href="https://github.com/Abiodun-Samuel/petigrity-frontend"
                    target="_blank"
                  >
                    <BsGithub />
                  </a>
                  <a
                    href="https://petigrity.com/"
                    className="btn btn-sm btn-primary rounded-pill"
                    target="_blank"
                  >
                    view <BsFillEyeFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectComponent;
