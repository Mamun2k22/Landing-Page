import React from "react";
import RecaptchaBox from "./RecaptchaBox";

const Contact = () => {
  return (
    <>
    <div className="relative lg:mt-8 mt-5 font-poppins ">
        <div class="bg-gray-900 text-center py-16">
          <h1 class="text-white text-2xl md:text-3xl font-semibold mb-2">
            Are you Professional
          </h1>
          <p class="text-gray-400 mb-6">Become the part of our team</p>
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1.5 text-sm px-7 rounded-full">
            Contact us
          </button>
          <div className="flex justify-between mt-8 lg:px-10 px-5 -mb-10 text-white">
            <p className="text-xs">2024 Copyright © Invariance Records.  All rights reserved.</p>
            <img className="h-8 w-8" src="https://cdn-icons-png.flaticon.com/128/9357/9357080.png" alt="" srcset="" />
        </div>
        </div>
       
      </div>
      <div className="mt-8 mb-5 font-poppins">
      <div className=" flex justify-center items-center inset-0 bg-opacity-50 mt-10  ">
        <div className="w-full max-w-2xl border rounded-lg ">
          <div className="flex items-center justify-between bg-gray-200 rounded-t-lg p-4 h-16 relative">
            <div className="flex-grow text-center">
              <h2 className="text-2xl font-semibold text-gray-700">
                Contact us
              </h2>
            </div>
            <button className="absolute right-4">
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

          <div className=" p-8 mx-4 relative">
            <form>
              <input
                type="text"
                placeholder="your name"
                className="w-full py-2 px-3 mb-6 border rounded-xl border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="your email"
                className="w-full py-2 px-3 mb-6 border rounded-xl border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <input
                type="number"
                placeholder="theme"
                className="w-full py-2 px-3 mb-6 border rounded-lg border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />

              <label
                for="issue-summary"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Summary of the issue:
              </label>
              <textarea
                id="issue-summary"
                rows="4"
                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>

          
                <RecaptchaBox />
             

              <div className="flex justify-center items-center mt-10">
                <button
                  type="submit"
                  className="w-96 py-2 border rounded-full shadow-slate-900 hover:text-black"
                >
                  SEND
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500 text-center mt-4">
              *All requests are processed within 48 hours. You will get a
              response from
              <br />
              <a
                href="mailto:connections@invariancerecords.com"
                className="underline"
              >
                connections@invariancerecords.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default Contact;
