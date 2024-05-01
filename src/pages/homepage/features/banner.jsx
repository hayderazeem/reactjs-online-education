import React from "react";
import "../features/banner.css";
import BannerImg from "../../../assets/banner_img1.png";
import Certification from "../../../assets/certification.png";
import Exam from "../../../assets/exam.png";
import OnlineTest from "../../../assets/online-test.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="page_width">
        <div className="banner_inner">
          <div className="content">
            <h2>
              The <span>Smart</span> <br />
              Choice For <span>Future</span>
            </h2>
            <br />
            <p>
              Elearn is a global training provider based across the UK that
              <br />
              specialises in accredited and bespoke training courses. We crush
              <br /> the...
            </p>
            <br />
            <br />
            <div className="search_box">
              <input
                type="text"
                placeholder="Search for a location..."
                className="search_box_input"
              />
              <input
                className="search_box_btn"
                type="button"
                value="Continue"
              />
            </div>
          </div>
          <div className="img">
            <img src={BannerImg} width="100%" alt="" />
          </div>

          <div className="bottom_banner">
            <div className="grid-container">
              <div className="grid-item item1">
                <div className="img_box">
                  <img src={OnlineTest} alt="" width="34px" height="34px" />
                </div>
                <div>
                  <h3>Learn The Latest Skills</h3>
                  <br />
                  <p className="grid_p">
                    Contrary to popular belief, Lorem Ipsum is <br />
                    not simply random text. It has roots in a <br />
                    BC, making it over 2000 years old.
                  </p>
                </div>
              </div>
              <div className="grid-item item2">
                <div className="img_box">
                  <img src={Exam} alt="" width="34px" height="34px" />
                </div>
                <div>
                  <h3>Get Ready For a Career</h3>
                  <br />
                  <p className="grid_p">
                    Contrary to popular belief, Lorem Ipsum is <br />
                    not simply random text. It has roots in a <br />
                    BC, making it over 2000 years old.
                  </p>
                </div>
              </div>
              <div className="grid-item item3">
                <div className="img_box">
                  <img src={Certification} alt="" width="34px" height="34px" />
                </div>
                <div>
                  <h3>Get Ready For a Career</h3>
                  <br />
                  <p className="grid_p">
                    Contrary to popular belief, Lorem Ipsum is <br />
                    not simply random text. It has roots in a <br />
                    BC, making it over 2000 years old.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
