import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);
  // store = applyMiddleware(store, addLoggingToDispatch);
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});


// PHASE 1:
// const addLoggingToDispatch = (store) => {
//   let storeDispatch = store.dispatch;
//   return (action) => {
//     console.log(store.getState());
//     console.log(action);
//     console.log(storeDispatch(action));
//     console.log(store.getState());
//   };
// }
// PHASE 2:
// const addLoggingToDispatch = store => next => action => {
//   console.log(store.getState());
//     console.log(action);
//     next(action);
//     console.log(store.getState());
// };
//
// const applyMiddleware = (store, ...middle) => {
//   let dispatch = store.dispatch;
//   middle.forEach((el) => {
//     dispatch = el(store)(dispatch);
//   });
//   return Object.assign({}, store, {dispatch});
// };
