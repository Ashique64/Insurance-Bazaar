import React from "react";
import "./OurServices.scss";

const OurServices = () => {
  const cardItems = [
    {
      title: "Car",
      backgroundImage: "/images/service/sv-shape-1.png",
      icon: "bx bx-car",
      color: "#2ca2fb",
    },
    {
      title: "Bike",
      backgroundImage: "/images/service/sv-shape-2.png",
      icon: "bx bx-cycling",
      color: "#fcaf3d",
    },
    {
      title: "Health",
      backgroundImage: "/images/service/sv-shape-3.png",
      icon: "bx bxs-heart",
      color: "#7362fe",
    },
    {
      title: "Life",
      backgroundImage: "/images/service/sv-shape-4.png",
      icon: "bx bxs-user",
      color: "#00defe",
    },
    {
        title: "Home",
        backgroundImage: "/images/service/sv-shape-5.png",
        icon: "bx bx-home",
        color: "#fd3358",
      },
      {
        title: "Business",
        backgroundImage: "/images/service/sv-shape-6.png",
        icon: "bx bxs-briefcase",
        color: "#0dca95",
      },
      {
        title: "Pet",
        backgroundImage: "/images/service/sv-shape-2.png",
        icon: "bx bxs-dog",
        color: "#fcaf3d",
      },
      {
        title: "Travel",
        backgroundImage: "/images/service/sv-shape-3.png",
        icon: "bx bxs-plane",
        color: "#7362fe",
      },
  ];

  return (
    <div className="our-services">
      <div className="services_shape">
        <img src="/images/slider/02_Shape.png" alt="" />
      </div>

      <div className="container">
        <div className="row services_item1">
          <div className="col-md-12 item1_col">
            <div className="title_section">
              <h4 className="subtitle">Our Services</h4>
              <h3 className="title">
                Types of instive <span>insurance</span>
              </h3>
            </div>
          </div>
        </div>

        <div className="row services_item2">
          {cardItems.map((item, index) => (
            <div className="col-xl-3 col-lg-4 col-md-6 item2_col" key={index} style={{ "--card-color": item.color }}>
              <div className="card">
                <div
                  className="icon"
                  style={{
                    backgroundImage: `url(${item.backgroundImage})`,
                  }}
                >
                  <a href="#">
                    <i className={item.icon}></i>
                  </a>
                </div>
                <div className="title">
                  <h4>
                    <a href="#">{item.title}</a>
                  </h4>
                </div>
                <div className="circle">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="row services_item3">
            <div className="col-md-12 item3_col">
                <div className="get_qoutes">
                    <h4>Get insurance qoutes</h4>
                    <div className="items">
                        <input type="text" />
                        <button>Get Qoutes</button>
                    </div>
                </div>
            </div>
        </div> */}
      </div>
    </div>
  );
};

export default OurServices;
