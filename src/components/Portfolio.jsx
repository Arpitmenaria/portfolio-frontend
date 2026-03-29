import "./Portfolio.css";
import { useState } from "react";

const allProjects = [
  // 📱 MOBILE APPS
  {
    title: "Paycio | Digital Crypto Transactions",
    image: "/projects/Paycio.jpg",
    type: "mobile",
    android: "https://play.google.com/store/apps/details?id=com.paycio&hl=en&pli=1",
  },
  {
    title: "Helpio - On Demand Services",
    image: "/projects/Helpio.jpg",
    type: "mobile",
    android: "https://play.google.com/store/apps/details?id=com.helpio",
    ios: "https://apps.apple.com/app/helpio-on-demand-services/id6752221770",
  },
  {
    title: "Saffo Social",
    image: "/projects/Saffo.jpg",
    type: "mobile",
    android: "https://play.google.com/store/apps/details?id=app.bestprime.saffo&hl=en",
    ios: "https://apps.apple.com/in/app/saffo/id6677016625",
  },
  {
    title: "Gear | Unlock New Roads",
    image: "/projects/Gear.jpg",
    type: "mobile",
    android: "https://play.google.com/store/apps/details?id=com.devicebee.gear&hl=en",
    ios: "https://apps.apple.com/in/app/gear-unlock-new-roads/id6747331842",
  },
  {
    title: "GAT - Global Arabian Trading",
    image: "/projects/GAT.jpg",
    type: "mobile",
    android: "https://play.google.com/store/apps/details?id=com.gat.app&hl=en_IN",
    ios: "https://apps.apple.com/lb/app/gat-global-arabian-trading/id6747101470",
  },
  {
  title: "EmiratiHub",
  type: "mobile",   // ✅ FIXED
  image: "/projects/EmiratiHub.jpg",
  ios: "https://apps.apple.com/us/app/emiratihub/id6753808339",
},
  {
  title: "Karteco: Circulating Goodness",
  type: "mobile",   // ✅ FIXED
  image: "/projects/Karteco.jpg",
  android: "https://play.google.com/store/apps/details?id=com.karteco",
  ios: "https://apps.apple.com/us/app/karteco-circulating-goodness/id6754075415",
},

  // 🤖 AI APPS
  {
    title: "Peflix | Calories Tracker",
    image: "/projects/Peflix.jpg",
    type: "ai",
    android: "#",
    ios: "#",
  },
  // 🌐 WEB PROJECTS
  {
    title: "Tour & Travel SaaS & Web Platform",
    image: "/projects/travel.png",
    type: "web",
    link: "https://abdholidays.com/",
  },
  {
    title: "PropTech SaaS Platform & Web Portal",
    image: "/projects/proptech.png",
    type: "web",
    link: "https://qubicc.com/",
  },
  {
    title: "Real Estate Web Platform",
    image: "/projects/govt.png",
    type: "web",
    link: "https://www.vishwanathbuilders.com/",
  },
  {
    title: "EV Company SaaS Dashboard & Web Portal",
    image: "/projects/eashwa.png",
    type: "web",
    link: "https://eashwa.com/",
  },
  {
    title: "Hotel Dynamic Website",
    image: "/projects/hhh.png",
    type: "web",
    link: "https://www.hoteldlgrishikesh.com/",
  },
  {
    title: "Bus Rental Agency Website",
    image: "/projects/bus.png",
    type: "web",
    link: "https://www.shivshaktitourist.com/",
  },
  {
    title: "Modern Jewellery E-Commerce Website",
    image: "/projects/jewellery.jpeg",
    type: "web",
    link: "https://bradojewellery.com/",
  },
  {
    title: "Doctor Clinic Management Web Application",
    image: "/projects/cliniq.png",
    type: "web",
    link: "https://mycliniq.in/#process",
  },
];

function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? allProjects
      : allProjects.filter((p) => p.type === activeTab);

  return (
    <section className="portfolio" id="portfolio">
      <p className="portfolio-subtitle">Portfolio</p>
      <h2 className="portfolio-title">
        Showcasing SaaS, Mobile Apps & Web Solutions.
      </h2>

      <p className="portfolio-desc">
        With 65+ projects delivered across SaaS platforms, mobile applications,
        and modern web solutions, I focus on building scalable, high-performance
        digital products.
      </p>

      {/* 🔥 TABS */}
      <div className="portfolio-tabs">
        <button onClick={() => setActiveTab("all")} className={activeTab === "all" ? "active" : ""}>All</button>
        <button onClick={() => setActiveTab("web")} className={activeTab === "web" ? "active" : ""}>Web</button>
        <button onClick={() => setActiveTab("mobile")} className={activeTab === "mobile" ? "active" : ""}>Mobile</button>
        <button onClick={() => setActiveTab("ai")} className={activeTab === "ai" ? "active" : ""}>AI Apps</button>
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <img
  src={project.image}
  alt={project.title}
  className={project.type === "web" ? "web-img" : "mobile-img"}
/>
            <h4>{project.title}</h4>

            {/* 🌐 WEB */}
            {project.type === "web" && (
  <div className="app-buttons">
    <a href={project.link} target="_blank">Visit</a>
  </div>
)}

            {/* 📱 MOBILE / AI */}
            {(project.type === "mobile" || project.type === "ai") && (
              <div className="app-buttons">
                {project.android && (
                  <a href={project.android} target="_blank">Android</a>
                )}
                {project.ios && (
                  <a href={project.ios} target="_blank">iOS</a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;