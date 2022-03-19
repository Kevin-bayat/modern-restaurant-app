import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, tags, price }) => {
  return (
    <div className="app__menuItem">
      <div className="app__menuItem-head">
        <div className="app__menuItem-head-name">
          <p className="p__cormorant" style={{ color: "#DCCA87" }}>
            {title}
          </p>
        </div>
        <div className="app__menuItem-head-border" />
        <div className="app__menuItem-head-price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>
      <div className="app__menuItem-sub">
        <p className="p__openSans" style={{ color: "#aaa" }}>
          {tags}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
