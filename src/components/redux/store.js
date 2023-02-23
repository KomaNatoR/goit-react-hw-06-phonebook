// import { createStore } from "redux";

// import rootReducer from "./root-reducer";

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;
// console.log(store.getState());
// ----------------------------------------------- | Redux-Toolkit
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist';

import rootReducer from "./root-reducer";
// import contactsReducer from "./contacts/contacts-reducer";
// import filterReducer from "./filter/filter-reducer";

export const store = configureStore({
    reducer: rootReducer,
});
export const persistor = persistStore(store);