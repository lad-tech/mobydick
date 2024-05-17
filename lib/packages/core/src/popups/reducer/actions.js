"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeAllPopupsAction = exports.closePopupAction = exports.openPopupAction = void 0;
const constatnts_1 = require("./constatnts");
const openPopupAction = (popup) => ({
    type: constatnts_1.POPUP_OPEN,
    popup,
});
exports.openPopupAction = openPopupAction;
const closePopupAction = (id) => ({
    type: constatnts_1.POPUP_CLOSE,
    id,
});
exports.closePopupAction = closePopupAction;
const closeAllPopupsAction = () => ({
    type: constatnts_1.POPUP_CLOSE_ALL,
});
exports.closeAllPopupsAction = closeAllPopupsAction;
