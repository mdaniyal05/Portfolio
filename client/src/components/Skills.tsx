import { skills } from "@/data/skills";

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
        <div className="w-70 sm:w-80 md:w-150 flex justify-center items-center">
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
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
