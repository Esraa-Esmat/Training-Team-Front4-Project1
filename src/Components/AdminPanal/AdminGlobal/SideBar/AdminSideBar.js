import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminSideBarData } from './AdminSideBarData';
import { setselectedContent, settitleSideBar } from "../../../../Redux/Reducers/AdminSlice"
import { useDispatch, useSelector } from 'react-redux';


function SideBarAdmin() {
	const titleSideBar = useSelector((state) => state.AdminSlice.titleSideBar);
	const selectedContent = useSelector((state) => state.AdminSlice.selectedContent);
	const dispatch = useDispatch();
	const [activeLink, setActiveLink] = useState('');

	const handleSelectTitle = (title) => {
		setActiveLink(title);
		if (title === 'Jobs' || title === 'Users' || title === 'Courses') {
			dispatch(setselectedContent(''));
		}

		dispatch(settitleSideBar(title));
	};
	const handleSelectContent = (content, title) => {
		if (titleSideBar == title) {
			dispatch(setselectedContent(content));
		}
		// console.log(selectedContent);
	}

	return (
		<div className="bg-black bg-opacity-25 rounded text-capitalize p-3 d-none d-xl-block">
			{AdminSideBarData &&
				AdminSideBarData.map((section, i) => (
					<div key={i}>
						<Link
							className="d-block bg-black bg-opacity-25 rounded fw-bold py-3 px-4"
							// to='/adminpanel'
							onClick={() => handleSelectTitle(section.title)}
						>
							{section.title}
						</Link>
						<ul className="list-unstyled px-4 link-info line_height-2 mt-3 mb-5">
							{/*  						{settitleSideBar == section.title && { */}

							{section.content.map((sub, j) => (
								<li key={j}>
									<h6
										className={`text-light active-scale clickable ${(titleSideBar === section.title && activeLink === sub) ? 'active' : ''
											}`}
										style={{ transformOrigin: 'left' }}
										onClick={() => handleSelectContent(sub, section.title)}									>

										{sub}
									</h6>
								</li>
							))}
						</ul>
					</div>
				))}
		</div>
	);
}

export default SideBarAdmin;
