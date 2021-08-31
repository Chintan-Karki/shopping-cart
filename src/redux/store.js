import { createStore, applyMiddleware } from "redux"; //*import {compose for Redux devtools}
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import mySaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

// ! disabling Redux-dev-tool
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//* Connecting middleware to the store
const store = createStore(
	rootReducer,
	applyMiddleware(sagaMiddleware)

	// ! disabling Redux-dev-tool
	// composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(mySaga);

export default store;
