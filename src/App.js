import About from "./components/About";
import DefaultCarousel from "./components/Carousel";
import Education from "./components/Education";
import DefaultNavbar from "./components/Navbar";
import Skills from "./components/Skills";
import Project from "./components/Project/Project"
import WelcomeMessage from "./components/WelcomeMessage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <DefaultNavbar/>
      <div className="relative bg-[#121212]">
        <DefaultCarousel/>
        <WelcomeMessage />
      </div>
      <About/>
      <Education/>
      <Project/>
      <Skills/>
      <Footer/>
    </>
  );
}

export default App;
