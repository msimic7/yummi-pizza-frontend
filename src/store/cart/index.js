import { combineReducers } from "redux";
import {
    COUNT_INCREMENT,
    COUNT_DECREMENT,
    ADD_ORDER,
    REMOVE_ORDER,
    PRICE_INCREASE,
    PRICE_DECREASE,
    CLEAR_COUNT,
    CLEAR_ORDER,
    CLEAR_TOTAL_PRICE,
} from "./constants";

const cartCountReducer = (state = 0, action) => {
    switch (action.type) {
        case COUNT_INCREMENT:
            return ++state;
        case COUNT_DECREMENT:
            return --state;
        case CLEAR_COUNT: {
            return 0;
        }
        default:
            return state;
    }
};

const cartOrderReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_ORDER: {
            const { payload } = action;
            let exists = false;

            let newOrder = state.map((o) => {
                if (o.id === payload.id) {
                    exists = true;
                    return {
                        id: o.id,
                        name: o.name,
                        price: o.price,
                        quantity: ++o.quantity,
                    };
                }
                return o;
            });

            if (!exists) newOrder = [...newOrder, payload];

            return newOrder;
        }
        case REMOVE_ORDER: {
            const { payload } = action;

            let newOrder = state.flatMap((o) => {
                if (o.id === payload.id) {
                    if (o.quantity !== 1) {
                        return {
                            id: o.id,
                            name: o.name,
                            price: o.price,
                            quantity: --o.quantity,
                        };
                    } else return [];
                }
                return o;
            });

            return newOrder;
        }
        case CLEAR_ORDER: {
            return [];
        }
        default:
            return state;
    }
};

const cartTotalPriceReducer = (state = 0, action) => {
    switch (action.type) {
        case PRICE_INCREASE:
            return state + action.payload;
        case PRICE_DECREASE:
            return state - action.payload;
        case CLEAR_TOTAL_PRICE: {
            return 0;
        }
        default:
            return state;
    }
};

const cartReducer = combineReducers({
    cartCount: cartCountReducer,
    cartOrder: cartOrderReducer,
    totalPrice: cartTotalPriceReducer,
});

export const cartIncrement = () => {
    return { type: COUNT_INCREMENT };
};

export const cartDecrement = () => {
    return { type: COUNT_DECREMENT };
};

export const cartAddOrder = (orderItem) => {
    return { type: ADD_ORDER, payload: orderItem };
};

export const cartRemoveOrder = (orderItem) => {
    return { type: REMOVE_ORDER, payload: orderItem };
};

export const cartClearOrder = () => {
    return { type: CLEAR_ORDER };
};

export const cartClearCount = () => {
    return { type: CLEAR_COUNT };
};

export const cartClearTotalPrice = () => {
    return { type: CLEAR_TOTAL_PRICE };
};

export const cartTotalPriceIncrease = (itemPrice) => {
    return { type: PRICE_INCREASE, payload: itemPrice };
};

export const cartTotalPriceDecrease = (itemPrice) => {
    return { type: PRICE_DECREASE, payload: itemPrice };
};

export default cartReducer;
