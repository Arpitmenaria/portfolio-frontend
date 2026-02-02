import "./Hero.css";
import profile from "../assets/profile.png"; // add your image

function Hero() {
  return (
    <section id="home">
    <section className="hero">
      <div className="hero-left">
        <h1>
          Hi, I am <span>Arpit Menaria</span>
        </h1>
        <h2>Full Stack Developer</h2>
        <p>
          Passionate software developer turning ideas into reality with
          elegant code and innovative designs creating unique digital
          experiences that inspire and engage.
        </p>

        <div className="hero-buttons">
          <a href="#portfolio" className="btn-dark">See Works</a>
          <a href="#contact" className="btn-light">Hire Me</a>
        </div>
      </div>

      <div className="hero-right">
        <img src={profile} alt="profile" />
      </div>
    </section>
    </section>
  );
}

export default Hero;