import React from 'react'
import { Link } from 'react-router-dom'
import camponyLogo from "../../Assets/images/EIT.jpeg"
import uploadIMG from "../../Assets/images/upload-img.png"

const JobApply = () => {
  return (
    <div className="text-white p-5 rounded" style={{
      backgroundColor: "rgb(0, 0, 0,0.3)",
    }}>
      <div className="d-flex justify-content-between align-content-lg-start ">
        <div className="d-flex gap-3">
          <img src={camponyLogo} className="" style={{ width: "70px", height: "fit-content" }} />
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
      <div className="row  pt-5">
        <div className="col-5">
          <h6
            style={{
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            Balqees Hamdi Sabir
          </h6>

          <p>Computer science, international islamic university</p>
        </div>
      </div>
      <div className="row  py-2 ">
        <div className="col-8">
          <h6 style={{ fontSize: "20px" }}>Email</h6>

          <input
            type="text"
            className="form-control "
            style={{
              border: "0px",
              backgroundColor: "rgb(73, 73, 73)",
            }}
          />
        </div>
        <div className="col-4">
          <h6 style={{ fontSize: "20px" }}>Years Of Experience</h6>

          <input
            type="text"
            className="form-control "
            style={{ border: "0px", backgroundColor: "rgb(73, 73, 73)" }}
          />
        </div>
      </div>
      <div className="row  py-2">
        <div className="col-6">
          <h6 style={{ fontSize: "20px" }}>Mobile Number </h6>

          <input
            type="text"
            className="form-control "
            style={{ border: "0px", backgroundColor: "rgb(73, 73, 73)" }}
          />
        </div>
      </div>
      <div className="row  py-2">
        <div className="col-7" style={{ width: "430px" }}>
          <h6 style={{ fontSize: "20px" }}>Upload CV </h6>
          <div
            className="col-12"
            style={{
              border: "1px dashed #bf9b30",
              textAlign: "center",
            }}
          >
            <img src={uploadIMG} />
            <h6 style={{ fontSize: "20px" }}>
              Drog & drop files or{" "}
              <span
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: "#bf9b30",
                }}
              >
                Browse
              </span>{" "}
            </h6>
            <p style={{ fontSize: "14px", color: "gray" }}>
              Supported formotes: JPEG,PNG,GIF,MP4,PDF,PSD,AL,Word,PPT
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex gap-2 align-content-center justify-content-end mt-4">
        <Link to="/AllJobsPage/details">
          <div
            className="btn text-white text-uppercase"
            style={{
              width: "160px",
              backgroundColor: "rgba(223, 217, 217, 0.822)",
              height: "40px",
              color: "#bf9b30",
            }}
          >
            cancel
          </div>
        </Link>
        <Link>
          <div
            className="btn text-white text-uppercase"
            style={{
              width: "160px",
              height: "40px",
              color: "white",
              marginLeft: "1rem",
              backgroundColor: "#bf9b30",
            }}
          >
            submit
          </div>
        </Link>

      </div>
    </div>
  )
}

export default JobApply