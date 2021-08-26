import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { loadSelectedGenre } from "../../redux/Shopping/shopping-actions";
import "./Filters.css";

function Filters({ loadSelectedGenre }) {
	let [genres, setGenres] = useState([]);

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
			</aside>
		</>
	);
}

// connect

const mapDispatchToProps = (dispatch) => {
	return {
		loadSelectedGenre: (genreID) => dispatch(loadSelectedGenre(genreID)),
	};
};

export default connect(null, mapDispatchToProps)(Filters);
