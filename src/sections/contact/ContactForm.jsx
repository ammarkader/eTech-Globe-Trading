import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/pages/contact/_contactpage_form_block.scss";

function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsSending(true);

    const contactForm = document.createElement("form");
    Object.entries(data).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.name = key;
      input.value = value;
      contactForm.appendChild(input);
    });

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Your message has been successfully sent!");
          reset();
          setIsSending(false);
        },
        () => {
          toast.error(
            "There was an error sending your message. Please try again."
          );
          setIsSending(false);
        }
      );
  };

  return (
    <section className="contactpage-form__wrapper">
      <div className="contactpage-form__container">
        <div className="section-details__container">
          <div className="heading">
            <h2>Get In Touch</h2>
            <p>
              Direct Access. Expert Team. Global Commodities. Reach out to
              harness the power of our specialized trading network.
            </p>
          </div>
          <div className="details">
            <div className="detail">
              <h3>Address</h3>
              <p>
                <a
                  href="#"
                  target="_blank"
                  aria-label="View our main office location on Google Maps"
                  rel="noopener noreferrer"
                >
                  ETECH Globe Trading Co LLC <br />
                  Office No.43-44, <br />
                  Dubai Municipality, Bur Dubai,
                  <br />
                  Al Fahidi, Dubai
                </a>
              </p>
            </div>
            <div className="detail">
              <h3>Address</h3>
              <p>
                <a
                  href="#"
                  target="_blank"
                  aria-label="View our second office location on Google Maps"
                  rel="noopener noreferrer"
                >
                  ETECH Globe FZCO <br />
                  IFZA Business Park, DDP, <br />
                  Building A1, Dubai Digital Park, <br />
                  Dubai Silicon Oasis, Dubai
                </a>
              </p>
            </div>
            <div className="detail">
              <h3>Email</h3>
              <p>
                <a
                  href="mailto:info@etechglobe.com"
                  aria-label="Send us an email"
                >
                  info@etechglobe.com
                </a>
              </p>
            </div>
            <div className="detail">
              <h3>Phone</h3>
              <p>
                <a href="tel:1234567890" aria-label="Call us at 1234567890">
                  1234567890
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="section-form__container">
          <div className="section-description">
            <p>
              Connect with us to transform ideas into solutions. Our team is
              ready to serve your business needs.
            </p>
          </div>
          <div className="section-form">
            <form className="form" ref={form} onSubmit={handleSubmit(onSubmit)}>
              <div className="input-fields__container">
                <ul className="textfields">
                  <li>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="text-input-field"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <span className="error">{errors.name.message}</span>
                    )}
                  </li>
                  <li>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="text-input-field"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email format",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="error">{errors.email.message}</span>
                    )}
                  </li>
                  <li>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="text-input-field"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Enter a 10-digit phone number",
                        },
                      })}
                    />
                    {errors.phone && (
                      <span className="error">{errors.phone.message}</span>
                    )}
                  </li>
                </ul>
              </div>
              <div className="text-area__container">
                <label htmlFor="description">Comments</label>
                <textarea
                  id="description"
                  name="comment"
                  className="text-input-field"
                  {...register("comment")}
                ></textarea>
              </div>
              <div className="submit-btn__container">
                <button
                  type="submit"
                  className="submit-btn"
                  id="submit-btn"
                  aria-label="Submit contact form"
                  aria-live="assertive"
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </section>
  );
}

export default ContactForm;
