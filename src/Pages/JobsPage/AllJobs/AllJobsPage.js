
import React from "react";
// import Search from "../components/Search";
// import main_background from "../media/main_background.jpg";
import { Link, Outlet } from "react-router-dom";
import HeaderTitle from "../../../Components/Global/HeaderTitle";
import JobSideBar from "../../../Components/Jobs/JobSideBar";

// const handleSearch = () =>{
//   console.log('search');
// }

const AllJobsPage = () => {
  return (
    <>
      <div className="container">
        <HeaderTitle title={'Jobs'} />
      </div>
      <div className="container d-flex flex-column gap-4 my-4 mt-3">
        {/* create new job button ---------------------- */}
        {/* <AdminButtonHeader buttonTitle={`create new ${titleSideBar}`} /> */}
        {/* <div className="d-flex justify-content-between col mb-5 mb-lg-0 order-last order-lg-first">


          <div>
            <h3>Looking for Job?</h3>
            <span>Here you can find your best match between 1000s of update and available position</span>
          </div>
          <Link
            className="btn btn-primary btn-block px-lg-3 fs-5 h-50"							>
            search
          </Link>

        </div> */}

        <div className="d-none d-lg-flex justify-content-between mt-5">

          <div className="w-25"><h2 className="display-1 head-page-title text-capitalize fs-5">Looking for Job?</h2>
            <p>Here you can find your best match between 1000s of update and available position</p>
          </div> 
          <div className=" admin-job-search d-flex align-items-center searchInput"
            style={{ backgroundColor: "rgb(1, 1, 1, 0.3)", height: "100%" , paddingLeft:"20px" , width:"30%"}}
          >
            <i className="fa-solid fa-magnifying-glass ml-5" />

            <input
              className="form-control bg-transparent text-light border-0 h-100"
              type="text"
              placeholder='Search in Job'
              aria-label='Search in Job'
            />
            {/* <div className="text_primary clickable"> */}
              <Link
                className="btn btn-primary rounded-0 fs-5">
                search
              </Link>
            {/* </div> */}
          </div>
        </div>
        {/* Sidebar and right table -------------------------*/}
        <div className="row gx-5 mt-5">
          <div className="col-12 col-xl-3">
            <JobSideBar />
            {/* <TopBarAdmin /> */}
            <div className="btn text-uppercase text-white w-100 mt-4" style={{ backgroundColor: "#bf9b30" }}>create your cv</div>

          </div>
          <div className="col-12 col-xl-9">
            {/* {componentToRender} */}
            {/* <AdminListPagination /> */}
            <Outlet />
          </div>
        </div>
      </div>

    </>
  );
};
export default AllJobsPage;