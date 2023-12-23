import { Link } from "react-router-dom";
import "./App.css";

export const Navbar = () => {
  return (
    <>
      <header className="flex justify-between items-center p-5  m-5 ">
        <div className="logo">
          <h3 className="text-2xl text-yellow-300 font-semibold cursor-pointer">
            Pindaris
          </h3>
        </div>
        <div className="nav">
          <nav className="flex gap-5">
            <Link
              to="/"
              className="text-white font-medium p-3 hover:text-yellow-300 hover:bg-black hover:bg-opacity-50"
            >
              Home
            </Link>
            <Link
              to="/SignUp"
              className="text-white font-medium p-3 hover:text-yellow-300 hover:bg-black hover:bg-opacity-50"
            >
              SignUp
            </Link>
            <Link
              to="/Login"
              className="text-white font-medium p-3 hover:text-yellow-300 hover:bg-black hover:bg-opacity-50"
            >
              Login
            </Link>
            <Link
              to="/Contact"
              className="text-white  font-medium p-3 hover:text-yellow-300 hover:bg-black hover:bg-opacity-50"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>
      <hr className="opacity-10" />
    </>
  );
};

export const Home = () => {
  const img =
    "https://img.freepik.com/free-photo/turned-gray-laptop-computer_400718-47.jpg?w=996&t=st=1703253716~exp=1703254316~hmac=ff43d7ee5f186e611adec42f94f90de59b1f9476ee445ebd26feb945f6059028";
  return (
    <>
      <div className="home-container lg:flex lg:justify-center lg:items-center mt-5">
        <div className="home-content lg:grid lg:grid-cols-2 lg:w-[80%]">
          <div className="home-right lg:w-2/3 p-5 rounded border-[2px solid white]">
            <h1 className="text-white text-yellow-500 text-4xl font-semibold p-5">
              Welcome to Pindari Coders!
            </h1>
            <p className="text-white mt-4 p-5">
              🚀 Hello and welcome to Pindari Coders, where the world of coding
              comes to life! Whether you're a curious beginner or a seasoned
              developer, you've found a community dedicated to making coding
              knowledge accessible to all.
            </p>
            <p className="text-white mt-4 p-5">
              At Pindari Coders, we believe in the transformative power of
              coding. In today's dynamic world, understanding how to code opens
              doors to endless possibilities, unleashing creativity and
              problem-solving skills. Our mission is simple: to spread coding
              knowledge far and wide, empowering individuals to thrive in the
              digital era.
            </p>
          </div>
          <div className="home-left lg:w-full  p-5 rounded border-[2px solid white]">
            <img
              src={img}
              alt="Computer"
              className="w-full h-full opacity-50 rounded-full"
            />
          </div>
        </div>
      </div>
      <hr className="mt-4 opacity-10" />
      <div className="why">
        <h1 className="text-4xl font-semibold text-yellow-400 text-center mt-5">
          Why Pindari Coders?
        </h1>
        <div className="cards mt-5 flex justify-around items-center flex-wrap gap-4 p-5 ">
          <div className="card p-5 w-1/5 h-[300px] flex justify-center items-center bg-white relative  bg-opacity-40 rounded-xl">
            <div className="card-content">
              <h1 className="text-2xl select-none text-center font-semibold absolute right-8 left-10 top-16 text-yellow-400 flex justify-center items-center gap-2">
                Courses
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </h1>
              <p className="text-black text-xl select-none  font-semibold mt-4 text-center">
                Expertly crafted courses for every skill level.
              </p>
            </div>
          </div>
          <div className="card p-5 w-1/5 h-[300px] flex justify-center items-center bg-white relative  bg-opacity-40 rounded-xl">
            <div className="card-content">
              <h1 className="text-2xl text-center select-none font-semibold absolute right-8 left-10 top-16 text-yellow-400 flex justify-center items-center gap-2">
                Tutorials
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </h1>
              <p className="text-black text-xl select-none font-semibold  mt-4 text-center">
                Engaging tutorials with real-world applications.
              </p>
            </div>
          </div>
          <div className="card p-5 w-1/5 h-[300px] flex justify-center items-center bg-white  bg-opacity-40 rounded-xl relative">
            <div className="card-content">
              <h1 className="text-2xl text-center font-semibold select-none flex justify-center items-center gap-2 absolute right-8 top-16  text-yellow-400">
                Collaboration
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.412 15.655 9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457 3 3m5.457 5.457 7.086 7.086m0 0L21 21"
                  />
                </svg>
              </h1>
              <p className="text-black text-xl  font-semibold select-none  mt-4 text-center">
                A community that fosters collaboration and growth.
              </p>
            </div>
          </div>
          <div className="card p-5 w-1/5 h-[300px] flex justify-center items-center bg-white relative  bg-opacity-40 rounded-xl">
            <div className="card-content">
              <h1 className="text-2xl select-none text-center font-semibold text-yellow-400 absolute right-8 left-10 top-16 flex justify-center items-center gap-2">
                Support
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              </h1>
              <p className="text-black text-xl select-none  font-semibold mt-4 text-center">
                Ongoing support to fuel your coding passion.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="opacity-10 my-4" />
      <div className="about-us text-center py-8">
        <h2 className="about-us-title  mb-6 text-4xl font-semibold text-yellow-400">
          About Us
        </h2>
        <div className="founders flex  gap-16 justify-around">
          <div className="founder mx-4">
            <img
              className="founder-image object-cover rounded-full"
              src="https://avatars.githubusercontent.com/u/116747262?v=4"
              alt="Aboubakar"
            />
            <p className="founder-description text-white text-xl mt-2 flex flex-col">
              Aboubakar <span> Founder and Co-Founder of Pindari Coders</span>
            </p>
          </div>
          <div className="founder mx-4">
            <img
              className="founder-image  object-cover rounded-full"
              src="https://avatars.githubusercontent.com/u/113471263?v=4"
              alt="Abdullah"
            />
            <p className="founder-description text-white text-xl mt-2 flex flex-col">
              Abdullah <span> Founder and Co-Founder of Pindari Coders</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
