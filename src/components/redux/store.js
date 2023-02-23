// import { createStore } from "redux";

// import rootReducer from "./root-reducer";

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;
// console.log(store.getState());
// ----------------------------------------------- | Redux-Toolkit
import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from "./contacts/contacts-reducer";
import filterReducer from "./filter/filter-reducer";

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    }
});

export default store;