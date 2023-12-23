import React from "react";

import "./App.css";
const SignUp = () => {
  return (
    <>
      <div className="signup-container">
        <div className="signup-content grid grid-cols-2">
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
          <div className="signup-left flex flex-col gap-2 text-white justify-center items-center p-5 bg-[#323232]">
            <div className="flex flex-col justify-center p-5 items-start">
              <h2 className="text-2xl font-semibold">Create Account</h2>
              <p className="font-medium">
                Hey, there Register here and get started.
              </p>
            </div>
            <form className="flex flex-col w-2/3 gap-4 p-8">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="p-[15px] w-full rounded bg-[#2B2B2B]"
              />

              <label htmlFor="full-name">Full Name</label>
              <input
                type="text"
                name="full-name"
                placeholder="Example: pindari coders"
                className="p-[15px] w-full rounded bg-[#2B2B2B]"
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="p-[15px] w-full rounded bg-[#2B2B2B] "
              />
              <button
                type="submit"
                className="p-[10px] bg-[#195D51] w-full rounded hover:bg-[#225239]"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
