import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
	movies: [], // {id, title, description, price, img}
	cart: [], // {id, title, description, price, img, qty}
	currentItem: null, //
	tvShows: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.LOAD_TMDB_MOVIES:
			return {
				...state,
				query: action.payload.query,
				// movies: [...action.payload.movies],
			};

		case actionTypes.LOAD_TMDB_MOVIES_SUCCESS:
			return {
				...state,
				movies: [...action.payload.movies],
			};
		
		case actionTypes.LOAD_UPCOMING_SUCCESS:
			return {
				...state,
				movies: [...action.payload.movies],
			};

		case actionTypes.LOAD_TMDB_TV_SHOWS:
			return {
				...state,
			};

		case actionTypes.LOAD_TMDB_TV_SHOWS_SUCCESS:
			return {
				...state,
				tvShows: [...action.payload.tvShows],
			};

		case actionTypes.ADD_TO_CART:
			const item = state.movies.find((movie) => movie.id === action.payload.id) ||state.tvShows.find((movie) => movie.id === action.payload.id);
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
