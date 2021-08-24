import React from "react";
import "./TvShow.css";

export default function TvShow({ tvShowData }) {
	return (
		<div className="movie">
			<div className="movie-img">
				<img
					className="movie__image"
					src={tvShowData.image}
					alt={tvShowData.title}
				/>
			</div>
			<div className="movie__details">
				<p
					// onClick={() => loadCurrentItem(tvShowData)}
					className="details__title"
				>
					{tvShowData.title}
				</p>
				<p
					// onClick={() => loadCurrentItem(tvShowData)}
					className="details__desc"
				>
					{tvShowData.description !== ""
						? tvShowData.description.substring(0, 200) + "..."
						: "Description not found"}
				</p>
				<p className="details__price">${tvShowData.price}</p>
			</div>

			<div className="movie__buttons">
				{/* <button
					onClick={() => addToCart(movieData.id)}
					className="buttons__add"
				>
					Add To Cart
				</button> */}
			</div>
		</div>
	);
}
