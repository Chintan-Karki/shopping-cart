import React, { useEffect } from "react";
import "./Movies.css";
import { connect } from "react-redux";
import { moviesList } from "../../redux/Shopping/movieDB";

import Movie from "./Movie/Movie";

const Products = ({ movies }) => {
	useEffect(() => {
		requestMovies();
	}, []);

	async function requestMovies() {
		const API_KEY = process.env.REACT_APP_API_KEY;
		const res = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=avengers`
		);
		const json = await res.json();
		const moviesData = json.results;
		console.log(moviesData);
	}
	return (
		<div className="movies">
			{movies.map((movie) => (
				<Movie key={movie.id} movieData={movie} />
			))}
		</div>
	);
};

// export default Products;

const mapStateToProps = (state) => {
	return {
		movies: state.shop.movies,
	};
};

export default connect(mapStateToProps)(Products);
