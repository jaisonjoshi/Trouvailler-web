import React from 'react'

const navbar = () => {
  return (
    <div>
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
              <button className='border rounded flex justify-end mx-2'>
                <img className='' src={require('../../Assets/Search.png')} alt="search"></img>
                <span className='text-gray-dark'>Search</span>
              </button>
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
    // <div>

    //   <div>
    //     <img className='' src='../../Assets/TrouvaillerGreen.png' alt="logo"></img>
    //   </div>
    //   <div className='inline'>
    //     <nav>
    // <ul className='flex justify-center sm:justify-center'>
    //   <li className='mr-6'>
    //     <a className='text-graydust-dark hover:text-blacky-dark duration-500 transition ease-in-out'>
    //       Tours
    //     </a>
    //   </li>
    //   <li className='mr-6'>
    //     <a className='text-graydust-dark hover:text-blacky-dark duration-500 transition ease-in-out'>
    //       My bids
    //     </a>
    //   </li>
    //   <li className='mr-6'>
    //     <a className='text-graydust-dark hover:text-blacky-dark duration-500 transition ease-in-out'>
    //       About us
    //     </a>
    //   </li>
    //   <li className='mr-6'>
    //     <a className='text-graydust-dark hover:text-blacky-dark duration-500 transition ease-in-out'>
    //       Contact us
    //     </a>
    //   </li>
    // </ul>
    //     </nav>

    // <button className='border rounded flex justify-end'>
    //     <img src='../../Assets/Search.png' alt="search"></img>
    //     <span className='text-gray-dark'>Search</span>
    //   </button>

    //       <a href='#' className='text-blacky hover:bg-blacky-dark hover:text-whiteglow duration-500 transition ease-in-out border rounded'>
    //         Login
    //       </a>

    //       <a href='#' className='w-40 bg-evergreen text-blacky-dark border rounded hover:text-whiteglow hover:bg-blacky-dark'>
    //         Signup
    //       </a>

    //   </div>
    // </div>
  )
}

export default navbar