import React from "react";
import "./SingleItem.css";

const SingleItem = () => {
	return (
		<div className="singleItem">
			<img
				className="singleItem__image"
				src="https://images.indianexpress.com/2021/08/The-Suicide-Squad-review-1200.jpg"
				alt="Poster"
			/>
			<div className="singleItem__details">
				<p className="details__title">The Suicide Squad</p>
				<p className="details__description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quasi ab
					sapiente! Eligendi id od Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Labore nihil id vel magni accusamus minus
					consequatur dolorum, fugiat mollitia officia incidunt velit, saepe
					ipsum repellendus quaerat quos debitis? Non, incidunt!
				</p>
				<p className="details__price">$ 10.00</p>

				<button className="details__addBtn">Add To Cart</button>
			</div>
		</div>
	);
};

export default SingleItem;
