import contact from "../assets/images/img/contact.svg";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactComponent = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.length || !form.email.length || !form.message.length)
      return null;
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Abiodun Samuel",
          from_email: form.email,
          to_email: "abiodunsamyemi@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Thank you. I will get back to you as soon as possible",
            {
              duration: 5000,
            }
          );
          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          toast.error("Error, Unable to send message try again");
        }
      );
  };

  const handleChange = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="component__header">
          <p className="text-light lead my-1">GET IN TOUCH</p>
          <h2 className="text-radial">Contact</h2>
        </div>

        <div className="row d-flex justify-content-between mt-3">
          <div className="col-lg-5 my-1">
            <div className="contact__box">
              <form>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="form-control"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="form-control"
                />
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="form-control"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Message"
                  rows="5"
                ></textarea>
                <button
                  onClick={handleSubmit}
                  className="btn btn-primary mt-1 w-100"
                >
                  {loading ? (
                    <span
                      className="spinner-border spinner-border-sm mx-1"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  ) : null}
                  Send
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-5 my-1">
            <img src={contact} alt="contact us" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
