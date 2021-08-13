import React, { useState } from "react";
import { connect } from "react-redux";
import {
	removeFromCart,
	adjustQuantity,
} from "../../../redux/Shopping/shopping-actions";
import "./CartItem.css";

const CartItem = ({ itemData, removeFromCart, adjustQuantity }) => {
	const [input, setInput] = useState(itemData.qty);

	const handleQuantityChange = (event) => {
		setInput(event.target.value);
		adjustQuantity(itemData.id, event.target.value);
	};
	return (
		<div className="cartItem">
			<img
				className="cartItem__image"
				src={itemData.image}
				alt={itemData.title}
			/>
			<div className="cartItem__details">
				<p className="details__title">{itemData.title}</p>
				<p className="details__desc">{itemData.description}</p>
				<p className="details__price">${itemData.price}</p>
			</div>
			<div className="cartItem__actions">
				<div className="cartItem__qty">
					<label htmlFor="qty">Qty</label>
					<input
						min="1"
						type="number"
						id="qty"
						name="qty"
						value={itemData.qty}
						onChange={handleQuantityChange}
					/>
				</div>
				<button
					onClick={() => removeFromCart(itemData.id)}
					className="actions__deleteItemBtn"
				>
					<img
						src="https://image.flaticon.com/icons/svg/709/709519.svg"
						alt=""
					/>
				</button>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeFromCart: (id) => dispatch(removeFromCart(id)),
		adjustQuantity: (id, value) => dispatch(adjustQuantity(id, value)),
	};
};

export default connect(null, mapDispatchToProps)(CartItem);
