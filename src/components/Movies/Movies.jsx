import React from "react";
import "./Movies.css";
import { connect } from "react-redux";

import Movie from "./Movie/Movie";

const Products = ({ movies }) => {
	return (
		<div className="movies">
			{movies.map((movie) => (
				<Movie key={movie.id} movieData={movie} />
			))}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		movies: state.shop.movies,
	};
};

export default connect(mapStateToProps)(Products);


