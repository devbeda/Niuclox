import React from "react";

function ServiceCard({ service }) {
  return (
    <div className="md:w-[20rem] md:h-[15rem] sm:w-[14rem] sm:h-[10rem] w-[15rem] h-[12rem] border-[0.01rem] rounded-2xl bg-niucloxBlack  border-niucloxBlack px-4 py-3 font-niucloxPrimary flex flex-col justify-around cursor-pointer hover:-translate-y-1 duration-300">
      <h1 className="md:text-[1.5rem] sm:text-[1rem] text-[1rem] text-niucloxWhite">
        {service.title}
      </h1>
      <p className="md:text-[0.9rem] sm:text-[0.7rem] text-[0.7rem] text-niucloxGray">
        {service.description}
      </p>
    </div>
  );
}

export default ServiceCard;
