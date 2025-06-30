import React, { useState, useEffect, useRef } from "react";
import companyLogo from "../../assets/black_logo.svg";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/project", label: "Services" },
    { path: "/contact", label: "Contact Us" },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
  };

  // Handle outside click to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="w-full fixed top-0 z-50 px-5 sm:px-8 md:px-20 md:py-6 py-3  backdrop-blur-md flex items-center justify-between"
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={companyLogo} alt="Niuclox Logo" className="w-[120px] md:w-[175px]" />
      </motion.div>

      {/* Desktop Nav */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="hidden md:flex gap-5 font-niucloxPrimary text-[1.1rem]"
      >
        {navLinks.map((link, index) => (
          <motion.div key={index} variants={cardVariants}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "hover_effect bg-niucloxBlack text-niucloxLightWhite rounded-2xl"
                  : "hover_effect"
              }
            >
              {link.label}
            </NavLink>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden text-3xl cursor-pointer text-niucloxBlack"
        onClick={toggleMenu}
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[65px] left-0 w-full bg-niucloxWhite backdrop-blur-md px-6 py-5 flex flex-col gap-4 text-center z-40 shadow-md"
          >
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setIsOpen(false)} // Close on link click
                className={({ isActive }) =>
                  isActive
                    ? "hover_effect bg-niucloxBlack text-white rounded-2xl"
                    : "hover_effect"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
