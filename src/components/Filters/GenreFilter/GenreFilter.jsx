import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loadSelectedGenre } from "../../../redux/Shopping/shopping-actions";

const GenreFilter = ({ loadSelectedGenre }) => {
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
			{genres.map((genre) => (
				<button
					key={genre.id}
					className="FilterBtn"
					onClick={() => loadSelectedGenre(genre)}
				>
					{genre.name}
				</button>
			))}
		</>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadSelectedGenre: (genre) => dispatch(loadSelectedGenre(genre)),
	};
};

export default connect(null, mapDispatchToProps)(GenreFilter);
