import React from "react";
import banner2 from "../../image/Untitled design (1).jpg";
import banner3 from "../../image/banner-3.jpg";
const Banner = () => {
  return (
    <div
      class="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner3})`,
      }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">STUDY 360</h1>
          <p class="mb-5"></p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
