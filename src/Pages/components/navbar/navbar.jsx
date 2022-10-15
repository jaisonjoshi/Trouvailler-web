import React from 'react'

const navbar = () => {
  return (
    <div className="">
      <nav className='flex justify-between '>
        <div>
          <img className='' src={require('../../Assets/TrouvaillerGreen .png')} alt="logo"></img>
        </div>
        <div>
          <ul className='flex justify-center sm:justify-evenly'>
            <li className='mr-6'>
              <a className='text-graydust-dark hover:text-blacky-dark duration-500 transition ease-in-out'>
                Tours
              </a>
            </li>
            <li className='mr-6'>
              <a className='text-graydust-dark hover:text-blacky-dark duration-500 transition ease-in-out'>
                My bids
              </a>
            </li>
            <li className='mr-6'>
              <a className='text-graydust-dark hover:text-blacky-dark duration-500 transition ease-in-out'>
                About us
              </a>
            </li>
            <li className='mr-6'>
              <a className='text-graydust-dark hover:text-blacky-dark duration-500 transition ease-in-out'>
                Contact us
              </a>
            </li>
            <li>
              <input type='text' className='border rounded flex justify-end mx-2'>
                <img className='' src={require('../../Assets/Search.png')} alt="search"></img>
                <span className='text-gray-dark'>Search</span>
              </input>
            </li>
            <li>
              <button className='border rounded mx-2'>
                Login
              </button>
            </li>
            <li>
              <button className='border rounded mx-2'>
                Signup
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default navbar