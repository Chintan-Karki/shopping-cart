import React from "react";
import "./selectionBar.css";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
	loadTmdbMovies,
	loadTvShows,
} from "../../../redux/Shopping/shopping-actions";

function SelectionBar({ loadTvShows, loadMovies }) {
	return (
		<div className="button--container">
			<Link to="/">
				<p className="selectionBtn" onClick={loadMovies}>
					Movies <i className="uil uil-film"></i>
				</p>
			</Link>
			<p className="bar"> | </p>
			<Link to="/tv-shows">
				<p className="selectionBtn" onClick={loadTvShows}>
					TV Shows <i className="uil uil-tv-retro"></i>
				</p>
			</Link>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadTvShows: () => dispatch(loadTvShows()),
		loadMovies: () => dispatch(loadTmdbMovies("")),
	};
};

export default connect(null, mapDispatchToProps)(SelectionBar);
