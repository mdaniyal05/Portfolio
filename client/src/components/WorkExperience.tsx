import { workExperience } from "@/data/experience";

const WorkExperience = () => {
  return (
    <section
      className="py-15 w-full flex flex-col justify-center items-center min-h-screen"
      id="experience"
    >
      <h1 className="text-textColor font-bold text-5xl text-center">
        My Work <span className="text-secondaryColor">Experience</span>
      </h1>
      <div className="w-full mt-10 grid grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <div
            key={card.id}
            className="flex flex-col justify-center items-center p-5 text-center text-textColor border-2 border-secondaryColor rounded-2xl"
          >
            <div className="flex flex-col items-center justify-center p-3 py-6 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                loading="lazy"
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5 flex flex-col items-center justify-center">
                <h1 className="text-xl md:text-3xl font-bold text-accentColor">
                  {card.title}
                </h1>
                <p className="text-textColor mt-3 font-semibold text-[1.2rem]">
                  {card.desc}
                </p>
              </div>
            </div>
            <p className="text-sm border-2 font-bold border-secondaryColor rounded-full text-textColor px-2 py-0.5">
              {card.time}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
