import { faCalendarDays, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import logoupload from '../../../../Assets/images/upload-img.png';
import { useState } from 'react';
import './AdminCreateCoursesForm.css'
import { useNavigate } from 'react-router-dom';


function AdminCreateCoursesForm() {
  const [inputType, setInputType] = useState('text');
  const navigate = useNavigate();

  const handleFocus = () => {
    setInputType('date');
  };
  const handleFocusT = () => {
    setInputType('time');
  };

  const handleBlur = () => {
    setInputType('text');
  };
  const handelCancel = () => {
    navigate('/adminpanel');
  }
  return (
    <>


      {/* form 1  */}
      <div className="form-course">
        <h4 className="d-lg-none">course information</h4>
        {/* course name */}
        <div className="row g-3 mt-2">
          <div className="col-md-5">
            <div className="form-outline">
              <label className="form-label" for="form10Example1">
                <p className="mb-0">Course Name</p>
              </label>
              <input
                type="text"
                id="form10Example1"
                className="form-control"
                style={{ backgroundColor: "rgba(0,0,0,.5)" }}
              ></input>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-outline">
              <label className="form-label" for="form10Example2">
                <p className="mb-0">Level</p>
              </label>
              <input
                type="text"
                id="form10Example2"
                className="form-control"
                style={{ backgroundColor: "rgba(0,0,0,.5)" }}
              ></input>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-outline">
              <label className="form-label" htmlFor="form10Example3">
                <p className="mb-0">Number of Lessons</p>
              </label>
              <input
                type="text"
                id="form10Example3"
                className="form-control"
                style={{ backgroundColor: "rgba(0,0,0,.5)" }}
              ></input>
            </div>
          </div>
        </div>
        {/* date and Duration */}
        <div className="row g-4 mt-0">
          <div className="col-md-3">
            <div className="form-outline">
              <label className="form-label" htmlFor="form10Example1">
                <p className="mb-0">Language</p>
              </label>
              <input
                type="text"
                id="form10Example1"
                className="form-control"
                style={{ backgroundColor: "rgba(0,0,0,.5)" }}
              ></input>
            </div>
          </div>
          {/* inner icon Start Date */}
          <div className="col-md-3">
            <div className="form-outline">
              <label className="form-label" htmlFor="form10Example3">
                <p className="mb-0">Start Date</p>
              </label>
              <div className="pls-icon">
                <input
                  type="text"
                  placeholder="mm/dd/yyyy"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  id="form10Example3"
                  className="form-control"
                  style={{ backgroundColor: "rgba(0,0,0,.5)", color: "#fff" }}
                ></input>
                <div className="icon">
                </div>
              </div>
            </div>
          </div>
          {/* inner icon Duration */}
          <div className="col-md-3">
            <div className="form-outline">
              <label className="form-label" htmlFor="form10Example3">
                <p className="mb-0">Duration</p>
              </label>
              <div className="pls-icon">
                <input
                  type="text"
                  placeholder="00:00 AM"
                  onFocus={handleFocusT}
                  onBlur={handleBlur}
                  id="form10Example3"
                  className="form-control"
                  style={{ backgroundColor: "rgba(0,0,0,.5)", color: "#fff" }}
                ></input>
                <div className="icon">
                </div>
              </div>
            </div>
          </div>
          {/* publish-hidden-lg publishing date */}
          <div className="d-block d-md-none">
            <div className="form-outline">
              <label className="form-label" htmlFor="form10Example3">
                {' '}
                <p className="mb-0">publishing date</p>{' '}
              </label>
              <div className="pls-icon">
                <input
                  type="text"
                  id="form10Example3"
                  placeholder="mm/dd/yyyy"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="form-control"
                  style={{ backgroundColor: "rgba(0,0,0,.5)", color: "#fff" }}
                ></input>
                <div className="icon">
                </div>
              </div>
            </div>
          </div>
          {/* Certificate #ffffff1e */}
          <div className="col-md-3 mb-5 ">
            <div className="form-outline position-relative ">
              <label className="form-label">
                {' '}
                <p className="mb-0">Certificate </p>
              </label>
              <select
                className="input form-select p-2 opacity-100 createCourse-select"
                name="languages"
                id="language-select"
              // onFocus={(e) => {
              //   e.target.size = 6;
              // }}
              // onBlur={(e) => {
              //   e.target.size = 0;
              // }}
              // onChange={(e) => {
              //   e.target.size = 1;
              //   e.target.blur();
              // }}
              >
                <option value="">select Certificate</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>

              </select>
            </div>
          </div>
        </div>
      </div>
      {/* form 2 */}
      <div className="form-course mt-4 mt-lg-0">
        {/* Course Introduction */}
        <div className="form-outline  mt-4">
          <label className="form-label " htmlFor="form7Example1">
            <p className="mb-0">Course Introduction</p>
          </label>
          <textarea
            id="form7Example1"
            className="form-control input1 pb-5 Introduction Introduction-sm"
            style={{ backgroundColor: "rgba(0,0,0,.5)" }}
          ></textarea>
        </div>
        {/* Course Assessment and Course Requirements */}
        <div className="row mt-4 g-2">
          <div className="col-12 col-md-6">
            <div className="form-outline">
              <label className="form-label" htmlFor="form6Example1" >
                <p className="mb-0" >Course Assessment</p>
              </label>
              <textarea
                id="form6Example1"
                className="form-control input1 Introduction-2"
                style={{ backgroundColor: "rgba(0,0,0,.5)" }}
              ></textarea>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-outline">
              <label className="form-label" htmlFor="form6Example2">
                <p className="mb-0">Course Requirements</p>
              </label>
              <textarea
                id="form6Example1"
                className="form-control input1 Introduction-2"
                style={{ backgroundColor: "rgba(0,0,0,.5)" }}
              ></textarea>
            </div>
          </div>
        </div>
        {/* Course Materials */}
        <div className="form-outline mt-4">
          <label className="form-label " htmlFor="form7Example1">
            <p className="mb-0">Course Materials</p>
          </label>
          <textarea
            type="text"
            id="form6Example1"
            className="form-control input1 Introduction-2"
            style={{ backgroundColor: "rgba(0,0,0,.5)" }}
          ></textarea>
        </div>
        {/* publish-hidden-sm */}
        <div className="d-md-block publish-hidden  d-none col-6">
          <div className="form-outline w-50">
            <label className="form-label" htmlFor="form10Example3">
              publishing date
            </label>
            <div className="pls-icon">
              <input
                type="text"
                placeholder="mm/dd/yyyy"
                onFocus={handleFocus}
                onBlur={handleBlur}
                id="form10Example3"
                className="form-control text-light"
                style={{ backgroundColor: "rgba(0,0,0,.5)", color: "#fff" }}
              />
              <div className="icon">
              </div>
            </div>
          </div>
        </div>
        {/* card upload */}
        <div className="upload mt-4">
          <h6 className="mb-3 title-upload d-none d-lg-block">
            Upload Cover Photo
          </h6>
          <div className="card-upload text-center bg-opacity-10 bg-dark p-5">
            <div className="card-hover position-relative">
              <input type="file" className="position-absolute file" style={{ backgroundColor: "rgba(0,0,0,.5)" }}></input>
              <img className="svg-upload" src={logoupload} alt=".."></img>
              <h6 className="drog-drop mt-3">
                Drag & drop files or{' '}
                <span className="browse btn-link" id="browse" type="files">
                  Browse
                </span>{' '}
              </h6>
            </div>
            <span className="supported-text text-white-50 text-opacity-50">
              Supported formates:
              <span className="supported-type">
                {' '}
                JPEG, PNG, GIF, MP4, PDF, PSD, Al, Word, PPT
              </span>
            </span>
          </div>
        </div>
        <div className="form-buttons mt-5">
          <button className="cancel" onClick={handelCancel}>cancel</button>
          <button className="save">save</button>
          {/* <!-- button appears only for mobiles and tablets--> */}
          <button className="publish-btn">publish</button>
        </div>
      </div>

    </>
  );
}



export default AdminCreateCoursesForm