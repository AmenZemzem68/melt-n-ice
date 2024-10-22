import logo from "../assets/images/melt'n'ice.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={logo}
              alt="logo"
              width={150}
              height={46}
              className="m-0"
            />
          </a>
          <p className="mt-6 text-white text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get ready for the new season with your favorite ice cream at Melt
            'n' Ice! Find your perfect flavor in-store and enjoy exclusive
            rewards!
          </p>
          <div className="flex items-center gap-5 mt-8">
            <div className="flex justify-center items-center w-12 h-12 bg-button-color rounded-full">
              <FaFacebookF className="text-white" size={24} />
            </div>
            <div className="flex justify-center items-center w-12 h-12 bg-button-color rounded-full">
              <FaInstagram className="text-white" size={24} />
            </div>
            <div className="flex justify-center items-center w-12 h-12 bg-button-color rounded-full">
              <FaTwitter className="text-white" size={24} />
            </div>
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-button-color">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-white text-base leading-normal text-white-400 transition ease duration-50 hover:text-button-color"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-8 max-sm:mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-center items-center gap-2 font-montserrat text-white">
          <AiOutlineCopyrightCircle className="text-white" size={20} />
          <p>Copyright. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
