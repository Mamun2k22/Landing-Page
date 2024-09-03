import React from "react";
import Price from "./Price";

const Plan = () => {
  return (
    <div>
      <div class="bg-gray-50 py-12 lg:px-20 font-poppins">
        <h2 class="text-center text-3xl font-semibold ">Discover Plans</h2>
        <div class="flex flex-col md:flex-row justify-center items-center gap-10 lg:mt-14 mt-4">
          
          <div class="bg-[#F3F3F3] rounded-2xl shadow-lg p-6 mt-2 text-left w-[348px] lg:w-[40%] transition transform hover:scale-105 hover:shadow-2xl">
            <h3 class="text-xl font-bold mt-2">EP</h3>
            <p class="text-sm font-light mb-3 ">up to 6 tracks</p>
            <ul class="text-[#0E0E0D] mb-6 space-y-8 pt-5">
              <li>
                <strong>Precision Mixing:</strong> Each track meticulously mixed
                to bring out its full potential.
              </li>
              <li>
                <strong>Masterful Mastering:</strong> Elevate your singles to
                professional industry standards.
              </li>
              <li>
                <strong>Quick Turnaround:</strong> Get your EP ready for release
                in record time.
              </li>
            </ul>
            <div class="flex justify-between items-center pt-6">
              <span class="bg-gradient-to-r from-[#d0f3d0] to-[#DFE0FE] font-semibold py-1 px-3 rounded-full">
                -10%
              </span>
              <button class="bg-[#628DFB] text-white py-1.5 text-sm px-9 rounded-xl transition transform hover:bg-blue-600 hover:scale-105">
                Submit
              </button>
            </div>
          </div>

          <div class="rounded-2xl shadow-lg hover:shadow-2xl  transition transform hover:scale-105 ">
            <div className="bg-gradient-to-r from-pink-300 to-blue-300 rounded-t-2xl py-2  px-0 w-90"></div>
            <div className="bg-[#F3F3F3] px-6 pt-3.5 pb-2 text-left w-[348px] lg:w-[380px] h-[460px] ">
              <h3 class="text-xl font-bold ">Album</h3>
              <p class="text-sm font-light mb-3">up to 10 tracks</p>
              <ul class="text-[#0E0E0D] mb-6 space-y-8 pt-5">
                <li className="text-[16px]">
                  <strong className="">Unified Sound:</strong> Ensuring every track flows
                  seamlessly in the album.
                </li>
                <li>
                  <strong>Dynamic Range:</strong> Balanced and optimized for
                  diverse listening environments.
                </li>
                <li>
                  <strong>Creative Consultation:</strong> Work closely with our
                  experts to achieve your artistic vision.
                </li>
              </ul>
              <div class="flex justify-between items-center lg:pt-14 ">
                <span class="bg-gradient-to-r from-[#d0f3d0] to-[#DFE0FE] font-semibold py-1 px-3 rounded-full">
                  -15%
                </span>
                <button class="bg-[#628DFB] text-white py-1.5 text-sm px-9 rounded-xl transition transform hover:bg-blue-600 hover:scale-105">
                  Submit
                </button>
              </div>
            </div>
          </div>

          <div class="bg-[#F3F3F3] rounded-2xl shadow-lg p-6 text-left w-[348px] lg:w-[40%] transition transform hover:scale-105 hover:shadow-2xl">
            <h3 class="text-xl font-bold">Label</h3>
        
            <ul class="text-[#0E0E0D] mb-6 space-y-8 pt-8">
              <li>
                <strong>Holistic Approach:</strong>  Comprehensive mixing and mastering for a cohesive release.
              </li>
              <li>
                <strong>High-Quality Production:</strong> Industry-standard sound that stands out on any platform.
              </li>
              <li>
                <strong>Brand Alignment:</strong> Tailored sound that aligns with your label’s identity and goals.
              </li>
            </ul>
            <div class="flex justify-between items-center pt-6">
              <span class="bg-gradient-to-r from-[#d0f3d0] to-[#DFE0FE] font-semibold py-1 px-3 rounded-full">
                -20%
              </span>
              <button class="bg-[#628DFB] text-white py-1.5 text-sm px-9 rounded-xl transition transform hover:bg-[#628DFB] hover:scale-105">
                Submit
              </button>
            </div>
          </div>
        </div>
        <p class="text-center lg:text-start text-gray-500 mt-8 text-sm lg:mt-16">
          *Become our supporter to get more discounts and exclusive content
        </p>
      </div>
      <Price />
    </div>
  );
};

export default Plan;
