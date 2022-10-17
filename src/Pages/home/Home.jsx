import React from 'react'
import DestCard from '../components/cards/trending_dest_card'
import Review from '../Reviews/Review'
import ReviewMob from '../Reviews/ReviewsMob'
import Footer from '../components/Footer/Footer'

const Home = () => {

  return (
    <div>
      {/* Trending destinations block */}
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
        <button className='font-medium border-graydust-dark border p-2 rounded-md w-full sm:w-auto px-10 hover:bg-evergreen hover:text-whiteglow hover:border-transparent hover:transition-colors hover:duration-200' >More destinations</button>
      </div>

      {/* Reviews block */}
      <div className='bg-graydust-light'>
        <h1 className='font-bold text-2xl text-center pt-7'>Reviews</h1>
        <div className='hidden sm:block px-20'><Review /></div>
        <div className='sm:hidden'><ReviewMob /></div>
        <div className='text-center py-10 px-7'><button className='bg-blacky-dark text-whiteglow font-semibold p-2 px-10 rounded-md w-full sm:w-auto hover:bg-evergreen hover:text-blacky-dark hover:transition-colors hover:duration-200'>More reviews</button></div>
      </div>

      {/* Footer block */}
      <Footer />
    </div>
  )
}

export default Home