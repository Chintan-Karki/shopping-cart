import React, { useState } from "react";
import { connect } from "react-redux";
import { filterMoviesByDate } from "../../../redux/Shopping/shopping-actions";

const DateFilter = ({ filterMoviesByDate }) => {
	let [startDate, setStartDate] = useState();
	let [endDate, setEndDate] = useState();

	const handleFilterDateSubmit = (e) => {
		e.preventDefault();
		try {
			filterMoviesByDate(startDate, endDate);
		} catch (error) {
			alert("Please fill both the dates.");
		}
	};

	return (
		<>
			<div className="date-filter">
				<form onSubmit={handleFilterDateSubmit}>
					<span className="calendar">
						<label htmlFor="release-start" className="label from">
							From
						</label>
						<input
							type="date"
							id="release release-start"
							name="release-start"
							className="calendar-input"
							// value={startDateFilter}
							onChange={(e) => setStartDate(new Date(e.target.value))}
						/>
					</span>
					<span className="calendar">
						<label htmlFor="release-end" className="label to">
							To
						</label>
						<input
							type="date"
							id="release release-end"
							name="release-end"
							className="calendar-input"
							// value={endDateFilter}
							onChange={(e) => setEndDate(new Date(e.target.value))}
						/>
					</span>
					<button className="FilterBtn filter-by-date" type="submit">
						Filter
					</button>
				</form>
			</div>
		</>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		filterMoviesByDate: (startDate, endDate) =>
			dispatch(filterMoviesByDate(startDate, endDate)),
	};
};

export default connect(null, mapDispatchToProps)(DateFilter);
