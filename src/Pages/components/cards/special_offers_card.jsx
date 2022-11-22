import React from 'react'
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Offers = () => {

  var settings = {
    dots: true,
    arrows: false,
    speed: 500,
    Infinite:true,
    slidesToShow: 2.5,
    
      slidesToScroll: 3,
      initialSlide: 0,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 3,
          dots: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
    ]
  };
  return (
    <Slider {...settings} className="offerSlider">
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <OfferCard />
    </Slider>
  );

}

const OfferCard = () => {
  return (

    <div className=" rounded-md mr-8">
      <div className="relative w-full">
        <img src={require('../../Assets/SpecialOffer.png')} alt="" className=" rounded-md h-auto w-full " />
        <div className="absolute bg-graydust-light opacity-90 bottom-2 w-[96%] left-[50%] translate-x-[-50%] flex rounded-lg p-2">
          <div className="text-xs md:text-sm w-1/3"><h6 className="text-blacky-light">City</h6><p className="text-blacky-dark font-semibold">Newton Abbot</p></div>
          <div className="text-xs md:text-sm w-1/3 pl-3 border-l-2 border-graydust-normal"><h6 className="text-blacky-light">Dates</h6><p className="text-blacky-dark font-semibold">16-07-22</p></div>
          <div className="text-xs md:text-sm w-1/3 pl-3 border-l-2 border-graydust-normal"><h6 className="text-blacky-light">Price</h6><p className="text-blacky-dark font-semibold">₹ 4000</p></div>
        </div>
      </div>

      {/*Texts*/}

      <div className="">
        <h3 className="text-blacky-medium font-bold text-2xl my-4">St.Louis Sanatorium</h3>
        <p className="text-blacky-medium text-justify text-md">A small but cozy place to stay in Wisconsin. The resort is located on the shore of the river of the same name, within walking distance of the beach, pier, comic book store and Shevchenko Monument.</p>
      </div>

      {/*Buttons*/}
      <div className='flex justify-between  my-4'>

        <button className='px-6 py-3 border border-evergreen rounded bg-whiteglow text-evergreen font-medium text-sm hover:bg-blacky-dark hover:text-whiteglow duration-500 hover:border-transparent'>Read More</button>

        <button className='px-6 py-3 border border-evergreen rounded bg-evergreen text-whiteglow font-medium text-sm  hover:bg-blacky-dark hover:text-whiteglow duration-500 hover:border-transparent'>Book now</button>

      </div>
    </div>

  )
}
export default Offers