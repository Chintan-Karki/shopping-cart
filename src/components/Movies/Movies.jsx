import React, { useState, useEffect } from "react";
import "./Movies.css";

import { connect } from "react-redux";

import Movie from "./Movie/Movie";
import { loadTmdbMovies } from "../../redux/Shopping/shopping-actions";

const Products = ({ movies, loadMovies }) => {
	const [dataSet, setDataSet] = useState([]);

	useEffect(() => {
		requestMovies();
		loadMovies(dataSet);
	}, [dataSet, loadMovies]);

	async function requestMovies() {
		const API_KEY = process.env.REACT_APP_API_KEY;
		const res = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=avengers`
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
	}
	return (
		<>
			<div className="movies">
				{movies.length !== 0 ? (
					movies.map((movie) => <Movie key={movie.id} movieData={movie} />)
				) : (
					<h1>Loading..</h1>
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
