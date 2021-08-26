import * as actionTypes from "./shopping-types";

export const loadTmdbMovies = (query) => {
	return {
		type: actionTypes.LOAD_TMDB_MOVIES,
		payload: {
			query,
		},
	};
};

export const loadTvShows = () => {
	return {
		type: actionTypes.LOAD_TMDB_TV_SHOWS,
	};
};

export const loadUpcoming = () => {
	return {
		type: actionTypes.LOAD_UPCOMING,
	};
};

export const loadMoviesSuccess = (movies) => {
	return {
		type: actionTypes.LOAD_TMDB_MOVIES_SUCCESS,
		payload: {
			movies: movies,
		},
	};
};

export const loadTvShowsSuccess = (tvShows) => {
	return {
		type: actionTypes.LOAD_TMDB_TV_SHOWS_SUCCESS,
		payload: {
			tvShows: tvShows,
		},
	};
};

export const loadUpcomingSuccess = (movies) => {
	return {
		type: actionTypes.LOAD_UPCOMING_SUCCESS,
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
