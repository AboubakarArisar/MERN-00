import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <header>
        <nav className="flex justify-center bg-teal-200 px-2 py-5">
          <Link to='/' className="m-2">Home</Link>
          <Link to='/Todo' className="m-2">Todo</Link>
          <Link to='/Calc' className="m-2" href="">Calc</Link>
        </nav>
      </header>
    </>
  );
};

export const Footer = () => {
    return (
      <>
      <footer className="px-5 py-5 bg-black">
        <h1 className="font-semibold text-center text-white ">CopyRight © <span className="text-yellow-500 text-2xl">Pindari Coders</span></h1>
      </footer>
      </>
    );
  };
const Main = () => {
  return (
  <>
  <div className="container">
    <div className="Nav-content flex justify-around items-center">
        <div className="right">
    <img src="https://avatars.githubusercontent.com/u/116747262?v=4" className='rounded-lg px-3 py-3'alt="AB" />
        </div>
        <div className="left">
    <span className="text-5xl m-5 text-white font-semibold">REACT</span>
    
    <span className="text-5xl  text-yellow-500 font-semibold">PRACTICE</span>
        </div>
    </div>
  </div>
  </>
  );
};

const Nav = () => {
  return (
    <>
      <Main />
    </>
  );
};

export default Nav;
