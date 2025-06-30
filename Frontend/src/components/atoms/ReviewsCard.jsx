import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function ReviewsCard({ review }) {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(review.rating);
    const hasHalfStar = review.rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-500 md:text-[1rem] sm:text-[0.7rem] text-[0.5rem] " />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500 md:text-[1rem] sm:text-[0.7rem] text-[0.5rem] " />);
    }

    while (stars.length < 5) {
      stars.push(
        <FaRegStar key={`empty-${stars.length}`} className="text-yellow-500 md:text-[1rem] sm:text-[0.7rem] text-[0.5rem] " />
      );
    }

    return stars;
  };

  return (
    <div className="xl:w-[20rem]  xl:h-[15rem] lg:w-[16rem] lg:h-[12rem] md:w-[14rem] md:h-[10rem] sm:w-[10rem] sm:h-[11rem] w-[10rem] h-[11rem]  border border-niucloxBlack rounded-2xl p-5 flex flex-col justify-between items-start bg-niucloxBlack shadow-md">
      <div className="flex gap-1 text-yellow-500">{renderStars()}</div>
      <p className="text-sm sm:text-[0.75rem] text-[0.6rem] text-niucloxLightWhite mt-2">{review.feedback}</p>
      <div className="flex items-center md:gap-2 gap-1 mt-4">
        <img
          src={review.image}
          className="lg:w-10 lg:h-10 sm:w-7 sm:h-7 w-5 h-5 rounded-full object-cover"
          alt={review.name}
        />
        <div>
          <p className="font-semibold text-niucloxLightWhite md:text-sm sm:text-[0.75rem] text-[0.6rem]">{review.name}</p>
          <p className="text-xs sm:text-[0.7rem] text-[0.55rem] text-gray-500">{review.location}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewsCard;
