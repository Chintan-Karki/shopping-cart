import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";
import "./SingleItem.css";

const SingleItem = ({ currentItem, addToCart }) => {
	return (
		<div className="singleItem">
			<img
				className="singleItem__image"
				src={currentItem.image}
				alt={currentItem.title}
			/>
			<div className="singleItem__details">
				<p className="details__title">{currentItem.title}</p>
				<p className="details__description">{currentItem.description}</p>
				<p className="details__price">$ {currentItem.price}</p>
				<p className="details__lang">
					language: {currentItem.original_language}
				</p>
				<p className="details__release">Released: {currentItem.release_date}</p>
				<button
					className="details__addBtn"
					onClick={() => addToCart(currentItem.id)}
				>
					Add To Cart
				</button>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		currentItem: state.shop.currentItem,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (id) => dispatch(addToCart(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
