import React from 'react'
import DestCard from '../components/cards/trending_dest_card'
const Home = () => {
  return (
    <div className=''>Home

      {/* trending destinations block */}
      <div>
        <div className='text-center'>
          <h1 className='font-bold text-xl'>Trending Destinations</h1>
          <p>Have a plan to go vacation? See trending destinations for your inspiration where to go.</p>
        </div>
      </div>
      <div className='grid  sm:grid-cols-2 md:grid-cols-3 gap-10 m-11'>
        <DestCard />
        <DestCard />
        <DestCard />
        <DestCard />
        <DestCard />
        <DestCard />
      </div>
      <button></button>
    </div>
  )
}

export default Home