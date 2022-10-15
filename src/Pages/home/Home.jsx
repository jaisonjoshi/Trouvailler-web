import React from 'react'
import DestCard from '../components/cards/trending_dest_card'
import Review from '../Reviews/Review'
import ReviewMob from '../Reviews/ReviewsMob'


const Home = () => {
 
  return (
    <div className=''>Home
      {/* trending destinations block */}
      <div>
        <div className='text-center'>
          <h1 className='font-bold text-2xl'>Trending Destinations</h1>
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
      <div className='p-7 text-center'>
        <button className='font-medium border-graydust-dark border p-2 rounded-md w-full sm:w-48 hover:bg-evergreen hover:text-whiteglow hover:border-transparent hover:transition-colors hover:duration-200' >More destinations</button>
      </div>

      {/* reviews block */}
      <div className='bg-graydust-light px-20'>
        <h1 className='font-bold text-2xl text-center pt-7'>Reviews</h1>
        <Review className='hidden sm:block'/>
        <ReviewMob className='sm:hidden'/>
      </div>
      
    </div>
  )
}

export default Home