import React from "react";

import "./AboutUs.css";
import { images } from "../../constants";
const AboutUs = () => {
  return (
    <div
      className="app__about app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__about-overlay flex__center">
        <img src={images.G} alt="g letter" />
      </div>
      <div className="app__about-content flex__center">
        <div className="app__about-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about-spoon" className="spoon__img" />
          <p className="p__openSans">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis
            Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed
            Odio Nec Aliquet Eu Proin Mauris Et.
          </p>
          <button className="custom__button" type="button">
            Know More
          </button>
        </div>

        <div className="app__about-knife flex__center">
          <img src={images.knife} alt="knife" />
        </div>

        <div className="app__about-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about-spoon" className="spoon__img" />
          <p className="p__openSans">
            Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat.
            Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed
            Odio Nec Aliquet.
          </p>
          <button className="custom__button" type="button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
