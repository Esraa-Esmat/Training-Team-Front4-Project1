
import React from 'react'
import AdminSectionsSearchBar from '../../../Components/AdminPanal/AdminGlobal/AdminSectionsSearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { LiaTrashAlt } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import { deletecourse, toggleCourseStatus } from '../../../Redux/Reducers/AdminSlice';
import { AdminSideBarData } from '../../../Components/AdminPanal/AdminGlobal/SideBar/AdminSideBarData';
import { infoMsg } from '../../../Components/Toast/Toast';

const AdminPanelCourses = () => {
  const selectedContent = useSelector((state) => state.AdminSlice.selectedContent);
  const titleSideBar = useSelector((state) => state.AdminSlice.titleSideBar)
  const courses = useSelector((state) => state.AdminSlice.courses);
  const dispatch = useDispatch();

  const filteredCourses = courses.filter((course) => {
    const matchingContent = AdminSideBarData.find(section => section.title === 'Courses')?.content;
    if (matchingContent) {
      if (selectedContent && matchingContent.includes(selectedContent)) {
        // return selectedContent === 'Published courses' ? course.status === 'On Going' : course.status === 'Close';
        switch (selectedContent) {
          case 'Published Courses':
            return course.status === 'On Going';
            break;
          case 'Scheduled Courses':
            return course.status === 'Upcoming';
            break;
          case 'Saved Drafts':
            return course.status === 'Ended';
            break;
          default:
            break;
        }
      }
    }
    return true;
  });


  const handelDeleteCourse = (index) => {
    dispatch(deletecourse(index));
    infoMsg(`Item ${index} Is Deleted`)

  };

  const handleToggleStatus = (index) => {
    dispatch(toggleCourseStatus({ index }));
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
          <div className="col-6 col-lg-2">Title</div>
          <div className="col-6 col-lg-2">Status</div>
          <div className="col-6 col-lg-2">Instractor</div>
          <div className="col-6 col-lg-1">Level</div>
          <div className="col-6 col-lg-2">Start Date</div>
          <div className="col-6 col-lg-2">Published On </div>
          <div className="col-6 col-lg-1"></div>
        </div>
        {filteredCourses &&
          filteredCourses.map((course, i) => (
            <div key={i} className="row bg-black bg-opacity-25 align-items-center rounded p-4">
              <div className="col-6 col-lg-2">
                <h6 className="mb-0">{course?.title}</h6>
              </div>
              <div className="col-6 col-lg-2 ">
                <button
                  className={`badge rounded-pill fs-6 py-2 px-4  ${course.status === 'On Going' ? 'bg_primary border_primary' : 'bg_gray border_gray'}`}
                  onClick={() => handleToggleStatus(i)}
                >
                  {course.status}
                </button>
              </div>
              <div className="col-6 col-lg-2">{course?.instructor}</div>
              <div className="col-6 col-lg-1">{course?.level}</div>
              <div className="col-6 col-lg-2">
                <h6>{`${course?.startDate.postedDay},  ${course?.startDate.postedDate}`}</h6>
              </div>
              <div className="col-6 col-lg-2">
                <h6>{`${course?.publishedOn.postedDay},  ${course?.publishedOn.postedDate}`}</h6>
                <h6>{course?.publishedOn.postedTime}</h6>

              </div>
              <div className="col-6 col-lg-1 d-flex align-items-center gap-2 text_primary">
                <Link className="text_primary clickable active-scale" to={`${course?._id}`}>
                  <i className="fa-regular fa-pen-to-square fa-xl" />
                </Link>

                <div className="clickable active-scale" onClick={() => handelDeleteCourse(i)}>
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

export default AdminPanelCourses


