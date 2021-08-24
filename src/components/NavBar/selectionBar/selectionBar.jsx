import React from "react";
import "./selectionBar.css";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
	loadTmdbMovies,
	loadTvShows,
	loadUpcoming,
} from "../../../redux/Shopping/shopping-actions";

function SelectionBar({ loadTvShows, loadUpcoming, loadMovies }) {
	return (
		<div className="button--container">
			<Link to="/">
				<button onClick={loadMovies}>
					Movies <i className="uil uil-film"></i>
				</button>
			</Link>
			<Link to="/tv-shows">
				<button onClick={loadTvShows}>
					TV Shows <i className="uil uil-tv-retro"></i>
				</button>
			</Link>
			<Link to="/">
				<button onClick={loadUpcoming}>
					Upcoming <i className="uil uil-ticket"></i>
				</button>
			</Link>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadTvShows: () => dispatch(loadTvShows()),
		loadUpcoming: () => dispatch(loadUpcoming()),
		loadMovies: () => dispatch(loadTmdbMovies("")),
	};
};

export default connect(null, mapDispatchToProps)(SelectionBar);
