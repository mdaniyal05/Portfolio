import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/floating-navbar";
import BentoGridComp from "./components/Grid";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { navItems } from "./data/nav";

function App() {
  return (
    <main className="bg-primaryColor text-textlight relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <BentoGridComp />
        <Projects />
        <WorkExperience />
        <Skills />
        <Footer />
      </div>
    </main>
  );
}

export default App;
