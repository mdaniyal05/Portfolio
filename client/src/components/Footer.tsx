import { FaLocationArrow } from "react-icons/fa6";
import Button from "./Button";

const links = [
  {
    id: 1,
    img: "/github2.svg",
  },
  {
    id: 2,
    img: "/linkedin.svg",
  },
  {
    id: 3,
    img: "/whatsapp.svg",
  },
];

const Footer = () => {
  return (
    <footer className="w-full pt-15 pb-10" id="footer">
      <div className="flex flex-col items-center">
        <h1 className="lg:max-w-[45vw] text-textColor text-4xl text-center">
          Ready to take <span className="text-secondaryColor">YOUR</span>{" "}
          digital presence to the next level?
        </h1>
        <p className="text-textColor mt-10 my-5 text-center text-4xl">
          Reach out to <span className="text-secondaryColor">ME</span> today and
          let&apos;s discuss how I can help{" "}
          <span className="text-secondaryColor">YOU</span> achieve your goals.
        </p>
        <a href="https://mail.google.com/mail" target="_blank">
          <Button
            title="Get in Touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-accentColor">
          Copyright © {new Date().getFullYear()} Daniyal
        </p>
        <div className="flex items-center md:gap-3 gap-6 mt-10">
          {links.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-primaryColor rounded-lg border border-secondaryColor"
            >
              <img
                src={info.img}
                alt="icons"
                width={20}
                height={20}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
