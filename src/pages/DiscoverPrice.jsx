import React, { useState } from "react";

const DiscoverPrice = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="relative mt-20 font-poppins">
  <div className="bg-[#1A1A19] text-center py-20">
    <h1 className="text-white text-xl md:text-2xl font-semibold mb-2">
      No Extras, Just Excellence
    </h1>
    <p className="text-gray-400 mb-6">Quality and Artistry in Every Note</p>
    <button
      onClick={handleOpenModal}
      className="bg-[#628DFB] hover:bg-blue-500 text-white font-medium text-sm py-1.5 px-10 rounded-xl"
    >
      Discover your price
    </button>
    <p className="text-gray-500 mt-2 text-sm">*starting at $199</p>
  </div>

  {isModalOpen && (
    <div className="fixed inset-0 flex items-center justify-center bg-dark/90 px-4 py-5 z-50">
      <div className="w-full max-w-lg bg-white border rounded-xl">
        <div className="flex items-center justify-between bg-gray-200 rounded-t-xl h-9 relative">
          <div className="flex-grow text-center">
            <h2 className="text-lg font-medium text-gray-700">
              Price Quote
            </h2>
          </div>
          <button onClick={handleCloseModal} className="absolute right-4">
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

        <div
          className="flex justify-center items-center rounded-md mt-4"
          role="group"
        >
          <button
            type="button"
            className="px-4 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          >
            Group
          </button>
          <button
            type="button"
            className="px-4 py-1 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          >
            Individual artist
          </button>
          <button
            type="button"
            className="px-4 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          >
            Label
          </button>
        </div>

        <div className="lg:p-0 p-4 mx-4 lg:mx-8 relative lg:mt-6 mt-3">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="your email"
              className="w-full py-1.5 px-5 mb-6 border rounded-xl border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="brief service description"
              className="w-full py-1.5 px-5 mb-6 border rounded-xl border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="sound engineering experience (years)"
              className="w-full py-1.5 px-5 mb-6 border rounded-lg border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />

            <div className="bg-white py-1.5 px-2.5 rounded-lg">
              <label className="block text-gray-500 font-semibold mb-2">
                Additional information and your audio file:
              </label>
              <div
                className="border-[1px] border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 transition"
                onClick={() => document.getElementById("fileInput").click()}
              >
                <img
                  className="w-10"
                  src="https://cdn-icons-png.flaticon.com/128/126/126477.png"
                  alt="Upload"
                />
                <span className="text-gray-500 mt-2">or drag and drop</span>
                <input
                  id="fileInput"
                  type="file"
                  className="hidden"
                  accept=".mp3"
                  onChange={handleFileChange}
                />
              </div>
              {selectedFile && (
                <p className="text-xs text-blue-500 mt-2">
                  Selected file: {selectedFile.name}
                </p>
              )}
              <p className="text-xs text-gray-500 mt-2">
                *3-5 mixing and mastering examples, links to your projects
                and average price for your service
              </p>
            </div>

            <div className="flex justify-center items-center mt-5">
              <button
                type="submit"
                className="w-80 py-2 border rounded-full shadow-slate-600 shadow-1 hover:text-black"
              >
                SEND
              </button>
            </div>
          </form>
          <p className="text-xs text-gray-500 text-center mt-4 mb-4">
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
  )}
</div>

  );
};

export default DiscoverPrice;
