import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';

export const store = configureStore({
  reducer: rootReducer
  // devTools: true
});

export default store;

// import {
//   configureStore
//   //  getDefaultMiddleware
// } from '@reduxjs/toolkit';
// import rootReducer from './reducers/rootReducer';
// // import logger from 'redux-logger';

// // const middleware = [...getDefaultMiddleware(), logger];

// const store = configureStore({
//   reducer: rootReducer,
//   // middleware: middleware,
//   devTools: true,
//   preloadedState: {
//     /* votre état initial */
//   }
// });

// export default store;
