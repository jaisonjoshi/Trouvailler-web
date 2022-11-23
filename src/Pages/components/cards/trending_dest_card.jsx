import React from 'react'

const trending_dest_card = () => {
  return (
    <div className='overflow-hidden rounded-md shadow-gray-200 shadow-lg w-full relative'>
        <img className='h-60 sm:h-72 object-cover w-full' src={require('../../Assets/Rectangle 43.png')} alt="" />
        <div className='p-6'>
            <h3 className='text-lg font-bold'>Villa with private jacuzzi (Idukki)</h3>
            <p className='text-md  '>Villas that are the very definition of luxury, exclusive, serene - equipped with a Jacuzzi, the best in amenities and tastefully furnished.</p>
        </div>
        <div className='bg-whiteglow rounded-xl font-semibold absolute top-0 m-3 p-2'>
        From ₹ 11,999
        </div>
    </div>
  )
}
import React from "react";
import useFetch from "../../../hooks/useFetch";

const DestCard = () => {
  const { data, loading, error } = useFetch(
    "/packages?rating=3&rating=4&rating=5&limit=6"
  );

  return (
    <div className='grid  sm:grid-cols-2 md:grid-cols-3 gap-10 m-11'>
        {loading ? (
          "Loading"
        ) : (
          <>
            {data.map((item) => (
      <div className="overflow-hidden rounded-md shadow-gray-200 shadow-lg w-full relative">
              <div className="" key={item._id}>
                <img
                  className="h-60 sm:h-72 object-cover w-full"
                  src={require('../../Assets/Rectangle 43.png')}
                  alt=""
                />
                <div className="p-5">

                <h3 className="text-lg font-bold">
                  {item.title}({item.location})
                </h3>
                <p className="text-sm text-justify">{item.description}</p>
                </div>
                <p className="bg-whiteglow rounded-xl font-semibold absolute top-0 m-3 p-2">
                  From ₹ {item.cheapestPrice}{" "}
                </p>
              </div>
      </div>
            ))}
          </>
        )}
    </div>
  );
};

export default DestCard;

export default trending_dest_card