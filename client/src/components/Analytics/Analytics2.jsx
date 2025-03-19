import React from "react";
import carImage from "../../Images/3.png"; 


function Analytics() {
  return (
    <>
      <div className="w-full bg-[#f2f2f2] py-7 px-14">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 items-up">
        <img
            src={carImage}
            alt="Car Pooling Illustration"
            className="w-[80%] h-[90%] my-4 rounded-md md:mr-6"
          />
          <div className="text-center md:text-left text-[#171717] mt-8 flex flex-col justify-center">
          <p className="text-yellow-500 font-bold font-serif text-lg md:text-xl mb-4">
              Explore new possibilities✨
            </p>
            <h1 className="text-[#171717] md:text-5xl sm:text-4xl text-3xl font-bold mb-4 font-serif leading-tight">
              Find Your Perfect Ride
            </h1>
            <p className="text-justify pr-8 text-base md:text-md font-serif mb-6">
              Ready to embark on a journey of convenience and affordability? Our
              platform connects you with the best rides tailored to your needs.
              Say goodbye to travel hassles and hello to seamless adventures!
            </p>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Analytics;
