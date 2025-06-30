import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import footerBg from "../../assets/footerbg.jpg";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const socialContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function Footer() {
  return (
    <div
      className="relative h-[20rem] sm:h-[17rem] md:h-[40rem] font-niucloxPrimary text-niucloxWhite py-7"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />
      <motion.div
        className="relative z-10 h-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
      >
        <div className="h-[80%] w-full flex flex-col justify-center items-center">
          <motion.div variants={itemVariants}>
            <h1 className="lg:text-[4rem] md:text-[3.5rem] sm:text-[2rem] text-[1.6rem] font-[600px] text-center">
              Take your Bussiness<br></br>online from today
            </h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center mt-7"
          >
            <NavLink
              to={"/contact"}
              className="rounded-3xl hover2_effect border-niucloxWhite border-[0.1px] px-5 py-1 text-[0.7rem] sm:text-[0.9rem] md:text-lg"
            >
              Let's Talk
            </NavLink>
          </motion.div>

          <motion.div
            variants={socialContainerVariants}
            className="lg:px-96 md:px-0 sm:px-30 px-10 flex items-center w-full justify-between mt-5 md:mt-15"
          >
            <motion.a
              variants={itemVariants}
              href=""
              className="md:text-[18px] sm:text-[14px] text-[12px] hover:text-instagram font-[600px] duration-300"
            >
              Instagram
            </motion.a>
            <motion.a
              variants={itemVariants}
              href=""
              className="md:text-[18px] sm:text-[14px] text-[12px] hover:text-facebook duration-300"
            >
              Facebook
            </motion.a>
            <motion.a
              variants={itemVariants}
              href=""
              className="md:text-[18px] sm:text-[14px] text-[12px] hover:text-linkedin duration-300"
            >
              LinkedIn
            </motion.a>
            <motion.a
              variants={itemVariants}
              href=""
              className="md:text-[18px] sm:text-[14px] text-[12px] hover:text-twitter duration-300"
            >
              X
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-10 border-t-1 md:mx-15 sm:mx-[3rem] mx-[3rem] h-[17%] md:px-5 px-1 flex items-center justify-between"
        >
          <div className="h-full flex items-center justify-between">
            <h3 className="md:text-[1rem] sm:text-[0.6rem] text-[0.3rem]">
              ©2025 InSync. All right reserved by Niuclox
            </h3>
          </div>
          <div className="flex md:gap-7 sm:gap-4 gap-2">
            <a
              href=""
              className="md:text-[1rem] sm:text-[0.8rem] text-[0.4rem] "
            >
              Terms of Service
            </a>
            <a
              href=""
              className="md:text-[1rem] sm:text-[0.8rem] text-[0.4rem] "
            >
              Policy Service
            </a>
            <a
              href=""
              className="md:text-[1rem] sm:text-[0.8rem] text-[0.4rem] "
            >
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Footer;
