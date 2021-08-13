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

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Movies} />
					<Route exact path="/cart" component={Cart} />
					<Route exact path="/movie/:id" component={SingleItem} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
