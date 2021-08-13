import "./App.css";
import Navbar from "./components/NavBar/NavBar.jsx";
import Movies from "./components/Movies/Movies";
import SingleItem from "./components/SingleItem/SingleItem";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import { connect } from "react-redux";

function App({ currentItem }) {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Movies} />
					<Route exact path="/cart" component={Cart} />
					{!currentItem ? (
						<Redirect to="/" />
					) : (
						<Route exact path="/movie/:id" component={SingleItem} />
					)}
				</Switch>
			</div>
		</Router>
	);
}

const mapStateToProps = (state) => {
	return {
		currentItem: state.shop.currentItem,
	};
};

export default connect(mapStateToProps)(App);
