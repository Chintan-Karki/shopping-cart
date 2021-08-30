import React, { useState } from "react";
import { connect } from "react-redux";
import { loadTmdbMovies } from "../../../redux/Shopping/shopping-actions";
import "./searchBar.css";

const SearchBar = ({ loadMovies }) => {
	const [inputValue, setInputValue] = useState("");
	const [query, setQuery] = useState("");

	const handleSearchChange = (e) => {
		e.preventDefault();
		setQuery(e.target.value);
		loadMovies(e.target.value);
	};

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		loadMovies(query);
	};

	return (
		<form
			className="searchBar-form"
			onChange={handleSearchChange}
			onSubmit={handleSearchSubmit}
		>
			<input
				className="searchBar"
				type="text"
				name="name"
				value={inputValue}
				placeholder=" e.g. Avengers"
				onChange={(e) => {
					setInputValue(e.target.value);
				}}
			/>
		</form>
	);
};

const mapDispatchToProps = (dispatch) => {
	return { loadMovies: (query) => dispatch(loadTmdbMovies(query)) };
};

export default connect(null, mapDispatchToProps)(SearchBar);
