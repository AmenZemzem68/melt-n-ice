import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import spoon from "../assets/images/line.svg";
import chocolat from "../assets/images/rev_home4_01.png";
import { motion } from "framer-motion";
import { IoIceCreamOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full grid grid-cols-2 gap-8 max-container pt-20 items-center max-lg:grid-cols-1"
    >
      {/* Left Content */}
      <motion.div
        className="relative flex flex-col justify-start xl:w-full w-full pt-10 max-sm:pt-16 max-xl:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="text-xl font-palanquin text-button-color max-sm:text-[22px]"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Our Summer specials
        </motion.p>
        <motion.img
          src={spoon}
          className="my-3 w-40 max-sm:w-20"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        />
        <motion.h1
          className="mt-1 font-montserrat text-6xl max-sm:text-[40px] text-left max-sm:leading-[82px] font-bold tracking-wider"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          The New Flavors{" "}
          <span className="text-button-color max-sm:-my-5">Melt 'n' Ice</span>{" "}
          Treats
        </motion.h1>
        <motion.p
          className="font-montserrat text-slate-gray text-lg leading-8 mt-4 mb-8 sm:max-w-sm text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Discover delightful ice cream flavors, crafted with the finest
          ingredients to cool your summer days.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <Button label="Order Now" iconURL={arrowRight} />
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.img
        src={chocolat}
        alt="Chocolat Right"
        className="w-auto h-auto object-cover p-24 justify-self-center max-lg:w-2/3 max-sm:hidden"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      />
    </section>
  );
};

export default Hero;
