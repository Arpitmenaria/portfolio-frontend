import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Testinomials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Testinomials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;