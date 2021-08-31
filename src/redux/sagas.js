import { put, call, takeLatest } from "@redux-saga/core/effects";
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
		const genreID = action.payload.id;
		const genreUrlObj = {
			with_genres: genreID,
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
		const startDate = action.payload.startDate;
		const endDate = action.payload.endDate;

		const urlObject = {
			adult: "false",
			include_video: "false",
			page: 1,
			"primary_release_date.gte": format(startDate, "yyyy-MM-dd"),
			"primary_release_date.lte": format(endDate, "yyyy-MM-dd"),
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
