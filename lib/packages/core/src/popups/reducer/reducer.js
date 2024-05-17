"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.defaultState = void 0;
const constatnts_1 = require("./constatnts");
exports.defaultState = {
    popups: [],
    currentPopup: null,
};
const reducer = (state, action) => {
    switch (action.type) {
        case constatnts_1.POPUP_OPEN:
            return {
                ...state,
                popups: [...state.popups, action.popup],
                currentPopup: action.popup,
            };
        case constatnts_1.POPUP_CLOSE:
            return {
                ...state,
                popups: state.popups.filter(item => item.id !== action.id),
                currentPopup: state.popups[state.popups.length - 2] || null,
            };
        case constatnts_1.POPUP_CLOSE_ALL:
            return {
                ...state,
                popups: [],
                currentPopup: null,
            };
        default:
            return state;
    }
};
exports.reducer = reducer;
