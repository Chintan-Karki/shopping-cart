import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
	addToCart,
	loadCurrentItem,
} from "../../../redux/Shopping/shopping-actions";

import "./Movie.css";

const Movie = ({ movieData, addToCart, loadCurrentItem }) => {
	return (
		<article
			className="movie"
			style={{
				justifyContent: "center",
				marginLeft: "12px",
			}}
		>
			<img
				className="movie__image"
				src={movieData.image}
				alt={movieData.title}
			/>
			<div className="movie__details">
				<Link to={`/movie/${movieData.id}`}>
					<p
						onClick={() => loadCurrentItem(movieData)}
						className="details__title"
						title={movieData.title}
					>
						{movieData.title.length >= 29
							? movieData.title.substring(0, 29) + ".."
							: movieData.title}
					</p>
				</Link>
				<p onClick={() => loadCurrentItem(movieData)} className="details__desc">
					{movieData.description !== ""
						? movieData.description.substring(0, 100) + "..."
						: "Description not found"}
				</p>

				<p className="details__price">${movieData.price}</p>
			</div>

			<div className="movie__buttons">
				<button
					onClick={() => addToCart(movieData.id)}
					className="buttons__add"
				>
					Add To Cart
				</button>
			</div>
		</article>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (id) => dispatch(addToCart(id)),
		loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
	};
};

export default connect(null, mapDispatchToProps)(Movie);
