import React from "react";
import Not404 from "../image/404.png";
const NotFound = () => {
  return (
    <div className=" flex justify-center items-center">
      <img className="w-[550px]" src={Not404} alt="" />
    </div>
  );
};

export default NotFound;
