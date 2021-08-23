import { takeEvery, put, call } from "@redux-saga/core/effects";
import * as actionTypes from "./Shopping/shopping-types";
import { handleLoadMovies } from "../api";
import {
	loadTmdbMovies,
	loadTmdbMoviesSuccess,
} from "./Shopping/shopping-actions";

// const API_KEY = process.env.REACT_APP_API_KEY;

function* fetchMovies() {
	// console.log("Hello from Saga");
	try {
		const query = "Avengers";
		const movies = yield call(handleLoadMovies, query);
		console.log(movies);
		yield put(loadTmdbMoviesSuccess(movies));
	} catch (error) {
		//   dispatch errors
		console.log(error);
	}
}

export default function* mySaga() {
	yield takeEvery(actionTypes.LOAD_TMDB_MOVIES, fetchMovies);
}

// import { takeEvery, select, call, put } from 'redux-saga/effects';
// import { setError, setImages } from '../actions';
// import { fetchImages } from '../api';
// import { IMAGES } from '../constants';

// const getPage = state => state.nextPage;

// function* handleLoadImages() {
//   try {
//     const page = yield select(getPage);
//     const images = yield call(fetchImages, page);
//     yield put(setImages(images));
//   } catch (error) {
//     //   dispatch errors
//     yield put(setError(error.toString()));
//   }
// }

// export default function* watchImagesLoad() {
//   // yield takeEvery(ACTION, workerSaga)
//   yield takeEvery(IMAGES.LOAD, handleLoadImages);
// }
