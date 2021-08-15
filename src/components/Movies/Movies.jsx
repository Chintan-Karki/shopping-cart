import React, { useState } from "react";
import "./Movies.css";
// import { connect } from "react-redux";
import { moviesList } from "../../redux/Shopping/movieDB";

import Movie from "./Movie/Movie";

const Products = () => {
	const [movies, setMovies] = useState(moviesList);
	return (
		<div className="movies">
			{movies.map((movie) => (
				<Movie key={movie.id} movieData={movie} />
			))}
		</div>
	);
};

export default Products;

// const mapStateToProps = (state) => {
// 	return {
// 		movies: state.shop.movies,
// 	};
// };

// export default connect(mapStateToProps)(Products);
