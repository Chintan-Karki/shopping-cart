import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

const Movie = ({ movieData }) => {
	return (
		<div className="movie">
			<div className="movie-img">
				<img
					className="movie__image"
					src={movieData.image}
					alt={movieData.title}
				/>
			</div>
			<div className="movie__details">
				<Link to={`/movie/someID`}>
					<p className="details__title">{movieData.title}</p>
					<p className="details__desc">{movieData.description}</p>
				</Link>
				<p className="details__price">${movieData.price}</p>
			</div>

			<div className="movie__buttons">
				<button className="buttons__btn buttons__add">Add To Cart</button>
			</div>
		</div>
	);
};

export default Movie;
