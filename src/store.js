import { createStore } from "@reduxjs/toolkit";

const persistedState = {
  ...JSON.parse(localStorage.getItem("state")),
};

const initialState =
  localStorage.getItem("state") === null
    ? {
        cart: {}
      }
    : persistedState;

const saveState = (state) => {
  localStorage.setItem("state", JSON.stringify(state));
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return{
        ...state,
        cart : {
          ...state.cart,
          [action.payload.id] : {
            id : action.payload.id
          }
        }
      }
    case "REMOVE_FROM_CART":
      var newCart = state.cart
      delete newCart[action.payload.id]
      return{
        ...state,
        cart : {
          ...newCart
        }
      }
    case "CLEAR_CART" :
      return {
        ...state,
        cart : {}
      }
    default:
      return state;
  }
};

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
    saveState(store.getState());
  });

export default(store)
