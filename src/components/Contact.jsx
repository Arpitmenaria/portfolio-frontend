import "./Contact.css";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(
        "https://portfolio-backend-dux3.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully ✅");
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        setStatus(data.message || "Something went wrong ❌");
      }
    } catch (err) {
      console.error(err);
      setStatus("Server error ❌");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-left">
        <h2>
          Let’s do something <br /> awesome
        </h2>

        <div className="contact-info">
          <div>
            <FaMapMarkerAlt />
            <div>
              <h4>Address</h4>
              <p>
                India
              </p>
            </div>
          </div>

          <div>
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>menariaarpit2@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="contact-social">
          <a href="https://in.linkedin.com/in/arpit-menaria-0242b6271" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Arpitmenaria/" target="_blank">
            <FaGithub />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/arpitmenaria/" target="_blank">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="contact-right">
        <form onSubmit={handleSubmit}>
          <label>Full Name*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Mobile*</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />

          <label>Write Project Details*</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>

          {status && <p style={{ marginTop: "10px" }}>{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
