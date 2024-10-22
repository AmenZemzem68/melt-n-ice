import { useState } from "react";
import logo from "../assets/images/Melt'n'Ice.png";
import { navLinks } from "../constants";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const firstHalf = navLinks.slice(0, Math.floor(navLinks.length / 2));
  const secondHalf = navLinks.slice(Math.floor(navLinks.length / 2));

  return (
    <header className="padding-x py-8 absolute z-10 w-full bg-background-alt">
      <nav className="nav flex justify-between items-center max-container">
        <ul className="flex flex-1 justify-end items-center gap-16 max-lg:hidden">
          {firstHalf.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg py-2 px-5 transition ease duration-50 hover:border-b-2 hover:border-button-color hover:text-button-color"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/"
          className="flex justify-center w-[200px] mx-10 max-sm:justify-start max-sm:mx-0"
        >
          <img src={logo} alt="logo" className="w-full max-sm:w-2/3" />
        </a>

        <ul className="flex flex-1 justify-start items-center gap-16 max-lg:hidden">
          {secondHalf.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg py-2 px-5 transition ease duration-50 hover:border-b-2 hover:border-button-color hover:text-button-color"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <FiMenu fontSize={30} onClick={() => setMenuOpen(!menuOpen)} />
        </div>
        <div
          className={`absolute top-0 left-0 w-full h-screen bg-background-alt max-lg:block z-20 transition-transform duration-700 ${
            menuOpen ? "transform translate-y-0" : "transform -translate-y-full"
          }`}
        >
          <button
            className="absolute top-4 right-6 text-3xl text-900"
            onClick={() => setMenuOpen(false)}
          >
            <FiX />
          </button>
          <ul className="font-palanquin text-center font-medium flex flex-col justify-center items-center h-full p-4">
            {navLinks.map((item) => (
              <li key={item.label} className="mb-4 w-full">
                <a
                  href={item.href}
                  className="block py-2 px-3 text-xl text-900 text-button-color"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
