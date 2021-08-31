import React from "react";

import DateFilter from "./DateFilter/DateFilter";
import GenreFilter from "./GenreFilter/GenreFilter";
import UpcomingFilter from "./UpcomingFilter/UpcomingFilter";

import "./Filters.css";

function Filters() {
	return (
		<>
			<aside className="Filters">
				<GenreFilter />
				<DateFilter />
				<UpcomingFilter />
			</aside>
		</>
	);
}

export default Filters;
