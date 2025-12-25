import { skills } from "@/data/skills";

const Skills = () => {
  return (
    <section
      className="py-15 w-full flex flex-col justify-center items-center gap-5 min-h-screen"
      id="skills"
    >
      <h1 className="text-textColor font-bold text-5xl">
        My <span className="text-secondaryColor">Skills</span> &{" "}
        <span className="text-secondaryColor">Tools</span>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 mt-10">
        {skills.map((item, idx) => (
          <div
            className="p-2 w-40 h-40 bg-primaryColor border-2 border-secondaryColor rounded-lg shadow-lg flex flex-col justify-center items-center transition transform hover:scale-105 hover:bg-gray-600"
            key={idx}
          >
            <img
              src={item.svg}
              alt={item.name}
              className="mb-3"
              width={75}
              height={75}
              loading="lazy"
            />
            <span className="text-textColor font-semibold text-center">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
