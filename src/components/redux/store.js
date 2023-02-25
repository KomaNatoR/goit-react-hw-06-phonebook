// import { createStore } from "redux";

// import rootReducer from "./reducer";

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;
// console.log(store.getState());
// -------------------------------------------------- | Redux-Toolkit |

import { configureStore } from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
// import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

// export const addContact = createAction("contact/add");
// export const deleteContact = createAction("contact/delete");

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: "",
};
// const myReducer = createReducer(initialState, {
//     [addContact]: (state, action) => {
//         const newContact = [action.payload, ...state.contacts];
//         return {...state, contacts: newContact};
//     },
//     [deleteContact]: (state, action) =>{
//         const resultContact = state.contacts.filter(item=>item.id!==action.payload);
//         return { ...state, contacts: resultContact };
//     },
// });

// const store = configureStore({
//     reducer: {
//       store: myReducer,
//     },
// });
// export default store;
// -------------------------------------------------- | Create-Slice |
const mySlice = createSlice({
    name: "GlobalState",
    initialState: initialState,
    reducers: {
        addContact(state, action) {
            // console.log(state);
            // console.log(state.contacts);
            // console.log("filter:", state.filter);
            const newContact = [action.payload, ...state.contacts];
            return {...state, contacts: newContact};
        },
        deleteContact(state, action) {
            const resultContact = state.contacts.filter(item=>item.id!==action.payload);
            return { ...state, contacts: resultContact };
        },
        setFilter(state, action) {
            // console.log("filterState:", state.filter);
            // console.log("filterAction:", action.payload);
            // const normalizeFilter = action.payload.toLowerCase().trim();
            // const visiblePersons = state.contacts.filter(cont => cont.name.toLowerCase().includes(normalizeFilter));
            return { ...state, filter: action.payload};
        },
    },
});

const store = configureStore({
    reducer: mySlice.reducer,
});
export default store;
// export default mySlice.reducer;
export const { addContact, deleteContact, setFilter } = mySlice.actions;
