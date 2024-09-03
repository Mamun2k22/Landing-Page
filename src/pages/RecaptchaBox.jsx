import React from 'react';

function RecaptchaBox() {
  return (
    <div className="mt-4 py-1.5 lg:px-2 px-3   border border-gray-300 rounded-md bg-white flex items-center justify-between font-poppins lg:w-[48%] w-[70%]">
      <div className="flex items-center">
        <input id="recaptcha" type="checkbox" className="mr-2" />
        <label htmlFor="recaptcha" className="text-sm font-medium text-gray-700">
          I'm not a robot
        </label>
      </div>
      <div className="w-9 h-9 lg:ml-3 ">
        {/* Placeholder for reCAPTCHA logo */}
        <img
          src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
          alt="reCAPTCHA logo"
          className="w-[80%] h-[80%] object-contain mt-1"
        />
      </div>
    </div>
  );
}

export default RecaptchaBox;
{/* <div className="flex justify-between items-end">
                  <img
                    className="h-4 w-4"
                    src="https://cdn-icons-png.flaticon.com/128/9446/9446643.png"
                    alt=""
                    srcset=""
                  />
                </div> */}