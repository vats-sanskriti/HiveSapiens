import {configureStore}  from "@reduxjs/toolkit";
import authSlice from "./reducers/auth";
//import authReducer from "./reducers/auth";
import api from "./api/api";
import miscSlice from "./reducers/misc";
import chatSlice from "./reducers/chat";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer, // Use reducer from authSlice
    misc: miscSlice.reducer, // Use correct name
    chat: chatSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  // reducer: {
  //   auth:authReducer,
  //   [authSlice.name]: authSlice.reducer,
  //   [miscSlice.name]: miscSlice.reducer,
  //   [chatSlice.name]: chatSlice.reducer,
  //   [api.reducerPath]: api.reducer,
  // },
  
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(api.middleware),
  
 middleware: (mid) => [...mid(), api.middleware], 
});


export default store;
