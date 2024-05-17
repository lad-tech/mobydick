"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modalRef = void 0;
const react_1 = require("react");
exports.modalRef = (0, react_1.createRef)();
const MobyDickPopup = {
    openPopup: props => {
        return exports.modalRef.current?.openPopup(props);
    },
    closePopup: id => {
        exports.modalRef.current?.closePopup(id);
    },
    closeAllPopups: () => {
        exports.modalRef.current?.closeAllPopups();
    },
};
exports.default = MobyDickPopup;
