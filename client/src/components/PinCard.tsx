import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/3d-pin";

const projects = [
  {
    id: 1,
    title: "Zeno Finance Tracker",
    des: "Track your income, expenses, and savings all in one place. Stay on top of your financial goals with simple, powerful tools designed to make budgeting effortless.",
    img: "/zeno.png",
    iconLists: [
      "/react.svg",
      "/js.svg",
      "/nodejs.svg",
      "/postgresql.svg",
      "/express.svg",
    ],
    link: "/ui.earth.com",
  },
];

export default function AnimatedPin() {
  return (
    <div className="py-20 h-screen">
      <h1 className="heading text-neutral-200 text-3xl text-center">
        A Selection of <span className="text-purple-400">My Work</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-130 h-100 flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl text-neutral-500 md:text-xl text-base line-clamp-2">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-neutral-300 text-sm line-clamp-4"
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
                      className="border rounded-full bg-neutral-700 border-zinc-100 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple-400">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
