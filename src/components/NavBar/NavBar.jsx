import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

import { connect } from "react-redux";
import SelectionBar from "./selectionBar/selectionBar";

const Navbar = ({ cart }) => {
	const [cartCount, setCartCount] = useState(0);

	useEffect(() => {
		let count = 0;
		cart.forEach((item) => {
			count += item.qty;
		});
		setCartCount(count);
	}, [cart, cartCount]);

	return (
		<>
		
		<div className="navbar">
			<Link to="/">
				<h2 className="navbar__logo">Movie Cart</h2>
			</Link>
			<Link to="/cart">
				<div className="navbar__cart">
					<h3 className="cart__title">Cart</h3>
					{/* <img src="../../assets/shopping-cart.svg" alt="cart" /> */}
					<i
						className="cart__image uil uil-shopping-cart-alt"
						alt="shopping cart"
					></i>
					<div className="cart__counter">{cartCount}</div>
				</div>
			</Link>
		</div>
		<SelectionBar/>
		</>

	);
};

const mapStateToProps = (state) => {
	return {
		cart: state.shop.cart,
	};
};

export default connect(mapStateToProps)(Navbar);
