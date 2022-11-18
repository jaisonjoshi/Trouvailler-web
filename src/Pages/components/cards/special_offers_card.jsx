import React from "react";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useFetch from "../../../hooks/useFetch";

const Offers = () => {
  const { data, loading, error } = useFetch("/packages?offers=true&limit=6");
  var settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <>
          <Slider {...settings}>
            {data.map((item) => (
              <div key={item._id}>
                <div className="rounded-md m-5">
                  <div className="relative ">
                    <img
                      src={require("../../Assets/SpecialOffer.png")}
                      alt=""
                      className=" rounded-md h-60 w-full object-cover"
                    />
                    <div className="absolute bg-graydust-light opacity-90 top-40 w-full h-18 flex rounded-lg p-2 ">
                      <div className="text-xs md:text-sm w-1/3">
                        <h6 className="text-blacky-light">City</h6>
                        <p className="text-blacky-dark">{item.location}</p>
                      </div>
                      <div className="text-xs md:text-sm w-1/3 pl-3 border-l-2 border-graydust-normal">
                        <h6 className="text-blacky-light">Dates</h6>
                        <p className="text-blacky-dark">
                          {item.startDate}- {item.endDate}
                        </p>
                      </div>
                      <div className="text-xs md:text-sm w-1/3 pl-3 border-l-2 border-graydust-normal">
                        <h6 className="text-blacky-light">Price</h6>
                        <p className="text-blacky-dark">
                          ₹ {item.cheapestPrice}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/*Texts*/}

                  <div className="">
                    <h3 className="text-blacky-medium font-bold text-lg">
                      {item.title}
                    </h3>
                    <p className="text-blacky-medium text-justify text-sm">
                      {item.description}
                    </p>
                  </div>

                  {/*Buttons*/}
                  <div className="flex justify-between gap-2 mb-4 ">
                    <button className="my-2 border border-evergreen rounded w-48 h-8 bg-whiteglow text-evergreen font-medium text-sm hover:bg-blacky-dark hover:text-whiteglow duration-500 hover:border-transparent">
                      Read More
                    </button>

                    <button className="my-2 border border-evergreen rounded w-48 h-8 bg-evergreen text-whiteglow font-medium text-sm  hover:bg-blacky-dark hover:text-whiteglow duration-500 hover:border-transparent">
                      Book now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </>
      )}
    </div>
  );
};

export default Offers;
