import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
	return (
		<div className="navbar">
			<Link to="/">
				<h2 className="navbar__logo">Movie Cart</h2>
			</Link>
			<Link to="/cart">
				<div className="navbar__cart">
					<h3 className="cart__title">Cart</h3>
					<img
						className="cart__image"
						src="https://image.flaticon.com/icons/svg/102/102276.svg"
						alt="shopping cart"
					/>
					<div className="cart__counter">0</div>
				</div>
			</Link>
		</div>
	);
};

export default Navbar;
