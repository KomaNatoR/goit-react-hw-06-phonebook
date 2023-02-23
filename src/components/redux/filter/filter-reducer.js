// import { SET_FILTER } from "./filter-types";

// const initialState = "";

// const filterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SET_FILTER:
//             return action.payload;
//         default:
//             return state;
//     };
// };
// -------------------------------------------------- | Redux-Toolkit
import { createReducer } from "@reduxjs/toolkit";

import { setFilter } from "./filter-action";

const filterReducer = createReducer("", {
    [setFilter]: (state, action) => action.payload,
})

export default filterReducer;