import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import "./Movies.css";

import { connect } from "react-redux";

import Movie from "./Movie/Movie";
import { loadTmdbMovies } from "../../redux/Shopping/shopping-actions";
import SelectionBar from "../NavBar/selectionBar/selectionBar";
import Filters from "../Filters/Filters";

const Products = ({ movies, loadMovies, query }) => {
	useEffect(() => {
		loadMovies(query ? query : "");
		// eslint-disable-next-line
	}, [query]);

	return (
		<>
			<SelectionBar />
			<main className="main__container">
				<Filters />

				<section
					className="movies"
					style={{
						justifyContent: "flex-start",
					}}
				>
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
				</section>
			</main>
		</>
	);
};

// export default Products;
const mapStateToProps = (state) => {
	return {
		movies: state.shop.movies,
		query: state.shop.query,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadMovies: (query) => dispatch(loadTmdbMovies(query)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
