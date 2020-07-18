import { combineReducers } from "redux";
import { COUNT_INCREMENT, COUNT_DECREMENT, UPDATE_ORDER } from "./constants";

const cartCountReducer = (state = 0, action) => {
    switch (action.type) {
        case COUNT_INCREMENT:
            return ++state;
        case COUNT_DECREMENT:
            return --state;
        default:
            return state;
    }
};

const cartOrderReducer = (state = [], action) => {
    switch (action.type) {
        case UPDATE_ORDER:
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
        default:
            return state;
    }
};

const cartReducer = combineReducers({
    cartCount: cartCountReducer,
    cartOrder: cartOrderReducer,
});

export const cartIncrement = () => {
    return { type: COUNT_INCREMENT };
};

export const cartDecrement = () => {
    return { type: COUNT_DECREMENT };
};

export const cartUpdateOrder = (orderItem) => {
    return { type: UPDATE_ORDER, payload: orderItem };
};

export default cartReducer;
