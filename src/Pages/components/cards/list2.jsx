import React from 'react'

const list2_card = () => {
  return (
    <div className='overflow-hidden w-full relative'>
        <img className='h-60 sm:h-72 object-cover w-full rounded-lg' src={require('../../Assets/List.png')} alt="" />
        <div className='p-5'>
            <h3 className='text-xl font-bold text-blacky-medium'>St. Louis Sanatorium</h3>
            <p className='text-sm text-justify text-blacky-light'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</p>    
        </div>
        <div className="flex justify-between">
            <p className="text-evergreen text-xl font-bold">₹1,600.00</p>
            <button className="bg-evergreen text-blacky-light font-semibold rounded-md w-32 h-10">Whats app</button>
        </div>
    </div>
  )
}

export default list2_card