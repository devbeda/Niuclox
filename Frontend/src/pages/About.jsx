import React from "react";
import targetImg from "../assets/Target_img.jpg";
import ReviewsCard from "../components/atoms/ReviewsCard";
import AnimatedCounter from "../components/atoms/AnimatedCounter";
import Slider from "react-slick";
import { motion } from "framer-motion";

function About() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px", // keep 0 if you're controlling width with Tailwind
    slidesToShow: 3,
    speed: 500,
    autoplay: true, // 🔥 enables autoplay
    autoplaySpeed: 2000, // ⏱ time between slides (in ms)
    arrows: false,
    dots: false,
    pauseOnHover: true, // ⏸️ pause on mouse hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3.5,
        },
      },
    ],
  };

  const review_list = [
    {
      rating: 4.5,
      feedback: "work is awsome",
      name: "niuclox",
      location: "Hyderabad,India",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      rating: 4.5,
      feedback: "work is awsome",
      name: "niuclox",
      location: "Hyderabad,India",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      rating: 4.5,
      feedback: "work is awsome",
      name: "niuclox",
      location: "Hyderabad,India",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      rating: 4.5,
      feedback: "work is awsome",
      name: "niuclox",
      location: "Hyderabad,India",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      rating: 4.5,
      feedback: "work is awsome",
      name: "niuclox",
      location: "Hyderabad,India",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      rating: 4.5,
      feedback: "work is awsome",
      name: "niuclox",
      location: "Hyderabad,India",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="font-niucloxPrimary py-14  pt-[80px] scroll-smooth">
      <div className="overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="md:text-[2.7rem] sm:text-[2.2rem] text-[1.7rem] text-center  "
        >
          About Niuclox
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-center md:text-[1rem] sm:text-[0.9rem] text-[0.8rem] pt-5 text-niucloxGray md:px-[20%] sm:px-[10%] px-4"
        >
          Niuclox is a creative digital agency that specializes in designing
          modern websites, building custom web solutions, and helping brands
          grow online. We blend creativity with technology to deliver impactful
          digital experiences.
        </motion.p>
      </div>

      <div className="w-full  lg:px-40  mt-20 flex justify-center items-center ">
        <div className=" sm:flex-row flex flex-col-reverse w-[80%] text-niucloxGray h-auto bg-niucloxBlack items-center lg:px-5 md:px-3 sm:px-4 px-2 py-2 rounded-2xl">
          <div className="sm:w-[60%] w-[90%] flex flex-col items-start  gap-3 lg:px-10 md:px-6  ">
            <h2 className="lg:text-[2rem] md:text-[1.9rem] sm:text-[1.6rem] text-[1.3rem]  text-niucloxLightWhite">
              Our Target
            </h2>
            <p className="lg:text-[1rem] md:text-[0.9rem] sm:text-[0.7rem] text-[0.5rem] ">
              Our target audience includes small to medium-sized businesses,
              startups, and entrepreneurs who are looking to establish or
              improve their online presence. We focus on working with clients
              who value creative design, user-friendly websites, and effective
              digital strategies to grow their brand and reach more customers.
            </p>
          </div>
          <div className="mb-2 sm:mb-0">
            <img
              src={targetImg}
              className="rounded-2xl lg:w-[30rem] md:w-[25rem] sm:w-[20rem] w-[30rem]"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>

      <div className="md:mt-30 sm:mt-20 mt-12">
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              type: "tween", // use 'tween' to avoid shaking
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ amount: 0.4 }}
            className=" lg:text-[2.7rem] md:text-[2.5rem] sm:text-[2.2rem] text-[1.7rem] text-center"
          >
            Our proven <br /> success stories
          </motion.h2>
        </div>
        <div className="flex justify-between items-center lg:px-[22%] md:px-[20%] sm:px-[22%]  px-[10%] mt-9">
          <div className="text-center">
            <AnimatedCounter to={100} duration={1.5} suffix="+" />
            <p className="md:text-[1rem] sm:text-[0.8rem] text-[0.6rem]">
              Users in globaly
            </p>
          </div>
          <span className="w-[1px] h-[70px] bg-niucloxBlack"></span>
          <div className="text-center">
            <AnimatedCounter to={98} duration={1.5} suffix="%" />
            <p className="md:text-[1rem] sm:text-[0.8rem] text-[0.6rem]">
              Positive review
            </p>
          </div>
          <span className="w-[1.5px] h-[70px] bg-niucloxBlack"></span>
          <div className="text-center">
            <AnimatedCounter to={2} duration={2} suffix="+" />
            <p className="md:text-[1rem] sm:text-[0.8rem] text-[0.6rem]">
              Years of business
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-6 mt-16">
        <Slider {...settings}>
          {review_list.map((review, index) => (
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
              key={index}
              className="md:px-16 sm:px-10 px-8"
            >
              <ReviewsCard review={review} />
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default About;
