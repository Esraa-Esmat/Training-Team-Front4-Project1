import './adminPanelStyle.css'
// import './admin-jobs-global.css';
// import JobListContainer from '../../../Components/AdminPanal/AdminJobs/JobListContainer';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SideBarAdmin from '../../Components/AdminPanal/AdminGlobal/SideBar/AdminSideBar';
import TopBarAdmin from '../../Components/AdminPanal/AdminGlobal/TopBarAdmin';
import AdminListPagination from '../../Components/AdminPanal/AdminGlobal/AdminListPagination';
import HeaderTitle from '../../Components/Global/HeaderTitle';
import AdminPanelJobs from './AdminPanelJob/AdminPanelJobs';
import AdminPanelUsers from './AdminPanelUsers/AdminPanelUsers';
import AdminPanelArticle from './AdminPanelArticle/AdminPanelArticle';
import AdminPanelCourses from './AdminPanelCourses/AdminPanelCourses';

function AdminPanel() {
	// console.log("in Admin panel ");
	const titleSideBar = useSelector((state) => state.AdminSlice.titleSideBar);

	let componentToRender;
	let path;

	switch (titleSideBar) {
		case 'Users':
			componentToRender = <AdminPanelUsers />;
			path = '/adminpanel/createnewuser'
			break;

		case 'Articles':
			componentToRender = <AdminPanelArticle />;
			path = '/adminpanel/admincreatearticle'
			break;

		case 'Jobs':
			componentToRender = <AdminPanelJobs />;
			path = '/adminpanel/createnewjob'
			break;

		case 'Courses':
			componentToRender = <AdminPanelCourses />;
			path = '/adminpanel/createnewcourses'
			break;

		default:

			break;
	}

	return (
		<>
			<div className="container">
				<HeaderTitle title={'Admin Panel'} />
			</div>

			<div className="container d-flex flex-column gap-4 my-4 mt-3">
				{/* create new job button ---------------------- */}
				{/* <AdminButtonHeader buttonTitle={`create new ${titleSideBar}`} /> */}
				<div className="col align-self-lg-end px-3 mb-5 mb-lg-0 order-last order-lg-first">
					<Link
						className="btn btn-primary btn-block py-2 px-lg-5 w-100 fs-5"
						to={path}
					>
						{`create new ${titleSideBar}`}
					</Link>
				</div>

				{/* Sidebar and right table -------------------------*/}
				<div className="row gx-5">
					<div className="col-12 col-xl-3">
						<SideBarAdmin />
						<TopBarAdmin />
					</div>
					<div className="col-12 col-xl-9">
						{componentToRender}
						<AdminListPagination />
					</div>
				</div>
			</div>
		</>
	);
}

export default AdminPanel;
