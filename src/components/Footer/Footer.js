import React from "react";
import { FaCopyright } from "react-icons/fa";

const MainFooter = () => {
  return (
    <div className="flex justify-center items-center border-t py-7 gap-3">
      <FaCopyright></FaCopyright>
      <p>2022 Educare</p>
    </div>
  );
};

export default MainFooter;
