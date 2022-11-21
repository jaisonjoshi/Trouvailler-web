import React from 'react'
// import "../../../node_modules/slick-carousel/slick/slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ReviewsMob = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <ReviewsCard />
            <ReviewsCard />
            <ReviewsCard />
            <ReviewsCard />
        </Slider>
    );
}

const ReviewsCard = () => {
    return (
        <div className='p-10'>
            <div className='flex justify-center'>
                <div className='w-2/5 h-2/5 rounded-full'>
                    <img className='w-full object-cover' src={require('../Assets/avatar.png')} alt="Avatar" />
                </div>
            </div>
            <p className='text-justify pt-10'>
                I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.
            </p>
            <div className='pt-5'>
                <span className='font-medium'>Jannike Borg,</span><span> Publisher</span>
            </div>
        </div>
    )
}

export default ReviewsMob