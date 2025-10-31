import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/floating-navbar";

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
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
    </main>
  );
}

export default App;
