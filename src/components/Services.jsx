import "./Services.css";
import { FaCode, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

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
            I build scalable and efficient software solutions tailored to business needs, focusing on performance, clean architecture, and long-term maintainability.
          </p>
        </div>

        <div className="service-card">
          <FaLaptopCode className="service-icon" />
          <h3>Website Development</h3>
          <p>
            I create modern, responsive, and high-performance websites using the latest technologies, ensuring seamless user experience across all devices.
          </p>
        </div>

        <div className="service-card">
          <FaMobileAlt className="service-icon" />
          <h3>Mobile App Development</h3>
          <p>
            I develop cross-platform mobile applications using React Native, delivering smooth, fast, and user-friendly apps for both Android and iOS.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;