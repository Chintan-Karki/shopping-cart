import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadTvShows } from "../../redux/Shopping/shopping-actions";
import Loader from "react-loader-spinner";

import TvShow from "./TvShow/TvShow";
import SelectionBar from "../NavBar/selectionBar/selectionBar";

import "../Movies/Movies.css";

function TvShows({ tvShows, loadTvShows }) {
	useEffect(() => {
		loadTvShows();
		//eslint-disable-next-line
	}, []);

	return (
		<>
			<SelectionBar />
			<h1
				className="tv-title"
				style={{ textAlign: "center", marginBottom: "1.2rem" }}
			>
				Popular TV Shows
			</h1>

			<div className="movies">
				{tvShows.length !== 0 ? (
					tvShows.map((tvShow) => (
						<TvShow key={tvShow.id} tvShowData={tvShow} />
					))
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
}

const mapStateToProps = (state) => {
	return {
		tvShows: state.shop.tvShows,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadTvShows: () => dispatch(loadTvShows()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TvShows);
