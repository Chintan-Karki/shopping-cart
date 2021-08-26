import { put, call, takeLatest } from "@redux-saga/core/effects";
import * as actionTypes from "./Shopping/shopping-types";
import { handleLoadMovies, handleLoadTvShows } from "../api";
import {
	loadMoviesSuccess,
	loadTvShowsSuccess,
	loadUpcomingSuccess,
} from "./Shopping/shopping-actions";
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

export default function* mySaga() {
	yield takeLatest(actionTypes.LOAD_TMDB_MOVIES, fetchMovies);
	yield takeLatest(actionTypes.LOAD_TMDB_TV_SHOWS, fetchTvShows);
	yield takeLatest(actionTypes.LOAD_UPCOMING, fetchUpcoming);
}