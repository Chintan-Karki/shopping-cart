import * as actionTypes from "./shopping-types";

export const loadTmdbMovies = (movies) => {
	return {
		type: actionTypes.LOAD_TMDB_MOVIES,
		payload: {
			movies: movies,
		},
	};
};

export const loadTmdbMoviesSuccess = (movies) => {
	return {
		type: actionTypes.LOAD_TMDB_MOVIES_SUCCESS,
		payload: {
			movies: movies,
		},
	};
};

export const addToCart = (itemID) => {
	return {
		type: actionTypes.ADD_TO_CART,
		payload: {
			id: itemID,
		},
	};
};

export const removeFromCart = (itemID) => {
	return {
		type: actionTypes.REMOVE_FROM_CART,
		payload: {
			id: itemID,
		},
	};
};

export const adjustQuantity = (itemID, value) => {
	return {
		type: actionTypes.ADJUST_QUANTITY,
		payload: {
			id: itemID,
			qty: value,
		},
	};
};

export const loadCurrentItem = (item) => {
	return {
		type: actionTypes.LOAD_CURRENT_ITEM,
		payload: item,
	};
};
