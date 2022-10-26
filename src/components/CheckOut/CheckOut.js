import { Button } from "flowbite-react";
import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const course = useLoaderData();
  const { image, title, price, rating } = course;
  return (
    <div className="mt-6">
      <div className="mx-auto h-48 max-w-lg shadow-md flex p-2 rounded gap-2 relative">
        <img className="h-full w-48" src={image} alt=""></img>
        <div>
          <p className="text-xl font-bold">{title}</p>
          <div className="absolute bottom-2">
            <div className="flex items-center gap-1 text-lg font-bold">
              <p>Rating: {rating}</p>
              <FaStar className="text-yellow-300"></FaStar>
            </div>
            <p className="text-lg font-bold mt-3">Price: ${price}</p>
          </div>
        </div>
      </div>
      <Button className="mx-auto mt-6">Pay ${price}</Button>
    </div>
  );
};

export default CheckOut;
