import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "flowbite-react";
import React from "react";
import { FaStar, FaUserFriends } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import PDFFile from "../PDFFile/PDFFile";

const CourseDetailsFull = () => {
  const course = useLoaderData();
  const { title, description, image, students, rating } = course;
  return (
    <div className="my-5 px-4">
      <div className="mb-5">
        <PDFDownloadLink
          document={<PDFFile course={course}></PDFFile>}
          fileName="courseDetails"
        >
          {({ loading }) =>
            loading ? (
              "loading data...."
            ) : (
              <Button className="mx-auto" type="button">
                {" "}
                DownLoad Details PDF{" "}
              </Button>
            )
          }
        </PDFDownloadLink>
      </div>
      <div>
        <div className="grid lg:grid-cols-5 gap-3">
          <div className="lg:col-span-3">
            <img
              style={{ height: "500px", width: "100%" }}
              src={image}
              alt="courseImage"
            ></img>
            <div className="flex justify-around mt-5">
              <div className="flex gap-3 justify-center items-center">
                <p className="text-lg font-semibold text-gray-500">Students </p>
                <FaUserFriends className="text-xl text-gray-500"></FaUserFriends>
                <p className="text-base font-semibold text-gray-500">
                  {students}
                </p>
              </div>
              <div className="flex gap-3 justify-center items-center">
                <p className="text-lg font-semibold text-gray-500">
                  Rating {rating}
                </p>
                <FaStar className="text-base text-yellow-300"></FaStar>
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                to={'/course/checkout/' + course.id}
                className="mt-7 hidden lg:block  px-6 py-3 rounded text-white font-semibold bg-blue-700"
              >
                Get Premium Access
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="font-normal text-justify mt-5 text-xl text-gray-700 dark:text-gray-400">
              <span className="text-2xl font-bold">Description:</span>{" "}
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-7 flex justify-center">
        <Link
          to={'/course/checkout/' + course.id}
          className="mt-5 lg:hidden mx-auto px-6 py-3 rounded text-white font-semibold bg-blue-700"
        >
          Get Premium Access
        </Link>
      </div>
    </div>
  );
};

export default CourseDetailsFull;
