import React from "react";
import ServiceCard from "../components/atoms/ServiceCard";
import project1 from "../assets/projects/1.svg";
import project2 from "../assets/projects/2.svg";
import project3 from "../assets/projects/3.svg";
import project4 from "../assets/projects/4.svg";
import project5 from "../assets/projects/5.svg";
import { motion } from "framer-motion";

function Projects() {
  const service_list = [
    {
      title: "Website Devlopment",
      description:
        "We build fast, responsive, and scalable websites tailored to your business needs. From custom web apps to stunning UI/UX, we turn your ideas into powerful digital experiences.",
    },
    {
      title: "Mobile Application Devlopment",
      description:
        "We craft high-performance mobile apps for Android and iOS that are fast, user-friendly, and built to scale. From idea to launch, we deliver apps that engage and perform.",
    },
    {
      title: "Ui/Ux Desgin",
      description:
        "We design intuitive, visually stunning user interfaces and seamless user experiences that keep your audience engaged and coming back. Great design starts with understanding users.",
    },
  ];
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5, // 200ms delay between each card
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
  };

  return (
    <div className=" pt-[80px]">
      <div className="overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="md:text-[2.7rem] sm:text-[2.2rem] text-[1.8rem] text-center  "
        >
          Our Services
        </motion.h1>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="sm:flex-row  flex-col flex   justify-center items-center lg:hap-10 md:gap-3 sm:gap-3 gap-5  py-10"
        >
          {service_list.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div>
        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="md:text-[2.7rem] sm:text-[2.2rem] text-[1.8rem] text-center  "
        >
          Our Recent Projects
        </motion.h1>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{  amount: 0.4 }} // scroll trigger
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-5 sm:px-8 md:px-[10%] py-10"
        >
          {/* First 4 images */}
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
          <motion.img
            variants={cardVariants}
            src={project4}
            alt="Project 4"
            className="w-full h-auto rounded-xl shadow-md"
          />

          {/* Last big image */}
          <motion.div
            variants={cardVariants}
            className=" sm:col-span-2 flex justify-center"
          >
            <img
              src={project5}
              alt="Project 5"
              className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] h-auto rounded-xl shadow-md"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
