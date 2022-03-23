import React, { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import "./Gallery.css";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const Gallery = () => {
  const galleryImages = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];

  const scrollRef = useRef(null);

  const scrollHandler = (direction) => {
    const { current } = scrollRef;
    console.log({ direction, current });
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="app__gallery flex__center section__padding">
      <div className="app__gallery-info ">
        <SubHeading title="instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__openSans">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat
          Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>

      <div className="app__gallery-slider">
        <div className="app__gallery-slider-wrapper" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div key={index} className="app__gallery-slider-container">
              <img src={image} alt="gallery" />
              <BsInstagram className="app__gallery-slider-container-icon" />
            </div>
          ))}
        </div>

        <div className="app__gallery-slider-arrows">
          <BsArrowLeftShort
            className="gallery-icons"
            onClick={() => scrollHandler("left")}
          />
          <BsArrowRightShort
            className="gallery-icons"
            onClick={() => scrollHandler("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
