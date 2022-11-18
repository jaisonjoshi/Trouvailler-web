import React from 'react'
import DestCard from '../components/cards/trending_dest_card'
import Navbar from '../components/navbar/navbar'
import Offers from '../components/cards/special_offers_card'
import Reviews from '../Reviews/Review'
import ReviewsMob from '../Reviews/ReviewsMob'
import Footer from '../components/Footer/Footer'
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <div className="">
      <div className="bg-hero-image bg-cover w-full h-screen">
        <Navbar />
        <div className="px-10 py-8 flex-row mid:w-4/6">
          <h1 className="text-5xl text-whiteglow font-bold md:pt-36">
            THE BEST TOURS IN JUST 3 CLICKS
          </h1>
          <p className="text-sm text-whiteglow py-5">
            Enter a country, a city or even just a landmark and we'll find the right tours for you
          </p>

          <button className="flex justify-center items-center bg-evergreen text-blacky-medium w-36 font-bold rounded-md p-2 my-5 hover:bg-whiteglow duration-500">
            <Link className="" to="/list">Explore</Link>
            <img src={require('../Assets/Arrow.png')} alt="" className="h-3 w-3 mx-4 my-2" />
          </button>

        </div>
      </div>

      {/* Bid section */}

      <div className='md:flex bg-blacky-light w-full h-1/6'>
        <div className='w-full md:w-2/3'>
          <div className="p-10 flex">
            <div className="z-10">
              <img className='w-20 h-20' src={require('../Assets/clock.png')} alt=""></img>
            </div>
            <div className="z-20 w-52 bg-whiteglow text-blacky-dark flex justify-center items-center text-xl font-bold border border-none rounded-full">
              <p className="">Ends in 00:00:00</p>
            </div>
          </div>

          <h1 className='font-bold text-4xl text-evergreen px-20 py-5'>
            Bid for today
          </h1>
          <p className="text-justify text-whiteglow px-20 py-3">Wish you could bid hotel prices for your budget and make your trip more pocket friendly? Here's an end to your worries because we let you place your bid for today's lowest hotel prices. </p>
          <h2 className="text-3xl text-whiteglow font-bold px-20 py-2">Intersting isn't it?</h2>

          <div className="px-20 py-5">
            <button className='font-bold text-lg border p-2 rounded-md w-full sm:w-48 bg-whiteglow hover:bg-evergreen border-transparent hover:border-transparent hover:transition-colors hover:duration-200' ><Link className="" to="/what-is-bid">Know More</Link></button>
          </div>
        </div>
        <div className="md:w-1/3 ">
          <img className="object-cover h-full w-full" src={require('../Assets/Image.png')} alt=""></img>
        </div>
      </div>

      {/* special offers block */}

      <div className="mt-5">
        <h1 className='text-center font-bold text-blacky-dark text-2xl'>Special Offers</h1>

      </div>

      <div className="mx-11">
        <Offers />
        <div className='p-7 text-center'>
          <button className='font-medium border-graydust-dark border p-2 rounded-md w-full sm:w-auto px-10 hover:bg-evergreen hover:text-whiteglow hover:border-transparent hover:transition-colors hover:duration-200' >
          <Link className="" to="/offers">More Offers</Link></button>
        </div>
      </div>

      <div>
        {/* Trending destinations block */}
        <div>
          <div className='text-center'>
            <h1 className='font-bold text-2xl'>Trending Destinations</h1>
            <p>Have a plan to go vacation? See trending destinations for your inspiration where to go.</p>
          </div>
        </div>
        <div>
          
          <DestCard />
          
          
        </div>
        <div className='p-7 text-center'>
          <button className='font-medium border-graydust-dark border p-2 rounded-md w-full sm:w-auto px-10 hover:bg-evergreen hover:text-whiteglow hover:border-transparent hover:transition-colors hover:duration-200' >
          <Link className="" to="/trending">More destinations</Link></button>
        </div>

      </div >


      {/* Reviews block */}
      <div className='bg-graydust-light'>
        <h1 className='font-bold text-2xl text-center pt-7'>Reviews</h1>
        {/*<div className='hidden sm:block px-20'><Reviews /></div>*/}
        {/*<div className='sm:hidden'><ReviewsMob /></div>*/}
        <div className='hidden sm:block px-20'><Reviews /></div>
        <div className='sm:hidden'><ReviewsMob /></div>
        <div className='text-center py-10 px-7'><button className='bg-blacky-dark text-whiteglow font-semibold p-2 px-10 rounded-md w-full sm:w-auto hover:bg-evergreen hover:text-blacky-dark hover:transition-colors hover:duration-200'>
        <Link className="" to="./rev">More reviews</Link></button></div>
      </div>

      {/* Footer block */}
      <Footer />
    </div>
  )
}
export default Home