import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseDetails from "../CourseDetails/CourseDetails";

const Courses = () => {
  const courses = useLoaderData();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://assignment-server-site-murad501.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="grid lg:grid-cols-4 gap-4">
      <div className="lg: mt-10">
        <h1 className="text-3xl font-bold my-5">Popular Categories</h1>
        <div>
          {categories.map((category) => (
            <Link
              to={'/category/' + category.id}
              key={category.id}
              className="block text-2xl pl-6 font-semibold  mb-5"
            >
              <li>{category.name}</li>
            </Link>
          ))}
        </div>
      </div>
      <div className="lg:col-span-3">
        <h1 className="text-5xl font-bold text-center my-5">Total Courses</h1>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4 justify-items-center">
          {courses.map((course) => (
            <CourseDetails key={course.id} course={course}></CourseDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
