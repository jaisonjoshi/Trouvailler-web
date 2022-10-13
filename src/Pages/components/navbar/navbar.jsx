import React from 'react'

const navbar = () => {
  return (

    <div className=''>
      <div className='md:'>
        <div>
          <img src=''>

          </img>
        </div>
        <div className='md:flex text-xs mt-2'>
          <nav className=''>
            <ul className=' text-gray-300 md:flex md:items-center md:justify-end">
      '>
              <li className='mx-4 my-6 md:my-0 hover:text-green-300 duration-500 transition ease-in-out '>
                <a href='#' className='md:ml-2'>
                  Tours
                </a>
              </li>

              <li className='mx-4 my-6 md:my-0 hover:text-green-300 duration-500 transition ease-in-out' >
                <a href='#' className='md:ml-2'>
                  My bids
                </a>
              </li>

              <li className='mx-4 my-6 md:my-0 hover:text-green-300 duration-500 transition ease-in-out '>
                <a href='#' className='md:ml-2'>
                  About us
                </a>
              </li>

              <li className='mx-4 my-6 md:my-0 hover:text-green-300 duration-500 transition ease-in-out '>
                <a href='#' className='md:ml-2'>
                  Contact us
                </a>
              </li>

            </ul>

            <button className='mx-4 my-6 md:my-0'>
              Search
            </button>

            <button className='mx-4 my-6 md:my-0'>
              Login
            </button>
            
            <button className='mx-4 my-6 md:my-0'>
              Signup
            </button>

          </nav>
        </div>
      </div>
    </div>

    )
}

export default navbar