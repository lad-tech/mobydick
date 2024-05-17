"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const missingFunc = () => {
    throw new Error('[@lad-tech/mobydick-core] usePopups hook was called outside of context, wrap your app with PopupsProvider component');
};
const PopupsContext = (0, react_1.createContext)({
    popups: [],
    openPopup: missingFunc,
    closePopup: missingFunc,
    closeAllPopups: missingFunc,
});
PopupsContext.displayName = '@lad-tech/mobydick-core/PopupsContext';
exports.default = PopupsContext;
