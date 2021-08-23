import { takeEvery, put, call } from "@redux-saga/core/effects";
import * as actionTypes from "./Shopping/shopping-types";
import { handleLoadMovies } from "../api";
import { loadMoviesSuccess } from "./Shopping/shopping-actions";

function* fetchMovies(action) {
	try {
		const query = action.payload.query;
		const movies = yield call(handleLoadMovies, query);
		yield put(loadMoviesSuccess(movies));
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
