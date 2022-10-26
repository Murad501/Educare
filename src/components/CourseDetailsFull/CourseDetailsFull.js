import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import { useLoaderData } from "react-router-dom";
import PDFFile from "../PDFFile/PDFFile";

const CourseDetailsFull = () => {
  const course = useLoaderData();
  return (
    <div>
      <PDFDownloadLink
        document={<PDFFile course={course}></PDFFile>}
        fileName="courseDetails"
      >
        {({ loading }) =>
          loading ? 
            "loading data...."
           : 
            <button className="btn btn-blue" type="button"> Export PDF </button>
          
        }
      </PDFDownloadLink>
    </div>
  );
};

export default CourseDetailsFull;
