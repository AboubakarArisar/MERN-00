import { Link } from "react-router-dom";
import './App.css'

export const Navbar = () =>{
  return(
    <>
    <header className='flex justify-between items-center p-5  m-5 header'>
      <div className="logo">
      <h3 className='text-2xl text-yellow-300 font-semibold'>Pindaris</h3>
      </div>
      <div className="nav">
        <nav className="flex gap-3">
          <Link to='/' className="text-white  font-medium hover:text-yellow-300">Home</Link>
          <Link to='/SignUp' className="text-white  font-medium hover:text-yellow-300">SignUp</Link>
          <Link to='/Login' className="text-white  font-medium hover:text-yellow-300">Login</Link>
          <Link to='/Contact' className="text-white  font-medium hover:text-yellow-300">Contact Us</Link>
        </nav>
      </div>
    </header>
    </>
  )
}

export const Home=()=> {
  

  return (
    <>
    <div className="home-container lg:flex lg:justify-center lg:items-center">
    <div className="home-content lg:grid lg:grid-cols-2 lg:w-[80%]">
      <div className="home-right lg:w-1/2 p-5 rounded border-[2px solid white]">
        <h1 className="text-white ">i am right</h1>
      </div>
      <div className="home-left lg:w-1/2 p-5 rounded border-[2px solid white]">
    <h1 className="text-white ">i am left</h1>
      </div>
      </div>
    </div>
    </>
  )
}


