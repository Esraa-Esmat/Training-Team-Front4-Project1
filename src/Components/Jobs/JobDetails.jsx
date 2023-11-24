import React from "react";
// import Search from "../components/Search";
// import Sidebar1 from "../components/SideBar1";
// import SecTitle1 from "../components/SecTitle1";
import { Link } from "react-router-dom";
// import HeaderTitle from "../Global/HeaderTitle";
import camponyLogo from "../../Assets/images/EIT.jpeg"

const JobDetails = () => {
  return (
    // <div className="landing-section main position-relative" style={{ marginBottom: "200px" }}>
    //   <main className="container d-flex flex-column gap-4 text-white position-relative pt-5 z-3">
    //     <HeaderTitle title="Jobs" />
    //     {/* <Search /> */}
    //     <div class="d-flex gap-5 mt-5">
    //       <div className="w-100" style={{ maxWidth: "360px" }}>
    //         <Sidebar1 />
    //         <div className="btn text-uppercase text-white w-100 mt-4" style={{ backgroundColor: "#bf9b30" }}>create your cv</div>
    //       </div>
    //       <div className="job-container d-flex flex-column gap-3">
    //         {/* start */}

    //         {/* end */}
    //       </div>
    //     </div>
    //   </main>
    // </div>
    <div
      className="text-white p-5 rounded "
      style={{
        backgroundColor: "rgb(0, 0, 0,0.3)",
      }}
    >
      <div className="row">
        <div className="d-flex justify-content-between align-content-lg-start mb-3">
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          sed minus enim quo hic libero maiores accusantium, voluptas vitae
          nulla neque aperiam, molestias incidunt placeat temporibus nihil
          ex mollitia non!
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
        <div className="row">
          <div className="col-9">
            <i
              className="fas fa-clock mt-3"
              style={{
                color: "rgb(180, 180, 180)",
                fontSize: "28px",
              }}
            ></i>
            <span
              style={{
                fontSize: "18px",
              }}
            >
              2 h ago
            </span>
          </div>

        </div>
      </div>
      <div className="row  pt-4">
        <div className="col">
          <h6
            style={{
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            About us
          </h6>

          <p>
            At vero eos et accusamnus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores
          </p>
        </div>
      </div>
      <div className="row  py-2 ">
        <div className="col">
          <h6
            style={{
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            Job Description
          </h6>

          <p>
            At vero eos et accusamnus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores
          </p>
        </div>
      </div>
      <div className="row  py-2">
        <div className="col">
          <h6
            style={{
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            Job Requirements
          </h6>

          <p>
            At vero eos et accusamnus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores
          </p>
        </div>
      </div>
      <div className="mt-2 d-flex w-100">
        <Link to="/AllJobsPage/apply" className="ms-auto w-fit">
          <div
            className=" btn  px-5 text-uppercase text-white"
            style={{
              backgroundColor: "#ecb622",
            }}
          >
            APPLY
          </div>
        </Link>
      </div>
    </div>
  );
};
export default JobDetails;