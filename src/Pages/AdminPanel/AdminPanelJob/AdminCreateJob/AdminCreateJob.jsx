import React from 'react';
// import './AdminCreateArticlePage.css';
import { Link } from 'react-router-dom';
import AdminCreateJobForm from '../../../../Components/AdminPanal/AdminJobs/AdminCreateJob/AdminCreateJobForm';
import HeaderTitle from '../../../../Components/Global/HeaderTitle';
import SideBarAdmin from '../../../../Components/AdminPanal/AdminGlobal/SideBar/AdminSideBar';
import TopBarAdmin from '../../../../Components/AdminPanal/AdminGlobal/TopBarAdmin';

export default function AdminCreateJob() {
  return (
    <>
      <div className="container">
        <HeaderTitle title={'Add Article Details'} />
      </div>

      <div className="container d-flex flex-column gap-4 my-4 mt-3">
        {/* -------------------------button  ---------------------- */}
        {/* <AdminButtonHeader buttonTitle={`create new ${titleSideBar}`} /> */}
        <div className="col align-self-lg-end px-3 mb-5 mb-lg-0 order-last order-lg-first">
          <Link
            className="btn btn-primary btn-block py-2  px-3 fs-5"
          // to={path}
          >
            PUBLISH
          </Link>
        </div>

        {/* Sidebar and right table -------------------------*/}
        <div className="row gx-5">
          <div className="col-12 col-xl-3">
            <SideBarAdmin />
            <TopBarAdmin />
          </div>
          <div className="col-12 col-xl-9">
            {/* {componentToRender} */}
            <AdminCreateJobForm />
          </div>
        </div>
      </div>
    </>
  );
}
