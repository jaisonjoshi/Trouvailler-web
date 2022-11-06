import React from 'react'
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <header class="text-blacky-light body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <img src={require('../../Assets/TrouvaillerGreen .png')} alt="" className="px-14" />
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a class="text-sm mr-5 text-blacky-light hover:text-evergreen duration-500">Home</a>
          <a class="text-sm mr-5 text-blacky-light hover:text-evergreen duration-500">My bids</a>
          <a class="text-sm mr-5 text-blacky-light hover:text-evergreen duration-500">About Us</a>
          <a class="text-sm mr-5 text-blacky-light hover:text-evergreen duration-500">Contacts</a>
        </nav>
        <div className="md:flex my-4">
         <button className="bg-whiteglow text-blacky-dark text-sm border border-none duration-500 px-4 py-2 mx-4 hover:bg-blacky-dark rounded-md hover:text-whiteglow">
            <Link className="" to="/login">Login</Link>
          </button>

          <button className="bg-evergreen text-blacky-dark text-sm border border-none duration-500 px-4 py-2 mx-4 hover:bg-blacky-dark rounded-md hover:text-whiteglow">
            <Link className="" to="/signup">Signup</Link>
          </button>
          </div>
      </div>
    </header>
  )
}

export default navbar