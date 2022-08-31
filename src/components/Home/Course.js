import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  IoPersonOutline,
  IoVideocamOutline,
  IoTimeOutline,
  IoPencil,
  IoLogoEuro,
} from "react-icons/io5";
const Course = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      {" "}
      <h1 className="text-center text-7xl my-6">Our Course</h1>
      <div className="flex justify-center items-center my-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-20 ">
          {courses.map((course) => (
            <div className="">
              <div class=" card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={course.img} alt="Shoes" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">Course Name : {course.courseName}</h2>
                  <p className="flex justify-start items-center">
                    <span className="mr-2">
                      {" "}
                      <IoPersonOutline />
                    </span>
                    Instructor : {course.courseInstructor}
                  </p>
                  <p className="flex justify-start items-center">
                    <span className="mr-2">
                      {" "}
                      <IoTimeOutline />
                    </span>
                    Duration : {course.courseDuration}h
                  </p>
                  <p className="flex justify-start items-center">
                    <span className="mr-2">
                      {" "}
                      <IoVideocamOutline />
                    </span>
                    Live Class : Yes
                  </p>
                  <p className="flex justify-start items-center">
                    <span className="mr-2">
                      {" "}
                      <IoPencil />
                    </span>
                    Assignment : Yes
                  </p>
                  <p className="flex justify-start items-center">
                    <span className="mr-2">
                      {" "}
                      <IoLogoEuro />
                    </span>
                    Course Fee : {course.courseFee}tk
                  </p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Enroll Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
