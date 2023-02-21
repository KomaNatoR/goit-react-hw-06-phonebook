import { createStore } from "redux";

import reduser from "./reducer";

const store = createStore(reduser, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
// console.log(store.getState());