import { createStore, combineReducers } from "redux";
import cart from "./cart";
import currency from "./currency";
import menu from "./menu";

const allReducers = combineReducers({
    cart,
    currency,
    menu,
});

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
