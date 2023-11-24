import React from 'react';
import { todayDate } from '../../Config/DateToday';

function HeaderTitle({ title }) {
	return (
		<div className="text-light">
			{/* <h6 className="head-page-title text-capitalize">{title}</h6>
			<h6>{todayDate}</h6> */}
			<aside>{title}</aside>
			{/* <i class="fa-solid fa-igloo"></i> */}
			<div className="line-1 mb-2 mt-1"></div>
			<aside>{todayDate}3</aside>
		</div>
	);
}

export default HeaderTitle;
