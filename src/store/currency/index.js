import { combineReducers } from "redux";
import { UPDATE_TYPE, UPDATE_CONVERSION_CONST } from "./constants";

const currencyTypeReducer = (state = "usd", action) => {
    switch (action.type) {
        case UPDATE_TYPE:
            return action.payload;
        default:
            return state;
    }
};

const currencyConversionReducer = (state = 1, action) => {
    switch (action.type) {
        case UPDATE_CONVERSION_CONST:
            return action.payload;
        default:
            return state;
    }
};

const currencyReducer = combineReducers({
    currencyType: currencyTypeReducer,
    currencyConversionConst: currencyConversionReducer,
});

export const currencyUpdateType = (currencyType) => {
    return {
        type: UPDATE_TYPE,
        payload: currencyType,
    };
};

export const currencyConversionConst = (currencyConversionConst) => {
    return {
        type: UPDATE_CONVERSION_CONST,
        payload: currencyConversionConst,
    };
};

export default currencyReducer;
