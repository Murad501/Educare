import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseDetails from "../CourseDetails/CourseDetails";

const CategoryPage = () => {
  const courses = useLoaderData();
  return (
    <div className="grid lg:grid-cols-4 gap-4">
      <div>
      <h1 className="text-3xl font-bold my-5">Course Name</h1>
        {
            courses.map(course => <Link to={'/course/' + course.id} key={course.id} className="block hover:text-blue-500 text-xl pl-6 font-semibold  mb-5"><li>{course.title}</li></Link>)
        }
      </div>
      <div className="lg:col-span-3">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4 justify-items-center">
          {courses.map((course) => (
            <CourseDetails key={course.id} course={course}></CourseDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
