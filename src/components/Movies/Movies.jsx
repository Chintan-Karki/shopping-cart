import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import "./Movies.css";

import { connect } from "react-redux";

import Movie from "./Movie/Movie";
import { loadTmdbMovies } from "../../redux/Shopping/shopping-actions";

const Products = ({ movies, loadMovies }) => {
	const [query, setQuery] = useState("");
	const [value, setValue] = useState("");

	useEffect(() => {
		async function requestMovies() {
			const API_KEY = process.env.REACT_APP_API_KEY;
			const res = await fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${
					query === "" ? "Avengers" : query
				}`
			);
			const json = await res.json();
			const moviesData = json.results;

			let newDataSet = [];
			moviesData.forEach((item) => {
				newDataSet.push({
					id: item.id,
					title: item.original_title,
					description: item.overview,
					image: `https://image.tmdb.org/t/p/original${item.poster_path}`,
					price: 20,
				});
			});
			loadMovies(newDataSet);
		}
		requestMovies();
	}, [query]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setQuery(value);
	};

	return (
		<>
			<div className="movies">
				<form className="movies-form" onSubmit={handleSubmit}>
					<input
						className="movies-form-search"
						type="text"
						name="name"
						value={value}
						placeholder="e.g. Avengers"
						onChange={(e) => {
							setValue(e.target.value);
						}}
					/>
					<input className="movies-form-submit" type="submit" value="SEARCH" />
				</form>
				{movies.length !== 0 ? (
					movies.map((movie) => <Movie key={movie.id} movieData={movie} />)
				) : (
					<Loader
						type="BallTriangle"
						color="#79531a"
						height={100}
						width={100}
						timeout={3000}
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
