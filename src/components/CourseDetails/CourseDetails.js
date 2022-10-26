import React from "react";
import { FaStar, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseDetails = ({ course }) => {
  const { image, title, students, rating, price } = course;
  return (
    <div style={{height: '450px'}} className="max-w-sm p-3 rounded shadow-lg mb-10 w-full relative">
      <img
        style={{ height: "250px", width: "100%" }}
        src={image}
        alt="courseImage"
      ></img>
      <h2 className="text-xl font-bold mb-4 text-gray-700">{title}</h2>
      <div className="flex justify-between">
        <div className="flex gap-3 justify-center items-center">
          <FaUserFriends className="text-xl text-gray-500"></FaUserFriends>
          <p className="text-base font-semibold text-gray-500">{students}</p>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <p className="text-lg font-semibold text-gray-500">{rating}</p>
          <FaStar className="text-base text-yellow-300"></FaStar>
        </div>
      </div>
      <div className="mt-5 flex justify-between items-center gap-4 absolute bottom-3 right-3 left-3">
        <p className="text-2xl font-bold">${price}</p>
        <Link to={'/course/' + course.id} style={{width: '60%'}} className="font-semibold text-center rounded text-white py-3 bg-blue-500">More Details</Link>
      </div>
    </div>
  );
};

export default CourseDetails;
