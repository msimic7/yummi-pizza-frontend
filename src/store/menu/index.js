import { combineReducers } from "redux";
import { UPDATE_DATA } from "./constants";

const menuDataReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_DATA:
            return action.payload;
        default:
            return state;
    }
};

export const menuUpdateData = (menuData) => {
    return {
        type: UPDATE_DATA,
        payload: menuData,
    };
};

const menuReducer = combineReducers({ menuData: menuDataReducer });

export default menuReducer;
