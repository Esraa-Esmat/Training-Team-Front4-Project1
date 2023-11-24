import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home/homePage';
import InstructorPortalPage from './Pages/InstructorPortal/instructorPortalPage';
import StudentPortalPage from './Pages/StudentPortal/StudentPortalPage';
import MainCreateCV from './Pages/CreateCV/MainCreateCV';
import MainInformation1Form from './Components/CreateCV/MainInformation1Form';
import Summary2Form from './Components/CreateCV/Summary2Form';
import Skills3Form from './Components/CreateCV/Skills3Form';
import HonersAndAwards6Form from './Components/CreateCV/HonersAndAwards6Form';
import Experience4Form from './Components/CreateCV/Experience4Form';
import Education5Form from './Components/CreateCV/Education5Form';
import Links8Form from './Components/CreateCV/Links8Form';
import HobbiesAndInterests7Form from './Components/CreateCV/HobbiesAndInterests7Form';
import LoginPage from './Pages/Auth/loginPage';
import TopHeader from './Components/Global/Header/TopHeader';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import DetailsArticle from './Pages/Home/DetailsArticle';
import NavBar from './Components/Global/Header/NavBar';
import { useSelector } from 'react-redux';
import PalestineHeader from './Components/Global/Header/PalestineHeader';
import AllJobsPage from "./Pages/JobsPage/AllJobs/AllJobsPage"
import AdminPanel from './Pages/AdminPanel/AdminPanel';
import AdminCreateArticle from './Pages/AdminPanel/AdminPanelArticle/AdminCreateArticle';
import JobOffer from './Components/Jobs/JobOffer';
import JobDetails from './Components/Jobs/JobDetails';
import JobApply from './Components/Jobs/JobApply';
import AdminCreateCourses from './Pages/AdminPanel/AdminPanelCourses/AdminCreateCourses/AdminCreateCourses';
import AdminCreateJob from './Pages/AdminPanel/AdminPanelJob/AdminCreateJob/AdminCreateJob';
import AdminCreateUsers from './Pages/AdminPanel/AdminPanelUsers/AdminCreateUsers/AdminCreateUsers';

function App() {
	const login = useSelector((state) => state.UserSlice.login);
	const userRole = useSelector((state) => state.UserSlice.userRole);

	return (
		<div className="App">
			<ToastContainer />

			<Routes>
				{/* ------------------------- Auth routes  -----------------------------------------*/}
				{!login && <Route path="/auth/login" element={<LoginPage />} />}

				{/* ------------------------- /Auth routes  -----------------------------------------*/}

				{/* ------------------------- Common routes -----------------------------------------*/}

				<Route
					path="/*"
					element={
						<>
							<PalestineHeader />

							<TopHeader />
							<NavBar />
						</>
					}
				/>
			</Routes>
			{/* ------------------------- /Common routes -----------------------------------------*/}

			<Routes>
				{/* ------------------------- Article  -----------------------------------------*/}

				<Route path="/" element={<HomePage />} />
				<Route path="/article/:id" element={<DetailsArticle />} />
				{/* ------------------------- /Article  -----------------------------------------*/}

				{/* ------------------------- Portals  -----------------------------------------*/}

				{login && userRole === 'instructor' && <Route path="/instructor" element={<InstructorPortalPage />} />}
				{login && userRole === 'student' && <Route path="/student" element={<StudentPortalPage />} />}

				{login && userRole === 'admin' &&
					<Route path="/adminpanel" element={<AdminPanel />} />}
			
				<Route path='/adminpanel/createnewuser' element={<AdminCreateUsers />} />
				<Route path='/adminpanel/admincreatearticle' element={<AdminCreateArticle />} />
				<Route path='/adminpanel/createnewjob' element={<AdminCreateJob />} />
				<Route path='/adminpanel/createnewcourses' element={<AdminCreateCourses />} />


				{/* ------------------------- /Portals  -----------------------------------------*/}

				<Route path="/AllJobsPage" element={<AllJobsPage />}>
					<Route index element={<JobOffer/>}/>
					<Route path='details' element={<JobDetails/>}/>
					<Route path='apply' element={<JobApply/>}/>
				</Route>
				{/* ------------------------- create cv -----------------------------------------*/}

				<Route path="/jobs/create-cv/" element={<MainCreateCV />}>
					{/* redirect to first route -------------------------------- */}
					<Route
						index
						element={<Navigate replace to="/jobs/create-cv/main-information" />}
					/>
					<Route path="main-information" element={<MainInformation1Form />} />
					<Route path="summary" element={<Summary2Form />} />
					<Route path="skills" element={<Skills3Form />} />
					<Route path="honers-and-awards" element={<HonersAndAwards6Form />} />
					<Route
						path="hobbies-and-interests"
						element={<HobbiesAndInterests7Form />}
					/>
					<Route path="experience" element={<Experience4Form />} />
					<Route path="education" element={<Education5Form />} />
					<Route path="links" element={<Links8Form />} />
				</Route>
				{/* ------------------------- /create cv -----------------------------------------*/}

			</Routes>
		</div>
	);
}

export default App;
