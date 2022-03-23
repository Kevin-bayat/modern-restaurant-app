import React from "react";

import "./Awards.css";
import "../../container/Laurels/Laurels.css";

const Awards = ({ data }) => {
  return (
    <div className="app_award">
      {data.map((item, index) => (
        <div className="app__laurels-awards_info " key={index}>
          <div className="app__laurels-awards_info-img">
            <img src={item.imgUrl} alt={""} />
          </div>
          <div className="app__laurels-awards_info-contents">
            <p className="p__cormorant" style={{ color: "#DCCA87" }}>
              {item.title}
            </p>
            <p className="p__openSans">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Awards;
