import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./Cart.css";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		let items = 0;
		let price = 0;

		cart.forEach((item) => {
			items += item.qty;
			price += item.qty * item.price;
		});

		setTotalPrice(price);
		setTotalItems(items);
	}, [cart, totalPrice, setTotalPrice, totalItems, setTotalItems]);

	return (
		<div>
			{cart.length > 0 ? (
				<div className="cart">
					<div className="cart__items">
						{cart.map((item) => (
							<CartItem key={item.id} itemData={item} />
						))}
					</div>
					<div className="cart__summary">
						<h4 className="summary__title">Cart Summary</h4>
						<div className="summary__price">
							<span>TOTAL: ({totalItems} items)</span>
							<span>$ {totalPrice}</span>
						</div>
						<button className="summary__checkoutBtn">
							Proceed To Checkout
						</button>
					</div>
				</div>
			) : (
				<div className="emptyCart">
					<p>Oops, there are no items in your cart</p>
					<i className="uil uil-shopping-cart"></i>
				</div>
			)}
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		cart: state.shop.cart,
	};
};

export default connect(mapStateToProps)(Cart);
