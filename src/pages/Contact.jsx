import React, { useState } from "react";
import RecaptchaBox from "./RecaptchaBox";

const Contact = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <>
   <div className="relative lg:mt-8 mt-5 font-poppins">
      <div className="bg-[#1A1A19] text-center py-16">
        <h1 className="text-white text-xl md:text-2xl font-semibold ">
          Are you Professional
        </h1>
        <p className="text-gray-400">Become part of our team</p>
        <button
          onClick={togglePopup}
          className="bg-[#628DFB] hover:bg-blue-500 text-white font-normal py-1 text-sm px-14 rounded-xl lg:mt-8 mt-4"
        >
          Contact us
        </button>
        <div className="flex justify-between mt-8 lg:px-10 px-4 -mb-10 text-white">
          <p className="text-xs">
            2024 Copyright © Invariance Records. All rights reserved.
          </p>
          <img
            className="lg:h-8 lg:w-8 h-4 w-4"
            src="https://cdn-icons-png.flaticon.com/128/9357/9357080.png"
            alt="Logo"
          />
        </div>
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50 flex justify-center items-center p-5">
          <div className="w-full max-w-xl border rounded-3xl bg-gray-100 transform transition-transform duration-300 scale-100 opacity-100">
            <div className="flex items-center justify-between bg-gray-100 shadow-gray-400 shadow-sm rounded-t-3xl p-4 h-14 relative">
              <div className="text-center">
                <h2 className="text-lg font-semibold text-gray-700 ml-4">Contact us</h2>
              </div>
              <button className="absolute right-4" onClick={togglePopup}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700 hover:text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="lg:p-7 lg:pb-2 p-4 mx-4 relative">
              <form>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full py-2 px-6 mb-6 border rounded-xl border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full py-2 px-6 mb-6 border rounded-xl border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Theme"
                  className="w-full py-2 px-6 mb-6 border rounded-lg border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />

                <label
                  htmlFor="issue-summary"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Summary of the issue:
                </label>
                <textarea
                  id="issue-summary"
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>

                {/* Include your RecaptchaBox component here */}
                <RecaptchaBox />

                <div className="flex justify-center items-center mt-6">
                  <button
                    type="submit"
                    className="w-96 py-2 border rounded-full bg-white shadow-slate-400 shadow-1 hover:text-black"
                  >
                    SEND
                  </button>
                </div>
              </form>
           
            </div>
            <p className="text-xs text-gray-500 text-center pb-3 px-4 lg:px-0 ">
                *All requests are processed within 48 hours. You will get a
                response from
                <br />
                <a
                  href="mailto:support@invariancerecords.com"
                  className="underline"
                >
                  support@invariancerecords.com
                </a>
              </p>
          </div>
        </div>
      )}
    </div>
    </>
   
  );
};

export default Contact;
