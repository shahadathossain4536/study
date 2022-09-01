import React from "react";
import feedback from "../../image/Feedback.jpg";
const Feedback = () => {
  return (
    <div className="mx-10 my-10">
      <h1 className="text-center text-7xl my-6">FeedBack</h1>
      <div className="flex justify-center items-center ">
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-10 my-5">
          <div className="sm:w-96 lg:w-[460px]">
            <img src={feedback} alt="" srcset="" />
          </div>
          <div className="">
            {/* name */}
            <div class="form-control w-full max-w-xs mb-12">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            {/* name */}
            {/* email */}
            <div class="form-control w-full max-w-xs mb-10">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            {/* email */}
            <div class="form-control mb-10">
              <label class="label">
                <span class="label-text">Massage</span>
              </label>
              <textarea
                class="textarea textarea-bordered w-full max-w-xs"
                placeholder="Massage"
              ></textarea>
            </div>
            <button className="btn w-full max-w-xs">Feedback Sent</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
