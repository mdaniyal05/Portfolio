import { Button } from "./ui/moving-border";

const workExperience = [
  {
    id: 1,
    title: "Indie Game Pre-Order Landing Page",
    desc: "Developed a responsive landing page for an indie game developer to promote and enable pre-orders for the title 'The Screams of Kainarah'.",
    className: "md:col-span-2",
    thumbnail: "/experience.svg",
  },
  {
    id: 2,
    title: "Freelance Frontend Developer",
    desc: "Provided freelance frontend development services, focusing on creating responsive and user-friendly web interfaces.",
    className: "md:col-span-2",
    thumbnail: "/experience.svg",
  },
];

const WorkExperience = () => {
  return (
    <div className="py-20 w-full flex flex-col justify-center items-center">
      <h1 className="text-textColor font-bold text-4xl">
        My <span className="text-secondaryColor">Work Experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
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
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold text-accentColor">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
