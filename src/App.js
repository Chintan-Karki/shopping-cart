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
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { connect } from "react-redux";
import TvShows from "./components/TvShows/TvShows";

function App({ currentItem }) {
	return (
		<Router>
			<Navbar />
			<div className="App">
				<Switch>
					<Route exact path="/" component={Movies} />
					<Route exact path="/cart" component={Cart} />
					<Route exact path="/tv-shows" component={TvShows} />
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
