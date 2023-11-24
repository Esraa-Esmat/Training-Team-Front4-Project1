import React, { useEffect, useState } from "react";
// import { AdminJobData } from "./AdminJobData";
import { LiaTrashAlt } from "react-icons/lia";
import { Link } from "react-router-dom";
// import { deleteJob, setFilteredItems, toggleJobStatus } from "../../../Redux/Reducers/AdminSlice";
import { useDispatch, useSelector } from 'react-redux';
import { deleteJob, toggleJobStatus } from "../../../Redux/Reducers/AdminSlice";
import { AdminJobData } from "../../../Components/AdminPanal/AdminJobs/AdminJobData";
import { AdminSideBarData } from "../../../Components/AdminPanal/AdminGlobal/SideBar/AdminSideBarData";
import AdminSectionsSearchBar from "../../../Components/AdminPanal/AdminGlobal/AdminSectionsSearchBar";

function AdminPanelJobs() {
    const jobs = useSelector((state) => state.AdminSlice.jobs);
    const selectedContent = useSelector((state) => state.AdminSlice.selectedContent);
    const dispatch = useDispatch();
    const titleSideBar = useSelector((state) => state.AdminSlice.titleSideBar)

    const filteredJobs = jobs.filter((job) => {
        const matchingContent = AdminSideBarData.find(section => section.title === 'Jobs')?.content;
        if (matchingContent) {
            if (selectedContent && matchingContent.includes(selectedContent)) {
                return selectedContent === 'Published Jobs' ? job.status === 'Open' : job.status === 'Close';
            }
        }
        return true;
    });



    const handelDeleteJob = (index) => {
        dispatch(deleteJob(index));
    };

    const handleToggleStatus = (index) => {
        dispatch(toggleJobStatus({ index }));
    };


    return (
        <>
        
            {selectedContent ?
                <AdminSectionsSearchBar section={`${titleSideBar} - ${selectedContent}`} />
                :
                <AdminSectionsSearchBar section={titleSideBar} />

            }
            <div className="d-none d-lg-flex flex-column gap-4 mt-5 text-capitalize">
                <div className="row align-items-center fw-bold px-4">
                    <div className="col-6 col-lg-3">Company</div>
                    <div className="col-6 col-lg-3">Position</div>
                    <div className="col-6 col-lg-2">Status</div>
                    <div className="col-6 col-lg-2">Posted At</div>
                    <div className="col-6 col-lg-2"># Applications</div>
                    <div className="col-6 col-lg-1"></div>
                </div>
                { filteredJobs &&
                    filteredJobs.map((job, i) => (
                        <div key={i} className="row bg-black bg-opacity-25 align-items-center rounded p-4">
                            <div className="col-6 col-lg-3">
                                <h6 className="mb-0">{job?.company}</h6>
                            </div>
                            <div className="col-6 col-lg-3">{job?.position}</div>
                            <div className="col-6 col-lg-2 ">
                                <button
                                    className={`badge rounded-pill fs-6 py-2 px-4 ${job.status === 'Open' ? 'bg_primary border_primary' : 'bg_gray border_gray'}`}
                                    onClick={() => handleToggleStatus(i)}
                                >
                                    {job.status}
                                </button>
                            </div>
                            <div className="col-6 col-lg-2">
                                <h6>{`${job?.postedDay},  ${job?.postedDate}`}</h6>
                                <h6>{job?.postedTime}</h6>
                            </div>
                            <div className="col-6 col-lg-1">
                                <h6>{job?.applications}</h6>
                            </div>
                            <div className="col-6 col-lg-1 d-flex align-items-center gap-2 text_primary">
                                <Link className="text_primary clickable active-scale" to={`${job?._id}`}>
                                    <i className="fa-regular fa-pen-to-square fa-xl" />
                                </Link>

                                <div className="clickable active-scale" onClick={() => handelDeleteJob(i)}>
                                    {/* <i className="fa-solid fa-trash-can fa-xl" /> */}
                                    <LiaTrashAlt size={30} />
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default AdminPanelJobs;
