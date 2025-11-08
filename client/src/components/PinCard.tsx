import { projects } from "@/data/projects";
import { PinContainer } from "./ui/3d-pin";

export default function AnimatedPin() {
  return (
    <section
      className="py-15 flex flex-col justify-center items-center min-h-screen"
      id="projects"
    >
      <h1 className="heading text-textColor font-bold text-4xl text-center">
        A Selection of <span className="text-secondaryColor">My Work</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16">
        {projects.map((item) => (
          <div
            className="lg:min-h-130 h-125 flex items-center justify-center sm:w-96 w-[80vw]"
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

              <h1 className="font-bold lg:text-2xl text-secondaryColor md:text-xl text-base">
                {item.title}
              </h1>

              <p
                className="font-semibold text-textColor text-[1rem]"
                style={{
                  color: "#BEC1DD",
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
                      className="border rounded-full bg-primaryColor border-secondaryColor lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
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
                  <div className="w-10 h-10 cursor-pointer flex justify-center items-center bg-primaryColor rounded-lg border border-secondaryColor hover:bg-secondaryColor">
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
