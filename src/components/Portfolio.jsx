import "./Portfolio.css";

const projects = [
  {
    title: "Tour & Travel Company Dynamic Website",
    image: "/projects/travel.png",
    link: "https://abdholidays.com/",
  },
  {
    title: "Proptech Company Website & Web Portal",
    image: "/projects/proptech.png",
    link: "https://qubicc.com/",
  },
  {
    title: "Real Estate & Construction Business Website",
    image: "/projects/govt.png",
    link: "https://www.vishwanathbuilders.com/",
  },
  {
    title: "EV Company Website & Portal",
    image: "/projects/eashwa.png",
    link: "https://eashwa.com/",
  },
  {
title: "Hotel Dynamic Website",
image: "/projects/hhh.png",
link: "https://www.hoteldlgrishikesh.com/",
},
  {
title: "Bus Rental Agency Website",
image: "/projects/bus.png",
link: "https://www.shivshaktitourist.com/",
},
{
title: "Modern Jewellery E-Commerce Website",
image: "/projects/jewellery.jpeg",
link: "https://bradojewellery.com/",
},
{
title: "Doctor Clinic Management Web Application",
image: "/projects/cliniq.png",
link: "https://mycliniq.in/#process",
},
];

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <p className="portfolio-subtitle">Portfolio</p>
      <h2 className="portfolio-title">
        Highlighting a glimpse of my journey.
      </h2>

      <p className="portfolio-desc">
        With 90+ projects under my belt, spanning websites, portals, and
        software from small to large scale, here's a snapshot of just a few —
        the full list is too extensive to fit.
      </p>

      <h3 className="portfolio-category">
        Website & Web Portal Development Project
      </h3>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h4>{project.title}</h4>
            <a href={project.link} target="_blank">View</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;