import React, { useRef, useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

const AdminCreateJobForm = () => {

    const [companyName, setCompanyName] = useState('');
  const [filed, setfiled] = useState('');
  const [location, setLocation] = useState('');
  const [file, setFile] = useState(null);
  const [aboutCompany, setaboutCompany] = useState('');
  const [position, setPosition] = useState('');
  const [jobType, setJobType] = useState('');
  const [jobStateOption, setjobStateOption] = useState('');
  const [salaryFrom, setsalaryFrom] = useState('');
  const [salaryTo, setsalaryTo] = useState('');
  const [currency, setcurrency] = useState('');
  const [jobDescription, setjobDescription] = useState('');
  const [jobRequirement, setjobRequirement] = useState('');
  const [skills, setskills] = useState('');

  const fileInputRef = useRef(null);
  const handleButtonClick = (event) => {
    event.preventDefault();
    fileInputRef.current.click();
    console.log(fileInputRef);
  };
  // handle state change
  const handleCompanyName = (event) => {
    setCompanyName(event.target.value);
  };
  const handlefiled = (event) => {
    setfiled(event.target.value);
  };
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };
  const handlefile = (event) => {
    setFile(event.target.files[0]);
  };
  const handleaboutCompany = (event) => {
    setaboutCompany(event.target.value);
  };
  const handlePosition = (event) => {
    setPosition(event.target.value);
  };
  const handleJobType = (event) => {
    setJobType(event.target.value);
  };
  const handlejobStateOption = (event) => {
    setjobStateOption(event.target.value);
  };
  const handlesalaryFrom = (event) => {
    setsalaryFrom(event.target.value);
  };
  const handlesalaryTo = (event) => {
    setsalaryTo(event.target.value);
  };
  const handlecurrency = (event) => {
    setcurrency(event.target.value);
  };
  const handlejobDescription = (event) => {
    setjobDescription(event.target.value);
  };
  const handlejobRequirement = (event) => {
    setjobRequirement(event.target.value);
  };
  const handleskills = (event) => {
    setskills(event.target.value);
  };

  // handle job submission
  const handlesubmit = (e) => {
    e.preventDefault();
    // if (companyName &
    const jobData = new FormData();
    jobData.append('companyName', companyName);
    jobData.append('filed', filed);
    jobData.append('location', location);
    jobData.append('file', file);
    jobData.append('aboutCompany', aboutCompany);
    jobData.append('position', position);
    jobData.append('jobType', jobType);
    jobData.append('jobStateOption', jobStateOption);
    jobData.append('salaryFrom', salaryFrom);
    jobData.append('salaryTo', salaryTo);
    jobData.append('currency', currency);
    jobData.append('jobDescription', jobDescription);
    jobData.append('jobRequirement', jobRequirement);
    jobData.append('skills', skills);
    // dispatch(adminCreateNewJob(jobData));
    // toast.success("hello")
  };

  return (
    <div className="FormSection">
      
      <form action="#/">
        <div className="row">
          <div className="col-lg-7 col-sm-12">
            <div>
              <label>Company Name</label> <br />
              <input type="text" />
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <label>Filed</label> <br />
                <select>
                  <option></option>
                  <option>2</option>
                  <option>1</option>
                  <option>13</option>
                </select>
              </div>
              <div className="col-lg-6 col-sm-12">
                <label>Location</label> <br />
                <select>
                  <option></option>
                  <option>2</option>
                  <option>1</option>
                  <option>13</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12">
            <div>
              <div>
                <input
                  type="file"
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                />
                <button onClick={handleButtonClick} className="BtnUpload">
                  <div className="shape-upload">
                    {' '}
                    <FaCloudUploadAlt />
                  </div>
                  <h3>
                    Drag & drop files or <a href="/#"> Browse</a>
                  </h3>
                  <p>
                    Supported formates PNG, JPEG, GIF, MP4,PDF,PSD, AI Word, PPT
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-12 col-sm-12 mb-5">
          <label>About the Company</label>
          <input type="text" style={{ height: '95px' }} />
        </div>

        <div className="row ">
          <div className="col-lg-5 col-sm-12">
            <label>Position</label>
            <input type="text" />
          </div>
          <div className=" row col-lg-4 col-sm-12 JobType">
            <label>Job Type</label>
            <div className="d-flex align-items-center gap-2 ">
              <div>
                <input type="radio" />
              </div>
              <div className="mt-2">
                <label>Remote</label>
              </div>
              <div>
                <input type="radio" />
              </div>
              <div className="mt-2">
                <label>On Site</label>
              </div>
            </div>
          </div>

          {/* <div className="col-lg-3 col-sm-12">
            <div className="d-flex align-items-center gap-2 h-100">
              <div>
                <input type="radio" />
              </div>
              <div className="mt-2">
                <label>Remote</label>
              </div>
              <div>
                <input type="radio" />
              </div>
              <div className="mt-2">
                <label>On Site</label>
              </div>
            </div>
          </div> */}
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-6">
            <label>Salary Range</label> <br />
            <div className="d-flex align-items-center">
              <input type="text" />
              <p className=" mx-2">To</p>
              <input type="text" />
            </div>
          </div>
          {/* <div className="col-lg-3 col-sm-4 ">
            <label></label> <br />
            <div>
              <input type="text" />
            </div>
          </div> */}
          <div className="col-lg-3 col-sm-4">
            <label>Currency</label> <br />
            <div>
              <select>
                <option></option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <div className="col-lg-12 col-sm-12 ">
            <label>Job Description </label>
            <input type="text" style={{ height: '95px' }} />
          </div>
        </div>

        <div>
          <div className="col-lg-12 col-sm-12 ">
            <label>Job Requriement</label>
            <input type="text" style={{ height: '95px' }} />
          </div>
        </div>

        <div>
          <div className="col-lg-12 col-sm-12 ">
            <label>Skills</label>
            <input type="text" style={{ height: '60px' }} />
          </div>
        </div>

        <div className="row TwoButton">
          <div className=" col-md-2 col-sm-12">
            <button className="BtnOne">
              <a href="#/">Cancel</a>
            </button>
          </div>
          <div className=" col-md-2 col-sm-12">
            <button>
              <a href="#/">Save</a>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};



export default AdminCreateJobForm