import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/floating-navbar";
import BentoGridComp from "./components/Grid";
import AnimatedPin from "./components/PinCard";
import WorkExperience from "./components/WorkExperience";

const navItems = [
  {
    name: "ABOUT",
    link: "/about",
  },
  {
    name: "PROJECTS",
    link: "/projects",
  },
  {
    name: "SKILLS",
    link: "/skills",
  },
  {
    name: "CONTACT",
    link: "/contact",
  },
];

function App() {
  return (
    <main className="bg-primaryColor text-textlight relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <BentoGridComp />
        <AnimatedPin />
        <WorkExperience />
      </div>
    </main>
  );
}

export default App;
