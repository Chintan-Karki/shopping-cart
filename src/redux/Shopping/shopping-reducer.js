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
			const item =
				state.movies.find((movie) => movie.id === action.payload.id) ||
				state.tvShows.find((movie) => movie.id === action.payload.id);
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

		// case actionTypes.FILTER_MOVIES_BY_DATE:
		// 	// API req:
		// 	// https://api.themoviedb.org/3/discover/movie?api_key=d90c8d9f8b3f091a3b2e7b14989915c6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2018-02-02&primary_release_date.lte=2021-08-27&with_watch_monetization_types=flatrate

		// 	// console.log(action.payload.startDate);
		// 	// console.log(action.payload.endDate);
		// 	// console.log(typeof action.payload.startDate);
		// 	// console.log(
		// 	// 	state.movies.filter(
		// 	// 		(movie) =>
		// 	// 			new Date(movie.release_date) < action.payload.startDate ||
		// 	// 			new Date(movie.release_date) > action.payload.endDate
		// 	// 	)
		// 	// );

		// 	return {
		// 		...state,
		// 		movies: [action.payload.movies],
		// 	};

		default:
			return state;
	}
};

export default shopReducer;
