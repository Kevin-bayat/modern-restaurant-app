import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();
  const videoHandler = () => {
    setPlayVideo((prevState) => !prevState);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__video">
      <video src={meal} type="video/mp4" loop muted ref={vidRef} />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-container flex__center"
          onClick={videoHandler}
        >
          {playVideo ? (
            <BsPauseFill className="app__video-icon" />
          ) : (
            <BsFillPlayFill className="app__video-icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
