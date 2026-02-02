import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <p className="about-subtitle">About Me</p>
      <h2 className="about-title">Why Hire Me</h2>

      <div className="about-content">
        <div className="about-text">
          <p>
            Hello, I am a Full Stack Developer with strong problem-solving skills
            and hands-on experience in building scalable web applications. My
            journey has allowed me to work on both frontend and backend
            development, specializing in HTML, CSS, JavaScript, React.js, Node.js,
            Express, and MongoDB. I thrive in fast-paced environments where I can
            apply my technical skills, teamwork, and creativity to deliver
            impactful digital solutions.
          </p>

          <div className="about-stats">
            <div>
              <h3>03+</h3>
              <span>Years Experience</span>
            </div>
            <div>
              <h3>90+</h3>
              <span>Projects Completed</span>
            </div>
          </div>

          <div className="about-info">
            <p><strong>Email:</strong> menariaarpit2@gmail.com</p>
            <p><strong>Location:</strong> Ahmedabad, Gujarat</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;