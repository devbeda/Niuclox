import React from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion"; // ← Use framer-motion instead of motion/react

function FaqCard({ faq, isOpen, onToggle }) {
  return (
    <motion.div
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
      viewport={{  once: true,amount: 0.5 }}
      className="flex justify-between w-full md:w-3/5 border-[0.01rem] border-niucloxWhite bg-niucloxWhite rounded-2xl px-3 py-2 md:px-8 md:py-3"
    >
      <div className="flex flex-col w-11/12 gap-2 items-start justify-center ">
        <h2 className="md:text-[1.6rem] sm:text-[1.2rem]  text-[1rem] font-[500]">{faq.title}</h2>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.p
              key="answer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-niucloxGray text-[0.7rem] md:text-[1rem] overflow-hidden"
            >
              {faq.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div
        className="flex w-[2.5rem] h-[2.5rem] justify-center items-center rounded-full cursor-pointer"
        onClick={onToggle}
      >
        <h3
          className={`text-niucloxBlack text-2xl transition-transform duration-500 ${
            isOpen ? "scale-y-[-1]" : "scale-y-[1]"
          }`}
        >
          <IoChevronDownSharp />
        </h3>
      </div>
    </motion.div>
  );
}

export default FaqCard;
