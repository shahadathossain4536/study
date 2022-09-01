import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-20">
      <h1 className="text-center text-7xl my-6">Our Vision</h1>
      <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
          {reviews.slice(0, 3).map((review) => (
            <div class="card w-96 bg-base-100 shadow-xl text-justify">
              <div class="card-body">
                <h2 class="card-title">{review.review}</h2>
                <div className="flex justify-around items-center">
                  <div className="w-24  ">
                    <img
                      className="rounded-full ring ring-accent ring-offset-base-100 ring-offset-2"
                      src={review.img}
                      alt=""
                      srcset=""
                    />
                  </div>

                  <h6 className="text-2xl">{review.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end items-end">
        <button className="btn btn-sm mr-28 mt-12">See all</button>
      </div>
    </div>
  );
};

export default Reviews;
