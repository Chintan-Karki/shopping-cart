import React from "react";
import "./Cart.css";

import CartItem from "./CartItem/CartItem";

const Cart = () => {
	return (
		<div className="cart">
			<div className="cart__items">
				<CartItem />
			</div>
			<div className="cart__summary">
				<h4 className="summary__title">Cart Summary</h4>
				<div className="summary__price">
					<span>TOTAL: (1 items)</span>
					<span>$ 10.00</span>
				</div>
				<button className="summary__checkoutBtn">
					Proceed To Checkout
				</button>
			</div>
		</div>
	);
};

export default Cart;
