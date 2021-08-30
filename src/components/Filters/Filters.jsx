import React from "react";
import DateFilter from "./DateFilter/DateFilter";
import "./Filters.css";
import GenreFilter from "./GenreFilter/GenreFilter";
import UpcomingFilter from "./UpcomingFilter/UpcomingFilter";

function Filters({ loadUpcoming }) {
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
