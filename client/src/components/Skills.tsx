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
];

const Skills = () => {
  return (
    <section className="py-20 w-full flex flex-col justify-center items-center gap-5">
      <h1 className="text-textColor font-bold text-4xl">
        My <span className="text-secondaryColor">Skills</span>
      </h1>
      <div className="flex items-center justify-center mt-5">
        {/* Right Side (Static Icons Grid) */}
        <div className="w-70 sm:w-80 md:w-150 flex justify-center items-center">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {/* Static Icons */}
            {skills.map((item) => (
              <div className="text-center">
                <div className="p-4 bg-accentColor rounded-lg shadow-lg flex flex-col justify-center items-center">
                  <img src={item.svg} alt={item.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-center">
        <div className="w-full md:w-1/2 relative p-6 sm:px-28 md:p-0">
          <p className="p-3 text-[1.2rem] leading-relaxed text-textColor">
            These are the tools and technologies that I use daily to develop web
            applications. With a strong foundation in frontend and backend, I
            focus on delivering clean, maintainable code and intuitive user
            experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
