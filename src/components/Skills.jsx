import "./Skills.css";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaLaravel,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaAws,
  FaKey,
  FaGithub,
  FaMobileAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiDjango,
  SiFastapi,
  SiNextdotjs,
  SiShopify,
  SiWordpress,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiOpenai,
  SiRedux,
  SiPostman,
  SiRazorpay ,
  SiVercel,
} from "react-icons/si";

function Skills() {
  const skills = [
    { icon: <FaMobileAlt />, name: "React Native" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaPython />, name: "Python" },
    // { icon: <FaPhp />, name: "PHP" },
    // { icon: <FaLaravel />, name: "Laravel" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaDatabase />, name: "MySQL" },
    // { icon: <SiDjango />, name: "Django" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
  { icon: <SiRedux />, name: "Redux" },

  { icon: <FaKey />, name: "Authentication (JWT)" },
  { icon: <SiPostman />, name: "REST APIs" },
  { icon: <SiOpenai />, name: "AI Integration" },
    // { icon: <FaBootstrap />, name: "Bootstrap" },

    { icon: <SiWordpress />, name: "WordPress" },
    { icon: <SiShopify />, name: "Shopify" },

    { icon: <SiDocker />, name: "Docker" },
    // { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <SiGithubactions />, name: "CI/CD" },
    { icon: <FaAws />, name: "AWS" },
  ];

  return (
    <section className="skills" id="skills">
      <p className="skills-subtitle">Skills</p>
      <h2 className="skills-title">Layers of My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <span className="skill-icon">{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;