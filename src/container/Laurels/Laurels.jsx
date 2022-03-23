import React from "react";
import { images, data } from "../../constants";
import "./Laurels.css";
import { Awards, SubHeading } from "../../components";

const Laurels = () => {
  return (
    <div className="app__laurels  app__bg section__padding" id="awards">
      <div className="app__laurels-awards">
        <SubHeading title="Awards & Recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>
        <Awards data={data.awards} />
      </div>
      <div className="app__laurels-image">
        <img src={images.laurels} alt="laurels img" />
      </div>
    </div>
  );
};

export default Laurels;
