"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const MobyDickPopup_1 = require("../MobyDickPopup");
const usePopup = (modal) => {
    const id = (0, react_1.useRef)(null);
    return {
        open: (props) => {
            id.current = MobyDickPopup_1.MobyDickPopup.openPopup({
                Content: modal,
                props: props ||
                    {},
            });
        },
        close: () => {
            if (id.current) {
                MobyDickPopup_1.MobyDickPopup.closePopup(id.current);
                id.current = null;
            }
        },
        closeAll: () => {
            MobyDickPopup_1.MobyDickPopup.closeAllPopups();
        },
    };
};
exports.default = usePopup;
