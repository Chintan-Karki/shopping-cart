import * as actionTypes from "./shopping-types";
import { moviesList } from "./movieDB";

const INITIAL_STATE = {
	movies: moviesList, // {id, title, description, price, img}
	cart: [], // {id, title, description, price, img, qty}
	currentItem: null, //
};

const shopReducer = (state = INITIAL_STATE, action) => {
	
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			const item = state.movies.find((movie) => movie.id === action.payload.id);
			const isInCart = state.cart.find((item) =>
				item.id === action.payload.id ? true : false
			);

			return {
				...state,
				cart: isInCart
					? state.cart.map((item) =>
							item.id === action.payload.id
								? { ...item, qty: item.qty + 1 }
								: item
					  )
					: [...state.cart, { ...item, qty: 1 }],
			};

		case actionTypes.REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload.id),
			};

		case actionTypes.ADJUST_QUANTITY:
			return {
				...state,
				cart: state.cart.map((item) =>
					item.id === action.payload.id
						? { ...item, qty: +action.payload.qty }
						: item
				),
			};

		case actionTypes.LOAD_CURRENT_ITEM:
			return {
				...state,
				currentItem: action.payload,
			};
		default:
			return state;
	}
};

export default shopReducer;
