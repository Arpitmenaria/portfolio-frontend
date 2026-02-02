import "./Services.css";
import { FaCode, FaLaptopCode, FaServer } from "react-icons/fa";

function Services() {
  return (
    <section className="services" id="services">
      <p className="services-subtitle">Services</p>
      <h2 className="services-title">
        Crafting Solutions Tailored <br /> to Your Needs
      </h2>

      <div className="services-cards">
        <div className="service-card">
          <FaCode className="service-icon" />
          <h3>Software Development</h3>
          <p>
            I offer custom software development solutions tailored to your
            specific business needs using modern technologies.
          </p>
        </div>

        <div className="service-card">
          <FaLaptopCode className="service-icon" />
          <h3>Website Development</h3>
          <p>
            I develop fast, responsive and visually appealing websites that
            provide excellent user experience.
          </p>
        </div>

        <div className="service-card">
          <FaServer className="service-icon" />
          <h3>Backend Development</h3>
          <p>
            I build secure and scalable backend systems using Node.js, Express
            and MongoDB with REST APIs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;