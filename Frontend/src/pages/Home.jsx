import React, { useState } from "react";
import hero_image from "../assets/hero_image.jpg";
import { BtnCmp } from "../components/atoms/components.js";
import team from "../assets/team.jpg";
import imac_svg from "../assets/imac.svg";
import macbook from "../assets/macbook.svg";
import ipad from "../assets/ipad.svg";
import iphone from "../assets/iphone.svg";
import FaqCard from "../components/atoms/FaqCard.jsx";
import bg_product from "../assets/bgnew9.avif";
import project1 from "../assets/projects/1.svg";
import project2 from "../assets/projects/2.svg";
import project3 from "../assets/projects/3.svg";
import { motion } from "motion/react";
import AnimatedCounter from "../components/atoms/AnimatedCounter";

function Home() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faq_list = [
    {
      title: "How much do your services cost?",
      description:
        "Our pricing depends on the project scope and complexity. We offer flexible packages tailored to your budget. Get in touch for a custom quote.",
    },
    {
      title: "How long will my project take?",
      description:
        "Project timelines vary based on the service. A standard website takes 1-3 weeks, while ads and video editing can be done within 3-5 days depending on requirements.",
    },
    {
      title: "Can you work with clients outside India?",
      description:
        "Absolutely. We work with clients worldwide and can coordinate over WhatsApp, email, or video calls as needed.",
    },
    {
      title: "Will I own the final files?",
      description:
        "Yes. Once the project is complete and payment is received, all final assets will be delivered to you, and you will have full ownership.",
    },
    {
      title: "How do I get started?",
      description:
        "Simply message us on WhatsApp on +91 79786 31242 or fill out our contact form. We'll schedule a quick call to understand your needs and start planning your project!",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3, // 200ms delay between each card
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
  };

  return (
    <div className=" text-niucloxBlack font-niucloxPrimary overflow-y-hidden   ">
      {/* HERO SECTION */}
      <div className=" bg-niucloxLightWhite  flex flex-col-reverse sm:flex-row  items-center sm:h-auto h-[85vh] sm:justify-between justify-evenly md:px-14 px-7  md:pt-[100px] sm:pt-[80px]  ">
        <div className="md:mt-10 mt-0 ">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                duration: 2,
                bounce: 0,
                delay: 0.2,
              }}
              className="md:text-[2.2rem] lg:text-[3.5rem] sm:text-[2rem] text-[1.4rem] text-center sm:text-start overflow-hidden"
            >
              Build semless Website & App <br className="sm:hidden"></br> for
              your Bussiness{" "}
            </motion.h1>
          </div>
          <div className="mt-6 ">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                duration: 2,
                bounce: 0,
                delay: 0.2,
              }}
              className="md:text-[1.2rem] text-center sm:text-start text-[0.9rem] text-niucloxGray overflow-hidden"
            >
              We will help you take to <br className="hidden sm:flex"></br>your
              bussiness online.{" "}
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              duration: 2,
              bounce: 0,
              delay: 0.2,
            }}
            className="flex mt-8 overflow-hidden justify-center sm:justify-start"
          >
            <BtnCmp title={"Contact Us"} nav={"/contact"} />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,

            delay: 0.2,
          }}
          className="relative overflow-hidden"
        >
          <img
            src={hero_image}
            alt=""
            className="md:w-[60rem] sm:w-[45rem] w-[35rem] rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>

      {/* SERVICE SECTION */}
      <div className="bg-niucloxLightWhite md:py-20 py-14">
        {/* Section Heading */}
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              type: "smooth",

              duration: 1,
            },
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center text-[1.8rem] lg:text-[3rem] md:text-[2.7rem] font-semibold text-niucloxBlack overflow-hidden"
        >
          Our Digital <br />
          Agency Services
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              type: "tween",
              duration: 1,
            },
          }}
          viewport={{ once: true, amount: 0.8 }}
          className="text-center mt-2 text-[0.8rem] md:text-[1rem] text-niucloxGray overflow-hidden"
        >
          We provide a variety of digital solutions including <br />
          responsive web design, app development & more.
        </motion.p>

        {/* Services Cards */}
        <div className="w-full lg:flex md:flex-row flex flex-col h-auto  gap-6 px-[10%] py-12">
          {/* Mobile App Section */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                duration: 1,
              },
            }}
            viewport={{ once: true, amount: 0.8 }}
            className="relative flex-1  px-6 py-5 rounded-2xl  transition duration-300 overflow-hidden"
            style={{
              backgroundImage: `url(${bg_product})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0 rounded-2xl" />

            {/* Content */}
            <div className="relative z-5">
              <h1 className="md:text-[1.8rem] text-[1.3rem] font-medium text-niucloxLightWhite">
                Mobile Application
              </h1>
              <p className="text-niucloxGray md:text-[1rem] text-[0.8rem]">
                Our creative team works to create an app that reflects you brand
                identity while ensuring maximum user convenience.
              </p>

              <div className="flex justify-center mt-5 gap-10">
                <div className="flex flex-col items-center gap-3">
                  <img
                    src={iphone}
                    alt="MacBook view"
                    className="md:h-40 h-20 "
                  />
                  <h3 className="bg-niucloxBlack text-niucloxLightWhite px-4 py-1 rounded-2xl md:text-[1rem] text-[0.6rem]">
                    MacBook View
                  </h3>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <img src={ipad} alt="iMac view" className="md:h-40 h-20" />
                  <h3 className="bg-niucloxBlack text-niucloxLightWhite px-4 py-1 rounded-2xl md:text-[1rem] text-[0.6rem]">
                    iMac View
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Website Section */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                duration: 1,
              },
            }}
            viewport={{ once: true, amount: 0.8 }}
            className="relative flex-1  px-6 py-5 rounded-2xl  transition duration-300 overflow-hidden"
            style={{
              backgroundImage: `url(${bg_product})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0 rounded-2xl" />

            {/* Content */}
            <div className="relative z-5">
              <h1 className="md:text-[1.8rem] text-[1.3rem] font-medium text-niucloxLightWhite">
                Website
              </h1>
              <p className="text-niucloxGray md:text-[1rem] text-[0.8rem]">
                We develop responsive, fast, and engaging websites that align
                with your brand's vision and business goals.
              </p>

              <div className="flex justify-center mt-5 gap-10">
                <div className="flex flex-col items-center gap-3">
                  <img
                    src={macbook}
                    alt="MacBook view"
                    className="md:h-40 h-20 "
                  />
                  <h3 className="bg-niucloxBlack text-niucloxLightWhite px-4 py-1 rounded-2xl md:text-[1rem] text-[0.6rem]">
                    MacBook View
                  </h3>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <img
                    src={imac_svg}
                    alt="iMac view"
                    className="md:h-40 h-20"
                  />
                  <h3 className="bg-niucloxBlack text-niucloxLightWhite px-4 py-1 rounded-2xl md:text-[1rem] text-[0.6rem]">
                    iMac View
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row  w-full px-10 py-10 gap-10 items-center justify-between">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                type: "tween",
                duration: 1,
              },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full md:w-[45%] overflow-hidden"
          >
            <img src={team} alt="" className=" rounded-2xl shadow-2xl" />
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                type: "tween",
                duration: 1,
              },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full md:w-[50%] h-auto py-6 flex flex-col gap-6 overflow-hidden"
          >
            <h1 className="md:text-[2.5rem] text-[1.45rem] font-semibold text-niucloxBlack leading-snug">
              We are Ready to Provide <br /> the Best Service
            </h1>
            <p className="text-niucloxGray md:text-[1rem] text-[0.8rem]  leading-relaxed">
              Our commitment to excellence drives us to go above and beyond,
              ensuring every interaction with us is a seamless and satisfying
              journey.
            </p>
            <div className="flex">
              <BtnCmp title={"Let's Connect"} nav={"/contact"} />
            </div>
            <div className="flex md:gap-20 gap-17 mt-10">
              <div className="flex flex-col">
                <AnimatedCounter to={100} duration={1.5} suffix="+" />
                <h3 className="md:text-xl text-[1rem] ">Clients</h3>
              </div>
              <div className="flex flex-col">
                <AnimatedCounter to={7} duration={2} suffix="+" />
                <h3 className="md:text-xl text-[1rem]">Years of Experience</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project section */}
      <div className="md:px-10 px-7 md:py-10 py-8">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              type: "smooth",
              bounce: 0.4,
              duration: 0.2,
            },
          }}
          viewport={{ once: true, amount: 0.8 }}
          className="md:text-[2.7rem] text-[2rem] text-center overflow-hidden "
        >
          Our Recent Projects
        </motion.h1>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-rows-1 sm:grid-cols-3 gap-6 px-[10%] py-10 overflow-hidden"
        >
          <motion.img
            variants={cardVariants}
            src={project1}
            alt="Project 1"
            className="w-full h-auto rounded-xl shadow-md"
          />
          <motion.img
            variants={cardVariants}
            src={project2}
            alt="Project 2"
            className="w-full h-auto rounded-xl shadow-md"
          />
          <motion.img
            variants={cardVariants}
            src={project3}
            alt="Project 3"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </motion.div>
        <div className="flex justify-center items-center w-full">
          <BtnCmp title={"See More >>"} nav={"/services"} />
        </div>
      </div>

      {/* FAQ's Section  */}
      <div className="h-[50rem] bg-niucloxLightWhite py-10 px-8 md:px-25">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              type: "smooth",
              bounce: 0.4,
              duration: 0.8,
            },
          }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center text-[1.5rem] md:text-[2.7rem] sm:text-[1.8rem] overflow-hidden"
        >
          Frequntly Asked <br /> Questions (FAQ's)
        </motion.h1>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              type: "smooth",
              bounce: 0.4,
              duration: 0.4,
            },
          }}
          viewport={{ once: true, amount: 0.4 }}
          className=" flex flex-col w-full  items-center justify-start mt-9 gap-3 h-[80%] overflow-hidden md:py-8 "
        >
          {faq_list.map((faq, index) => (
            <FaqCard
              faq={faq}
              key={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
