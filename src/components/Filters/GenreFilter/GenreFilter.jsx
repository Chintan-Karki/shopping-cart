import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loadSelectedGenre } from "../../../redux/Shopping/shopping-actions";

const GenreFilter = ({ loadSelectedGenre }) => {
	let [genres, setGenres] = useState([]);
	let [active, setActive] = useState();

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

	const handleGenreClick = (genre) => {
		loadSelectedGenre(genre);
		setActive(genre.id);
	};

	return (
		<>
			{genres.map((genre) => (
				<button
					key={genre.id}
					className={active === genre.id ? "FilterBtn active" : "FilterBtn"}
					onClick={() => handleGenreClick(genre)}
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
