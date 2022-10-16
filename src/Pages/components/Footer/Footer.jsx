import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='bg-blacky-light'>
        <div className='text-whiteglow grid grid-cols-3'>
          <div className='text-lg'><h3>Title of section</h3></div>
          <div><h3>Title of section</h3></div>
          <div><h3>Title of section</h3></div>
          <div><h5>Page title</h5></div>
          <div><h5>Page title</h5></div>
          <div className='row-span-3 flex'>
            <div><input type="text" /></div>
            <button className='bg-evergreen'>h</button>
          </div>
          <div><h5>Page title</h5></div>
          <div><h5>Page title</h5></div>
          <div><h5>Page title</h5></div>
          <div><h5>Page title</h5></div>
          
          
        </div>
      </footer>
    </div>
  )
}

export default Footer