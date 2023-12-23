import React from "react";

const login = () => {
  return (
    <>
      <div className="signup-container">
        <div className="signup-content lg:grid lg:grid-cols-2 sm:flex sm:flex-col sm:gap-[20px] sm:justify-center sm:items-center ">
          <div className="signup-right flex flex-col justify-center items-start">
            <p className="text-yellow-300 text-xl font-semibold">Pindari</p>
            <h2 className="text-white text-2xl font-bold">
              Explore Your Creativity
            </h2>
            <ul className="text-white  py-5">
              <li> Bookmark your readings</li>
              <li>Comment in your favourite post</li>
              <li>Register in your upcoming contests</li>
            </ul>
            <p className="text-white text-xl">
              Access your dashboard and many more
            </p>
          </div>
          <div className="signup-left bg-[#323232] lg:flex lg:flex-col lg:gap-2 sm:my-2 sm:flex sm:flex-col sm:gap-2 sm:w-full text-white justify-center items-center p-5">
            <div className="flex justify-start items-start pt-9 ml-5 flex-col">
              <h2 className="text-2xl font-semibold">Login</h2>
              <p className="font-medium">
                Welcome back. Please enter your details.
              </p>
            </div>
            <form className="lg:flex lg:flex-col p-8 lg:w-2/3 lg:gap-4 sm:flex sm:flex-col sm:w-1/3">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="p-[15px] w-full rounded bg-[#2B2B2B]"
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="p-[15px] w-full rounded bg-[#2B2B2B]"
              />
              <button
                type="submit"
                className="p-[10px] bg-[#195D51] w-full rounded hover:bg-[#225239]"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
