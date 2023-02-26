// import { createStore } from "redux";

// import rootReducer from "./reducer";

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;
// console.log(store.getState());
// -------------------------------------------------- | Redux-Toolkit |

// import { configureStore } from '@reduxjs/toolkit';
// import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

// export const addContact = createAction("contact/add");
// export const deleteContact = createAction("contact/delete");

// const initialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: "",
// };
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

import { configureStore } from '@reduxjs/toolkit';
// import { mySlice } from './slice';                                     // - це якщо без персіста! 

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { persistMySlice } from './slice';                                  // - то є персіст!
// ------------------------------------------------------якщо-тут-персіст--------------------------------------
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import storage from 'redux-persist/lib/storage';
// const persistConfig = {
//     key: 'contactsLocalStorageKey',
//     storage,
//     whitelist: ['contacts'],                                               // - прикольна штука, можна вибирати шо з initialState зберігати!
// };
// const persistGlobalStore = persistReducer(persistConfig, mySlice.reducer); // - то є його кінець!
// -------------------------------------------------------------------------------------------------------------

const store = configureStore({
    // reducer: mySlice.reducer,                                             // - так було без персіста!
    reducer: persistMySlice,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export default store;
// export default mySlice.reducer;                         // - один із варіантів екпорта(експорт по Богдану)!

export const persistor = persistStore(store);                                // - експорт персіста!
