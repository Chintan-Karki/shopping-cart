import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import {
	loadSelectedGenre,
	filterMoviesByDate,
} from "../../redux/Shopping/shopping-actions";
import "./Filters.css";

function Filters({ loadSelectedGenre, filterMoviesByDate }) {
	let [genres, setGenres] = useState([]);

	let [startDate, setStartDate] = useState();
	let [endDate, setEndDate] = useState();

	useEffect(() => {
		const fetchGenres = async () => {
			const resp = await fetch(
				`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
			);
			const data = await resp.json();
			setGenres([...data.genres]);
		};
		fetchGenres();
	}, []);

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
			<aside className="Filters">
				{genres.map((genre) => (
					<button
						key={genre.id}
						className="FilterBtn"
						onClick={() => loadSelectedGenre(genre.id)}
					>
						{genre.name}
					</button>
				))}
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
						<button className="filter-by-date" type="submit">
							Filter by date
						</button>
					</form>
				</div>
			</aside>
		</>
	);
}

// connect

const mapDispatchToProps = (dispatch) => {
	return {
		loadSelectedGenre: (genreID) => dispatch(loadSelectedGenre(genreID)),
		filterMoviesByDate: (startDate, endDate) =>
			dispatch(filterMoviesByDate(startDate, endDate)),
	};
};

export default connect(null, mapDispatchToProps)(Filters);
