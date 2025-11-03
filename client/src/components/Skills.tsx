const skills = [
  {
    svg: "/js.svg",
    name: "JavaScript",
  },
  {
    svg: "/ts.svg",
    name: "TypeScript",
  },
  {
    svg: "/nodejs.svg",
    name: "Node JS",
  },
  {
    svg: "/react.svg",
    name: "React",
  },
  {
    svg: "/mongodb.svg",
    name: "Mongo DB",
  },
  {
    svg: "/express.svg",
    name: "Express JS",
  },
  {
    svg: "/linux.svg",
    name: "Linux",
  },
  {
    svg: "/arch.svg",
    name: "Arch Linux",
  },
  {
    svg: "/api.svg",
    name: "REST API",
  },
  {
    svg: "/css.svg",
    name: "CSS",
  },
  {
    svg: "/git.svg",
    name: "Git",
  },
  {
    svg: "/github.svg",
    name: "Github",
  },
  {
    svg: "/html.svg",
    name: "HTML",
  },
  {
    svg: "/materialui.svg",
    name: "Material UI",
  },
  {
    svg: "/postgresql.svg",
    name: "PostgreSQL",
  },
  {
    svg: "/redux.svg",
    name: "Redux Toolkit",
  },
  {
    svg: "/npm.svg",
    name: "NPM",
  },
  {
    svg: "/tailwind.svg",
    name: "Tailwind CSS",
  },
  {
    svg: "/java.svg",
    name: "Java",
  },
  {
    svg: "/mongoose.svg",
    name: "Mongoose",
  },
  {
    svg: "/motion.svg",
    name: "Framer Motion",
  },
  {
    svg: "/nextjs.svg",
    name: "Next JS",
  },
  {
    svg: "/python.svg",
    name: "Python",
  },
  {
    svg: "/sequelize.svg",
    name: "Sequelize",
  },
  {
    svg: "/bash.svg",
    name: "Bash",
  },
  {
    svg: "/terminal.svg",
    name: "Terminal",
  },
  {
    svg: "/hyprland.svg",
    name: "Hyprland",
  },
  {
    svg: "/godot.svg",
    name: "Godot",
  },
];

const Skills = () => {
  return (
    <section
      className="py-15 w-full flex flex-col justify-center items-center gap-5 min-h-screen"
      id="skills"
    >
      <h1 className="text-textColor font-bold text-4xl">
        My <span className="text-secondaryColor">Skills</span>
      </h1>
      <div className="flex items-center justify-center mt-5">
        {/* Right Side (Static Icons Grid) */}
        <div className="w-70 sm:w-80 md:w-150 flex justify-center items-center">
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
            {/* Static Icons */}
            {skills.map((item, idx) => (
              <div className="text-center" key={idx}>
                <div className="p-4 w-20 h-20 bg-primaryColor border border-secondaryColor rounded-lg shadow-lg flex flex-col justify-center items-center">
                  <img src={item.svg} alt={item.name} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
