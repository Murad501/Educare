import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseDetails from "../CourseDetails/CourseDetails";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold text-center">Total Courses</h1>
        <div className="grid grid-cols-3 justify-items-center">
        {
            courses.map(course => <CourseDetails key={course.id}  course={course}></CourseDetails>)
        }
        </div>
      </div>
    </div>
  );
};

export default Courses;
