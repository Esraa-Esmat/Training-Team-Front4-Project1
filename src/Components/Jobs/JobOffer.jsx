import React from 'react'
import { Link } from "react-router-dom";
import camponyLogo from "../../Assets/images/EIT.jpeg"

const JobOffer = () => {
  return (
    <div
      className="p-4 d-flex flex-column gap-2 rounded  overflow-hidden "
      // style={{ backgroundColor: "rgb(0, 0, 0,0.3)" }}
    >
      <div className="d-flex justify-content-between align-content-lg-start ">
        <div className="d-flex gap-3">
          <img src={camponyLogo} alt='logo' className="" style={{ width: "70px", height: "fit-content" }} />
          <div>
            <h6 className="nobreak" style={{ cursor: "pointer", fontSize: "20px" }}>
              Front-end React JS Developer
            </h6>
            <p>Eptikar IT Solutions, Obour City</p>
          </div>
        </div>
        <div className="">
          <span style={{ fontSize: "15px", fontWeight: "bold" }}>
            5000 EGP - 8000 EGP{" "}
          </span>
          <span> Per Month</span>
          <div>
            <i className="fas fa-map-marker-alt" style={{ color: "#bf9b30", }}>
            </i>
            <span> On Site</span>
          </div>
        </div>
      </div>
      <p className="fs-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sed
        minus enim quo hic libero maiores accusantium, voluptas vitae nulla
        neque aperiam, molestias incidunt placeat temporibus nihil ex mollitia
        non!
      </p>
      <div className="d-flex gap-2 align-content-center">
        <div
          className="btn text-white"
          style={{
            width: "160px",
            height: "40px",
            border: " 1px solid #bf9b30",
          }}
        >
          React JS
        </div>
        <div
          className="btn text-white"
          style={{
            width: "160px",
            height: "40px",
            border: " 1px solid #bf9b30",
          }}
        >
          Devlopment
        </div>
      </div>
      <div className="d-flex justify-content-between ">
        <div className="">
          <i
            className="fas fa-clock mt-3 me-2"
            style={{ color: "rgb(180, 180, 180)", fontSize: "28px" }}
          ></i>
          <span style={{ fontSize: "18px" }}>2 h ago</span>
        </div>
        <Link to="details">
          <div
            className=" btn  text-uppercase text-white"
            style={{ backgroundColor: "#bf9b30" }}
          >
            view details
          </div>
        </Link>

      </div>
    </div>
  );
};

export default JobOffer;