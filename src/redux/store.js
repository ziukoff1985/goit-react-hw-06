// import { configureStore } from "@reduxjs/toolkit";
// import contactsSlice from "./cotactsSlice";
// import filtersSlice from "./filtersSlice";

// export const store = configureStore({
//   reducer: {
//     contacts: contactsSlice,
//     filters: filtersSlice,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
