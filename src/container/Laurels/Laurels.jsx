import React from "react";
import { SubHeading } from "../../components";
import { images, data } from "../../constants";

import "./Laurels.css";

const Laurels = () => {
  const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
    return (
      <div className="app__laurels_awards_card">
        <img src={imgUrl} alt="" />
        <div className="app__laurels_awards_card_content">
          <p className="p__cormorant" style={{ color: "#DCCA87" }}>
            {title}
          </p>
          <p className="p__opensans">{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>
        <div className="app__laurels_awards">
          {data.awards.map((award) => {
            return <AwardCard award={award} />;
          })}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.laurels} alt="" />
      </div>
    </div>
  );
};

export default Laurels;
