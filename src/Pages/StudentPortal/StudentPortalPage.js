import React from 'react';
import HeaderTitle from '../../Components/Global/HeaderTitle';
import '../InstructorPortal/instructorPortalStyle.css';
import StudentPortalData from '../../Components/StudentPortal/StudentPortalData';
import { studentPortalData } from './studentPortalData';

function StudentPortalPage() {
	return (
		<>
			<div className="container my-5">
				<HeaderTitle title={'Student Portal'} />
			</div>
			<section>
				<StudentPortalData data={studentPortalData} user="student" />
			</section>
		</>
	);
}

export default StudentPortalPage;
