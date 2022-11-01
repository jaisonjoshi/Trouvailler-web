import React from 'react'

const special_offers_card = () => {
  return (

    <div className="w-full">
      <div className="">
        <img src={require('../../Assets/SpecialOffer.png')} alt="" className=" rounded-md h-60 w-full object-cover" />
      </div>

      {/*Texts*/}
      <div className="">
        <h3 className="text-blacky-medium font-bold text-lg">St.Louis Sanatorium</h3>
        <p className="text-blacky-medium text-justify text-base">A small but cozy place to stay in Wisconsin. The resort is located on the shore of the river of the same name, within walking distance of the beach, pier, comic book store and Shevchenko Monument.</p>
      </div>

      {/*Buttons*/}
      <div className='flex justify-between gap-4 mb-4'>
        
          <button className='my-2 border border-evergreen rounded w-48 h-8 bg-whiteglow text-evergreen font-medium text-sm hover:bg-blacky-dark hover:text-whiteglow duration-500 hover:border-transparent'>Read More</button>
        
          <button className='my-2 border border-evergreen rounded w-48 h-8 bg-evergreen text-whiteglow font-medium text-sm  hover:bg-blacky-dark hover:text-whiteglow duration-500 hover:border-transparent'>Book now</button>
        
      </div>
    </div>

  )
}
export default special_offers_card