import React, { useState } from "react";

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(null);

  const tracks = [
    { id: 1, title: "Temporary Remedy...", artist: "kelatto" },
    { id: 2, title: "Temporary Remedy...", artist: "kelatto" },
    { id: 3, title: "Temporary Remedy...", artist: "kelatto" },
  ];

  const handlePlayPause = (id) => {
    setCurrentTrack(currentTrack === id ? null : id);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-around  items-center mt-20  ">
        <div className="space-y-24 justify-center items-center">
          <div className="flex lg:space-x-12 space-x-5 ">
            <div class="h-36 border-l-[1px] border-[#CDD8F1]"></div>
            <div className="font-poppins text-center md:text-left">
              <h1 className="text-xl font-semibold">Mixing & Mastering</h1>
              <p className="text-sm mt-2 w-400">
                Elevate Your Music: Discover Your Ultimate Sound
              </p>

              <div className="flex justify-center md:justify-start mt-5">
                <button className="font-inter bg-[#628DFB] text-white rounded-2xl hover:bg-blue-600 focus:outline-none focus:ring-1  transition duration-200  h-[35px] w-[170px] text-lg">
                  Order
                </button>
              </div>
            </div>
          </div>

          <div className="flex space-x-12">
            <div class="h-36 border-l-[1px] border-[#CDD8F1]"></div>
            <div className="font-roboto text-center md:text-left">
              <h1 className="text-xl font-semibold">Only Professionals</h1>
              <p className="text-sm mt-2 text-[#000000]">
                Sound Quality on Par with Global Hits
              </p>

              <div className="flex justify-center md:justify-start mt-5">
                <button className="font-inter bg-[#628DFB] text-white rounded-2xl hover:bg-blue-600 focus:outline-none focus:ring-1  transition duration-200 ml-3 lg:ml-0  h-[35px] w-[170px] text-lg">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-[#F3F3F3] px-12 py-9 rounded-3xl shadow-lg space-y-8">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="flex items-center justify-between w-[350px] h-[96px] pl-6 pr-3  py-2  mb-4 bg-white rounded-xl shadow-md"
            >
              <div className="">
                <div className="font-normal text-[19px] w-400  font-poppins">
                  {track.artist}
                </div>
                <div className=" text-[#0E0E0D] truncate font-light  text-[16px] w-275 mt-1">
                  {track.title}
                </div>

                
              </div>
            <div className="">
            <button
                className={`p-2 rounded-full mt-3  ${
                  currentTrack === track.id
                    ? "bg-[#f3f3f3] text-green-600"
                    : "bg-[#f3f3f3] text-gray-600"
                }`}
                onClick={() => handlePlayPause(track.id)}
              >
                {currentTrack === track.id ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 9v6m4-6v6"
                    />
                  </svg>
                ) : (
                  <img
                    className="h-7 w-7"
                    src="https://cdn-icons-png.flaticon.com/128/16245/16245570.png"
                    alt=""
                    srcset=""
                  />
                )}
              </button>
              <div className="flex justify-end ml-16" >
                  <img
                    className="h-4 w-4"
                    src="https://cdn-icons-png.flaticon.com/128/9446/9446643.png"
                    alt=""
                    srcset=""
                  />
                </div>
            </div>
             
            </div>
            
          ))}

          <div className="flex justify-center">
            <div className="bg-gray-100 py-1.5 px-3 rounded-full flex justify-center items-center space-x-3 shadow-gray-400 shadow-md mt-2 -mb-4  ">
              {tracks.map((track) => (
                <div
                  key={track.id}
                  className={` h-2 w-2 rounded-full ${
                    currentTrack === track.id ? "bg-black" : "bg-gray-400"
                  }`}
                />
              ))}
              
            </div>
            
          </div>
          
        </div>
        
      </div>



      <div className="lg:mx-36 mx-6 mt-14">
        <p className="font-poppins text-[15px] text-[#7f7f7f]">
          {" "}
          Need something else? Request a special service.
        </p>
      </div>
    </>
  );
};

export default MusicPlayer;
