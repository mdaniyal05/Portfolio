import { workExperience } from "@/data/experience";
import { Button } from "./ui/moving-border";

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
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-textColor dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                loading="lazy"
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-3xl font-bold text-accentColor">
                  {card.title}
                </h1>
                <p className="text-start text-textColor mt-3 font-semibold text-[1.2rem]">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
