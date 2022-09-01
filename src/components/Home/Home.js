import React from "react";
import Banner from "./Banner";
import Course from "./Course";
import Feedback from "./Feedback";
import Footer from "./Footer";
import OurVision from "./OurVision";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Course />
      <OurVision />
      <Reviews />
      <Feedback />
      <Footer />
    </div>
  );
};

export default Home;
