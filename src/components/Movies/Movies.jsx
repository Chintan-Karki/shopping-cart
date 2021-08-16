import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import "./Movies.css";

import { connect } from "react-redux";

import Movie from "./Movie/Movie";
import { loadTmdbMovies } from "../../redux/Shopping/shopping-actions";

const Products = ({ movies, loadMovies }) => {
	const [dataSet, setDataSet] = useState([]);
	const [value, setValue] = useState("");
	const [query, setQuery] = useState(value);

	useEffect(() => {
		requestMovies();
	}, [query, setQuery]);

	async function requestMovies() {
		const API_KEY = process.env.REACT_APP_API_KEY;
		const res = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${
				query === "" ? "Avengers" : query
			}`
		);
		const json = await res.json();
		const moviesData = await json.results;
		const newDataSet = [];
		moviesData.forEach((item) => {
			newDataSet.push({
				id: item.id,
				title: item.original_title,
				description: item.overview,
				image: `https://image.tmdb.org/t/p/original${item.poster_path}`,
				price: 10.0,
			});
		});
		setDataSet([...newDataSet]);
		loadMovies(newDataSet);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setQuery(value);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					value={value}
					placeholder="e.g. Avengers"
					onChange={(e) => setValue(e.target.value)}
				/>
				<input type="submit" value="Submit" />
			</form>
			<div className="movies">
				{movies.length !== 0 ? (
					movies.map((movie) => <Movie key={movie.id} movieData={movie} />)
				) : (
					<Loader
						type="BallTriangle"
						color="#79531a"
						height={100}
						width={100}
					/>
				)}
			</div>
		</>
	);
};

// export default Products;

const mapStateToProps = (state) => {
	return {
		movies: state.shop.movies,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadMovies: (movies) => dispatch(loadTmdbMovies(movies)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
