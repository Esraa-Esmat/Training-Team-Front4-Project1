import React from 'react'

const JobSideBar = () => {
  return (
    <div className="text-white w-100 rounded overflow-hidden " style={{ maxWidth: "700px" }}>
        <div className="p-4 row p-25" style={{ backgroundColor: "rgb(0, 0, 0,0.3)", }}>
          <div className="d-flex px-4 py-2 justify-content-between rounded" style={{ backgroundColor: "rgb(0, 0, 0,0.3)", }}>
            <div className="">
              <h2>
                <a href="#" className="text-decoration-none fs-4 text-white">
                  Filters
                </a>
              </h2>
            </div>
            <div className="mt-3 cursor-pointer">
              <h6 className="nobreak" style={{ color: "#bf9b30", }}>
                Clear All
              </h6>
            </div>
          </div>
          <div className="justify-content-between p-4 m-auto mt-4 ">
            <div className="">
              <h6>location</h6>
            </div>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-secondary w-100 dropdown-toggle mt-2 custome-button"
                data-bs-toggle="dropdownMenuButton"
                style={{
                  textAlign: "left",
                  fontSize: "18px",
                  backgroundColor: "rgb(255, 255, 255,0.1)",
                }}
              >
                Cairo
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Normal
                  </a>
                </li>
                <li>
                  <a className="dropdown-item active" href="#">
                    Active
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="#">
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-5 pt-5">
              <h6>Job Type</h6>
            </div>
            <div className="dropdown  ml-1 col-12 justify-content-between  ">
              <div className="form-check ">
                <input
                  type="checkbox"
                  className="form-check-input "
                  style={{ backgroundColor: " rgb(49, 49, 49)" }}
                  id="check1"
                />
                <label className="form-check-label" for="check1">
                  Full Type
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  style={{ backgroundColor: " rgb(206, 164, 26)" }}
                  id="check2"
                  checked
                />
                <label className="form-check-label" for="check2">
                  Part Type
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  style={{ backgroundColor: "rgb(49, 49, 49)" }}
                />
                <label className="form-check-label">Remote</label>
              </div>
            </div>
            <div className="col-5 pt-5">
              <h6>Level</h6>
            </div>
            <div className="dropdown  ml-1 col-12 justify-content-between  ">
              <div className="form-check ">
                <input
                  type="checkbox"
                  className="form-check-input "
                  style={{
                    backgroundColor: "rgb(49, 49, 49)",
                  }}
                  id="check1"
                />
                <label className="form-check-label" for="check1">
                  Entry Level
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  style={{
                    backgroundColor: " rgb(206, 164, 26)",
                  }}
                  id="check2"
                  checked
                />
                <label className="form-check-label" for="check2">
                  Intermediate
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  style={{
                    backgroundColor: "rgb(49, 49, 49)",
                  }}
                />
                <label className="form-check-label">Expert</label>
              </div>
            </div>
            <div className="col-5 pt-5">
              <h6>Salary Range</h6>
            </div>
            <div
              className="dropdown  ml-1 col-12 justify-content-between"
              style={{ height: "150px" }}
            >
              <div className="form-check ">
                <input
                  type="checkbox"
                  className="form-check-input "
                  style={{
                    backgroundColor: "rgb(49, 49, 49)",
                  }}
                  id="check1"
                />
                <label className="form-check-label" for="check1">
                  Under 4000 EGP
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  style={{
                    backgroundColor: "rgb(206, 164, 26)",
                  }}
                  id="check2"
                  checked
                />
                <label className="form-check-label" for="check2">
                  Between 4000 & 10000 EGP
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  style={{
                    backgroundColor: "rgb(49, 49, 49)",
                  }}
                />
                <label className="form-check-label">More Than 10000 EGP</label>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default JobSideBar