import React from "react";
import "./CartItem.css";

const CartItem = () => {
	return (
		<div className="cartItem">
			<img
				className="cartItem__image"
				src="https://images.indianexpress.com/2021/08/The-Suicide-Squad-review-1200.jpg"
				alt=""
			/>
			<div className="cartItem__details">
				<p className="details__title">The Suicide Squad</p>
				<p className="details__desc">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
					cupiditate quod, ad odit, alias dolore, quam facilis repellat
					voluptates cumque blanditiis. Doloribus, in. Odio voluptatum incidunt
					nobis omnis laborum nisi.
				</p>
				<p className="details__price">$ 10.00</p>
			</div>
			<div className="cartItem__actions">
				<div className="cartItem__qty">
					<label htmlFor="qty">Qty</label>
					<input min="1" type="number" id="qty" name="qty" value="1" />
				</div>
				<button className="actions__deleteItemBtn">
					<img
						src="https://image.flaticon.com/icons/svg/709/709519.svg"
						alt=""
					/>
				</button>
			</div>
		</div>
	);
};

export default CartItem;
