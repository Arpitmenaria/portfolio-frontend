import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <p className="about-subtitle">About Me</p>
      <h2 className="about-title">Why Hire Me</h2>

      <div className="about-content">
        <div className="about-text">
          <p>
            Hello, I am a Full Stack Developer with strong problem-solving skills and hands-on experience in building scalable web and mobile applications. I specialize in modern technologies including HTML, CSS, JavaScript, Next.js, React.js, Node.js, Express, MongoDB, and React Native for cross-platform mobile development.

I focus on creating high-performance SaaS products and intelligent digital solutions that are efficient, user-friendly, and built for real-world impact. I thrive in fast-paced environments where I can combine technical expertise, creativity, and innovation to deliver meaningful results.
          </p>

          <div className="about-stats">
            <div>
              <h3>03+</h3>
              <span>Years Experience</span>
            </div>
            <div>
              <h3>65+</h3>
              <span>Projects Completed</span>
            </div>
          </div>

          <div className="about-info">
            <p><strong>Email:</strong> menariaarpit2@gmail.com</p>
            <p><strong>Location:</strong> India</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;