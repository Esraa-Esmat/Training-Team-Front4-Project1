import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const AdminButtonHeader = ({ buttonTitle }) => {
	// const titleSideBar =/ useSelector((state) => state.AdminSlice.titleSideBar);

    let componentToRender;

	switch (buttonTitle) {
		case 'Articles':
			componentToRender = 'createnewarticle'
			break;

		case 'Users':
			// componentToRender = <AdminPanelArticle />;
			break;

		case 'Jobs':
			// componentToRender = <AdminPanelJobs />;
			break;

		case 'Courses':
			// componentToRender = <AdminPanelCourses/>;
			break;

		default:
			// componentToRender = <AdminPanelJobs/>;
			break;
	}
    return (
        <div className="col align-self-lg-end px-3 mb-5 mb-lg-0 order-last order-lg-first">
            <Link
                className="btn btn-primary btn-block py-2 px-lg-5 w-100 fs-5"
                to={`/adminpanel/${componentToRender}`}
            >
                {buttonTitle}
            </Link>
        </div>)
}

export default AdminButtonHeader