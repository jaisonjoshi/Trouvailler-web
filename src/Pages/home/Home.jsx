import React from 'react'
import DestCard from '../components/cards/trending_dest_card'
import Navbar from '../components/navbar/navbar'
const Home = () => {
  return (
    <div className=''>Home
      <div className=""><Navbar /></div>
      <div>
        <h1 className='text-7xl text-justify font-bold p-7'>
          THE BEST TOURS
          IN JUST 3 CLICKS
        </h1>
        <p className="text-justify text-base p-7">
          Enter a country, a city or even just a landmark and we'll find the right tours for you
        </p>
        <div className=""></div>
      </div>


      <div className='flex bg-midnight w-full'>
        <div className='w-2/3'>
          <div className="">
            <img src={require('../../Assets/clock.png')}></img>
          </div>

          <h1 className='font-bold text-4xl text-evergreen px-20 py-5'>
            Bid for today
          </h1>
          <p className="text-justify text-whiteglow px-20 py-3">Wish you could bid hotel prices for your budget and make your trip more pocket friendly? Here's an end to your worries because we let you place your bid for today's lowest hotel prices. </p>
          <h2 className="text-3xl text-whiteglow font-bold px-20 py-2">Intersting isn't it?</h2>

          <div className="px-20 py-5">
            <button className='font-bold text-lg border p-2 rounded-md w-full sm:w-48 bg-whiteglow hover:bg-evergreen border-transparent hover:border-transparent hover:transition-colors hover:duration-200' >Know More</button>
          </div>
        </div>
        {/* <div className="">
          <img src={require('../../Assets/Rectangle 43.png')}></img>
        </div> */}
      </div>


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
      <div className='p-7 text-center'>
        <button className='font-medium border-graydust-dark border p-2 rounded-md w-full sm:w-48 hover:bg-evergreen hover:text-whiteglow hover:border-transparent hover:transition-colors hover:duration-200' >More destinations</button>
      </div>


    </div>

  )
}
export default Home