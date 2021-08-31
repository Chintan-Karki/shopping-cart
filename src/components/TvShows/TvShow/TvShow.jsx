import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
	addToCart,
	loadCurrentItem,
} from "../../../redux/Shopping/shopping-actions";
import "../../Movies/Movie/Movie.css";

function TvShow({ tvShowData, addToCart, loadCurrentItem }) {
	return (
		<div className="movie">
			<img
				className="movie__image"
				src={tvShowData.image}
				alt={tvShowData.title}
			/>
			<div className="movie__details">
				<Link to={`/movie/${tvShowData.id}`}>
					<p
						onClick={() => loadCurrentItem(tvShowData)}
						className="details__title"
						title={tvShowData.title}
					>
						{tvShowData.title.length >= 24
							? tvShowData.title.substring(0, 23) + ".."
							: tvShowData.title}
					</p>
				</Link>
				<p
					// onClick={() => loadCurrentItem(tvShowData)}
					className="details__desc"
				>
					{tvShowData.description !== ""
						? tvShowData.description.substring(0, 100) + "..."
						: "Description not found 😣"}
				</p>
				<p className="details__price">${tvShowData.price}</p>
			</div>

			<div className="movie__buttons">
				<button
					onClick={() => addToCart(tvShowData.id)}
					className="buttons__add"
				>
					Add To Cart
				</button>
			</div>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (id) => dispatch(addToCart(id)),
		loadCurrentItem: (tvShowData) => dispatch(loadCurrentItem(tvShowData)),
	};
};

export default connect(null, mapDispatchToProps)(TvShow);
