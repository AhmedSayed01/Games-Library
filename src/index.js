import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux';
// import { createStore } from "redux"
// import rootReducer from './shared/reducers';
// import { applyMiddleware } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';


const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = configureStore((reducer)=>[rootReducer(reducer)],{},applyMiddleware());
root.render(
  <BrowserRouter>
  {/* <Provider store={store}> */}
   <App />
 
  {/* </Provider> */}
 </BrowserRouter>
);

