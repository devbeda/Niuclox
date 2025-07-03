import React from "react";
import blackbg from "../assets/blackbg1.jpg";
import { BsTelephone } from "react-icons/bs";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { LuFacebook, LuInstagram } from "react-icons/lu";
import { AiOutlineLinkedin } from "react-icons/ai";
import { useForm } from "react-hook-form";
import BtnCmp from "../components/atoms/BtnCmp";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
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

  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const templateParams = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone_no: data.phone_no,
      message: data.message,
      time: new Date().toLocaleString("en-IN", {
        dateStyle: "long",
        timeStyle: "short",
      }),
    };

    emailjs
      .send(
        "service_3o2x1eg",
        "template_er41n8p",
        templateParams,
        "_Hb-bO7KyCMFXs7qj"
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen py-10 pt-[80px] flex justify-center items-center font-niucloxPrimary bg-white">
      <div className=" md:flex-row lg:flex-row sm:flex-row flex flex-col-reverse w-[90%] max-w-6xl border border-niucloxGray rounded-2xl overflow-hidden shadow-md">
        {/* Left Info Section */}
        <div
          className="sm:w-2/5 w-full bg-cover bg-center text-white md:py-8 sm:px-6 py-5 px-6 flex flex-col gap-3 justify-between"
          style={{ backgroundImage: `url(${blackbg})` }}
        >
          <div className="flex flex-col gap-8">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="md:text-4xl sm:text-[1.6rem] text-[1.5rem] "
              >
                Contact Us
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="md:text-sm sm:text-[0.7rem] text-[0.6rem] text-niucloxGray"
              >
                If you have any questions, feel free to get in touch with us.
              </motion.p>
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="md:text-sm sm:text-[0.7rem] text-[0.6rem] space-y-2"
            >
              <motion.div
                variants={cardVariants}
                className="flex items-center gap-2"
              >
                <BsTelephone /> <p>+91 79786 31242</p>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="flex items-center gap-2"
              >
                <CiMail /> <p>info@niuclox.com</p>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="flex items-center gap-2"
              >
                <CiLocationOn /> <p>Hyderabad, India</p>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex md:gap-5 sm:gap-3 gap-2  md:text-xl sm:text-[1rem] text-[0.7rem] text-niucloxGray"
          >
            <motion.a
              variants={linkVariants}
              href="https://www.facebook.com/niuclox/"
              target="_blank"
              className="hover:text-facebook"
            >
              <LuFacebook />
            </motion.a>
            <motion.a
              variants={linkVariants}
              href="https://www.instagram.com/niuclox/"
              target="_blank"
              className="hover:text-instagram"
            >
              <LuInstagram />
            </motion.a>
            <motion.a
              variants={linkVariants}
              href="https://www.linkedin.com/company/niuclox/"
              target="_blank"
              className="hover:text-linkedin"
            >
              <AiOutlineLinkedin />
            </motion.a>
          </motion.div>
        </div>

        {/* Right Form Section */}
        <motion.form
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          onSubmit={handleSubmit(onSubmit)}
          className="sm:w-3/5 w-full md:p-10 sm:p-7 p-5 space-y-4"
        >
          {/* Name Fields */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            className="flex gap-4"
          >
            <motion.div variants={cardVariants} className="w-1/2">
              <label className="md:text-sm sm:text-[0.7rem] text-[0.7rem] font-semibold">
                First Name
              </label>
              <input
                type="text"
                {...register("first_name", {
                  required: "First name is required",
                })}
                className="w-full md:px-3 md:py-2 sm:px-2 sm:py-1  px-2 py-1 border rounded-md md:text-sm sm:text-[0.7rem] text-[0.6rem]  border-niucloxGray outline-none"
              />
              {errors.first_name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.first_name.message}
                </p>
              )}
            </motion.div>
            <motion.div variants={cardVariants} className="w-1/2">
              <label className="md:text-sm sm:text-[0.7rem] text-[0.7rem] font-semibold">
                Last Name
              </label>
              <input
                type="text"
                {...register("last_name", {
                  required: "Last name is required",
                })}
                className="w-full md:px-3 md:py-2 sm:px-2 sm:py-1  px-2 py-1 border rounded-md md:text-sm sm:text-[0.7rem] text-[0.6rem]  border-niucloxGray outline-none"
              />
              {errors.last_name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.last_name.message}
                </p>
              )}
            </motion.div>
          </motion.div>

          {/* Email */}
          <motion.div variants={cardVariants}>
            <label className="md:text-sm sm:text-[0.7rem] text-[0.7rem] font-semibold">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full md:px-3 md:py-2 sm:px-2 sm:py-1  px-2 py-1 border rounded-md md:text-sm sm:text-[0.7rem] text-[0.6rem]  border-niucloxGray outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </motion.div>

          {/* Phone */}
          <motion.div variants={cardVariants}>
            <label className="md:text-sm sm:text-[0.7rem] text-[0.7rem] font-semibold">
              Phone No
            </label>
            <input
              type="text"
              {...register("phone_no", {
                required: "Phone number is required",
              })}
              className="w-full md:px-3 md:py-2 sm:px-2 sm:py-1  px-2 py-1 border rounded-md md:text-sm sm:text-[0.7rem] text-[0.6rem]  border-niucloxGray outline-none"
            />
            {errors.phone_no && (
              <p className="text-red-500 text-xs mt-1">
                {errors.phone_no.message}
              </p>
            )}
          </motion.div>

          {/* Message */}
          <motion.div variants={cardVariants}>
            <label className="md:text-sm sm:text-[0.7rem] text-[0.7rem] font-semibold">
              Message
            </label>
            <textarea
              rows={5}
              {...register("message", { required: "Message is required" })}
              className="w-full md:px-3 md:py-2 sm:px-2 sm:py-1  px-2 py-1 border rounded-md md:text-sm sm:text-[0.7rem] text-[0.6rem] border-niucloxGray outline-none resize-none"
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </motion.div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <BtnCmp title="Send Message" />
          </div>
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;
