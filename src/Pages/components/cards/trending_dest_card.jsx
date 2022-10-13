import React from 'react'

const trending_dest_card = () => {
  return (
    <div className='overflow-hidden rounded-md shadow-gray-200 shadow-lg w-full relative'>
        <img className='h-60 sm:h-72 object-cover w-full' src={require('../../Assets/Rectangle 43.png')} alt="" />
        <div className='p-5'>
            <h3 className='text-lg font-bold'>Villa with private jacuzzi (Idukki)</h3>
            <p className='text-sm text-justify'>Villas that are the very definition of luxury, exclusive, serene - equipped with a Jacuzzi, the best in amenities and tastefully furnished.</p>
        </div>
        <div className='bg-whiteglow rounded-xl font-semibold absolute top-0 m-3 p-2'>
        From ₹ 11,999
        </div>
    </div>
  )
}

export default trending_dest_card