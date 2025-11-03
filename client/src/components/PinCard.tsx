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
    link: "https://zeno-finance-tracker-client.vercel.app",
  },
  {
    id: 2,
    title: "PingNet Messenger",
    des: "Experience seamless, real-time communication with PingNet Messenger - A modern platform designed to connect you effortlessly with friends and family.",
    img: "/pingnet.png",
    iconLists: [
      "/react.svg",
      "/ts.svg",
      "/nodejs.svg",
      "/mongodb.svg",
      "/express.svg",
    ],
    link: "https://pingnet-messenger.vercel.app",
  },
];

export default function AnimatedPin() {
  return (
    <div className="py-20 flex flex-col justify-center items-center">
      <h1 className="heading text-textColor font-bold text-4xl text-center">
        A Selection of <span className="text-secondaryColor">My Work</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16">
        {projects.map((item) => (
          <div
            className="lg:min-h-130 h-150 flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative rounded-2xl flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] mb-10">
                <div className="relative w-full h-full lg:rounded-3xl">
                  <img src={item.img} alt="cover" className="bg-cover" loading="lazy"/>
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl text-secondaryColor md:text-xl text-base">
                {item.title}
              </h1>

              <p
                className="font-medium text-textColor text-sm"
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
                      <img src={icon} alt="icon5" className="p-2" loading="lazy" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-[1.1rem] md:text-xs text-sm text-accentColor">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3 text-accentColor" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
