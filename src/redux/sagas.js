import { put, call, takeLatest, select } from "@redux-saga/core/effects";
import * as actionTypes from "./Shopping/shopping-types";
import { handleLoadMovies, handleLoadTvShows } from "../api";
import {
	loadMoviesSuccess,
	loadTvShowsSuccess,
	loadUpcomingSuccess,
} from "./Shopping/shopping-actions";
import { format } from "date-fns";
import { getLinkFromObject } from "../utils";

const API_KEY = process.env.REACT_APP_API_KEY;

/*
 * Selectors. The query picks out the filters that are to be considered
 */
const getGenre = (state) => state.shop.selected_genre;
const getStartDate = (state) =>
	state.shop.date_filter ? state.shop.date_filter.startDate : "";
const getEndDate = (state) =>
	state.shop.date_filter ? state.shop.date_filter.endDate : "";

function* fetchMovies(action) {
	try {
		const query = action.payload.query;
		const urlMovies =
			query === ""
				? `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
				: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
		const movies = yield call(handleLoadMovies, urlMovies);
		yield put(loadMoviesSuccess(movies));
	} catch (error) {
		//   dispatch errors
		console.log(error);
	}
}
function* fetchTvShows() {
	try {
		const urlTvShows = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US`;
		const shows = yield call(handleLoadTvShows, urlTvShows);
		yield put(loadTvShowsSuccess(shows));
	} catch (error) {
		console.log(error);
	}
}

function* fetchUpcoming() {
	try {
		const upcomingMoviesURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
		const movies = yield call(handleLoadMovies, upcomingMoviesURL);
		yield put(loadUpcomingSuccess(movies));
	} catch (error) {
		console.log(error);
	}
}

function* fetchFilteredMovies(action) {
	try {
		const startDateFromState = yield select(getStartDate);
		const endDateFromState = yield select(getEndDate);
		const genreID = action.payload.id;

		const genreUrlObj = {
			with_genres: genreID,
			"primary_release_date.gte":
				startDateFromState instanceof Date
					? format(startDateFromState, "yyyy-MM-dd")
					: "",
			"primary_release_date.lte":
				endDateFromState instanceof Date
					? format(endDateFromState, "yyyy-MM-dd")
					: "",
		};

		const genre_movies = yield call(
			handleLoadMovies,
			getLinkFromObject(genreUrlObj)
		);
		yield put(loadMoviesSuccess(genre_movies));
	} catch (error) {
		console.log(error);
	}
}

function* fetchDateFilteredMovies(action) {
	try {
		const genreFromState = yield select(getGenre);
		const startDate = action.payload.startDate;
		const endDate = action.payload.endDate;
		const urlObject = {
			"primary_release_date.gte": format(startDate, "yyyy-MM-dd"),
			"primary_release_date.lte": format(endDate, "yyyy-MM-dd"),
			with_genres: genreFromState ? genreFromState.id : "",
		};

		const dateFilteredMoviesURL = getLinkFromObject(urlObject);

		const genre_movies = yield call(handleLoadMovies, dateFilteredMoviesURL);
		yield put(loadMoviesSuccess(genre_movies));
	} catch (error) {
		console.log(error);
		alert("Please make sure to fill both the start and end dates");
	}
}

export default function* mySaga() {
	yield takeLatest(actionTypes.LOAD_TMDB_MOVIES, fetchMovies);
	yield takeLatest(actionTypes.LOAD_TMDB_TV_SHOWS, fetchTvShows);
	yield takeLatest(actionTypes.LOAD_UPCOMING, fetchUpcoming);
	yield takeLatest(actionTypes.LOAD_SELECTED_GENRE, fetchFilteredMovies);
	yield takeLatest(actionTypes.FILTER_MOVIES_BY_DATE, fetchDateFilteredMovies);
}
