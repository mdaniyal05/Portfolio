import { projects } from "@/data/projects";
import { PinContainer } from "./ui/3d-pin";

export default function Projects() {
  return (
    <section
      className="py-15 flex flex-col justify-center items-center min-h-screen"
      id="projects"
    >
      <h1 className="heading text-textColor font-bold text-5xl text-center">
        A <span className="text-secondaryColor">Selection</span> of My{" "}
        <span className="text-secondaryColor">Work</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-2 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="h-120 flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative rounded-2xl flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] mb-10">
                <div className="relative w-full h-full lg:rounded-3xl">
                  <img
                    src={item.img}
                    alt="cover"
                    className="bg-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl text-accentColor md:text-xl text-base">
                {item.title}
              </h1>

              <p
                className="font-semibold text-textColor text-[1rem]"
                style={{
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border-2 rounded-full bg-primaryColor border-secondaryColor lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img
                        src={icon}
                        alt="icon5"
                        className="p-2"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                <a href={item.github} target="_blank">
                  <div className="w-10 h-10 cursor-pointer flex justify-center items-center bg-primaryColor rounded-lg border-2 border-secondaryColor hover:bg-secondaryColor">
                    <img
                      src="/github.svg"
                      alt="icons"
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
}
