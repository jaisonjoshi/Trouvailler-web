import React from 'react'

const navbar = () => {
  return (
    <div className="">
      <nav className='flex justify-between '>
        <div>
          <img className='' src={require('../../Assets/TrouvaillerGreen .png')} alt="logo"></img>
        </div>
        <div>
          <ul className='md:flex justify-center'>
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
              <button className='rounded-md mx-2 bg-whiteglow text-blacky-light hover:bg-blacky-dark hover:text-whiteglow border h-8 w-20 duration-500'>
                Login
              </button>
            </li>
            <li>
              <button className='rounded-md mx-5 bg-evergreen text-blacky-dark border-transparent hover:bg-blacky-dark hover:text-whiteglow border h-8 w-20 duration-500'>
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