import React from 'react'
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <body class="">
      <nav class="p-2 md:flex md:items-center md:justify-between sm:flex sm:items-center sm:justify-between">
        <div class="flex justify-between items-center ">
          <img src={require('../../Assets/TrouvaillerGreen .png')} alt="" className="px-4" />
        </div>

        <ul class="md:flex md:items-center">
          <li class="mx-4 my-6 ">
            <a href="#" class="text-sm hover:text-evergreen duration-500">Tours</a>
          </li>
          <li class="mx-4 my-6 ">
            <a href="#" class="text-sm hover:text-evergreen duration-500">My bids</a>
          </li>
          <li class="mx-4 my-6">
            <a href="#" class="text-sm hover:text-evergreen duration-500">About us</a>
          </li>
          <li class="mx-4 my-6 ">
            <a href="#" class="text-sm hover:text-evergreen duration-500">Contacts</a>
          </li>


          {/* <div className="flex justify-center items-center">
          <img src={require('../../Assets/Search.png')} alt="" className="" />
          <input type="text" className="px-4 py-2 mx-4 outline-none border border-blacky-light rounded-md w-36" placeholder="Search"/>
        </div> */}

          <button className="bg-whiteglow text-blacky-dark text-sm border duration-500 px-4 py-2 mx-4 hover:bg-blacky-dark rounded-md hover:text-whiteglow">
            <Link className="" to="/login">Login</Link>
          </button>

          <button className="bg-evergreen text-blacky-dark text-sm border border-none duration-500 px-4 py-2 mx-4 hover:bg-blacky-dark rounded-md hover:text-whiteglow">
            <Link className="" to="/signup">Signup</Link>
          </button>
          <h2 class=""></h2>
        </ul>
      </nav>

    </body>
  )
}

export default navbar