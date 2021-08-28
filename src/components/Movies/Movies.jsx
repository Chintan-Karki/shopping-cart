import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import "./Movies.css";

import { connect } from "react-redux";

import Movie from "./Movie/Movie";
import { loadTmdbMovies } from "../../redux/Shopping/shopping-actions";
import SelectionBar from "../NavBar/selectionBar/selectionBar";
import Filters from "../Filters/Filters";

const Products = ({ movies, loadMovies }) => {
	const [query, setQuery] = useState("");
	const [value, setValue] = useState("");

	useEffect(() => {
		loadMovies(query);
		// eslint-disable-next-line
	}, [query]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setQuery(value);
	};

	return (
		<>
			<SelectionBar />
			<form className="movies-form" onChange={handleSubmit}>
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
				{/* <input className="movies-form-submit" type="submit" value="SEARCH" /> */}
			</form>
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
