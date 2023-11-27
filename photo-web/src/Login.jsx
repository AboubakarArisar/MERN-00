import React from 'react';

const login = () => {
  return (
    <>
      <div className="signup-container">
        <div className="signup-content lg:grid lg:grid-cols-2 sm:flex sm:flex-col sm:gap-[20px] sm:justify-center sm:items-center ">
          <div className="signup-right sm:px-5 lg:flex  lg:flex-col  lg:justify-center lg:items-start sm:w-full sm:flex sm:justify-between sm:flex-col ">
            <h3 className="text-yellow-300 text-xl font-semibold sm-text-center sm:px-5">Pindari</h3>
            <h2 className="text-white lg:text-2xl lg:font-bold sm:text-xl sm:font-normal">
              Explore Your Creativity
            </h2>
            <ul className="text-white  lg:py-5 sm:py-2 w-full">
              <li> Bookmark your readings</li>
              <li>Comment in your favourite post</li>
              <li>Register in your upcoming contests</li>
            </ul>
            <p className="text-white text-xl">
              Access your dashboard and many more
            </p>
          </div>
          <div className="signup-left lg:flex lg:flex-col lg:gap-2 sm:my-2 sm:flex sm:flex-col sm:gap-2 sm:w-full text-white justify-center items-start">
            <h2 className="text-2xl">Login</h2>
            <p className="font-medium">
              Welcome back. Please enter your details.
            </p>
            <form className="lg:flex lg:flex-col lg:w-2/3 lg:gap-4 sm:flex sm:flex-col sm:w-1/3">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="p-[15px] w-full bg-[#323232]"
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="p-[15px] w-full bg-[#323232]"
              />
              <button
                type="submit"
                className="p-[10px] bg-[#195D51] w-full rounded hover:bg-[#225239]"
              >
                Login
              </button>
            </form>
            <button className="p-[10px] bg-[#195D51] lg:w-2/3 sm:1/3 sm:gap-2 rounded flex justify-center items-center lg:gap-2">
              <img
                src="../public/google.png"
                className="w-5 h-5 hover:bg-[#225239]"
                alt="Google"
              />
              Sign in With Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
